package msg.user.boundary;


import msg.user.entity.dto.UserLoginDTO;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * Document me.
 *
 * @author msg systems AG; User Name.
 * @since 19.1.2
 */
@Stateless
@Path("/auth")
public class AuthResource {
    @EJB
    UserFacade userFacade;

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response login(UserLoginDTO userLoginDTO){
        return Response
                .status(200)
                .entity(userFacade.authenticateUser(userLoginDTO))
                .build();
    }


}
