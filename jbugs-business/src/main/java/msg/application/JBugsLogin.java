package msg.application;

import msg.exeptions.BusinessExceptionMapper;
import msg.filters.RestResponseFilter;
import msg.user.boundary.AuthResource;
import org.glassfish.jersey.jackson.internal.jackson.jaxrs.json.JacksonJsonProvider;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;
import java.util.HashSet;
import java.util.Set;

/**
 * Document me.
 *
 * @author msg systems AG; User Name.
 * @since 19.1.2
 */
@ApplicationPath("login")
public class JBugsLogin extends Application {
    @Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> classes = new HashSet<>();
        classes.add(BusinessExceptionMapper.class);
        classes.add(AuthResource.class);
        classes.add(RestResponseFilter.class);
        return classes;
    }

    @Override
    public Set<Object> getSingletons() {
        Set<Object> set = new HashSet<>();
        set.add(new JacksonJsonProvider());
        return set;
    }
}
