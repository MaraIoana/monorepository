package msg.filters;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.Claim;
import com.auth0.jwt.interfaces.DecodedJWT;
import msg.exeptions.BusinessException;
import msg.user.MessageCatalog;

import javax.annotation.Priority;
import javax.ejb.Stateless;
import javax.ws.rs.Priorities;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.container.PreMatching;
import javax.ws.rs.core.SecurityContext;
import javax.ws.rs.ext.Provider;
import java.io.IOException;
import java.security.Principal;
import java.util.List;

/**
 * Document me.
 *
 * @author msg systems AG; User Name.
 * @since 19.1.2
 */
@Provider
public class AuthorizationFilter implements ContainerRequestFilter {

    @Override
    public void filter(ContainerRequestContext containerRequestContext){
        String authorizationValue = containerRequestContext.getHeaderString("Authorization");
        try {
            if(authorizationValue.startsWith("Bearer")){
                Algorithm algorithm = Algorithm.HMAC256("jbugs");
                JWTVerifier jwtVerifier = JWT.require(algorithm).withIssuer("auth0").build();
                DecodedJWT decode = jwtVerifier.verify(authorizationValue.split(" ")[1]);
                if(isTokenValid(decode)){
                    List<String> permissions = decode.getClaim("permissions").asList(String.class);
                    String username = decode.getClaim("username").asString();
                    containerRequestContext.setSecurityContext(new Authorization(permissions, username));
                }
            }
        }catch (Exception e){
            throw new BusinessException(MessageCatalog.INVALID_CREDENTIALS);
        }

    }

    private boolean isTokenValid(DecodedJWT s){
        return true;
    }

    public class Authorization implements SecurityContext{

        private List<String> permissions;
        private String username;

        public Authorization(List<String> permissions, String username) {
            this.permissions = permissions;
            this.username = username;
        }

        @Override
        public Principal getUserPrincipal() {
            return new Principal() {
                @Override
                public String getName() {
                    return username;
                }
            };
        }

        @Override
        public boolean isUserInRole(String s) {
            return permissions.contains(s);
        }

        @Override
        public boolean isSecure() {
            return true;
        }

        @Override
        public String getAuthenticationScheme() {
            return null;
        }
    }

}
