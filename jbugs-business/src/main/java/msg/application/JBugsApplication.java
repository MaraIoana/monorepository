package msg.application;

import msg.bug.boundary.BugResource;
import msg.exeptions.BusinessExceptionMapper;
import msg.exeptions.RuntimeExceptionMapper;
import msg.filters.AuthorizationFilter;
import msg.user.boundary.AuthResource;
import msg.user.boundary.UserResource;
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
@ApplicationPath("jbugs-api")
public class JBugsApplication extends Application {
    @Override
    public Set<Class<?>> getClasses(){
        Set<Class<?>> classes = new HashSet<>();
        classes.add(UserResource.class);
        classes.add(BusinessExceptionMapper.class);
        classes.add(RuntimeExceptionMapper.class);
        classes.add(AuthResource.class);
        classes.add(BugResource.class);
        //classes.add(AuthorizationFilter.class);
        return classes;
    }

    @Override
    public Set<Object> getSingletons(){
        Set<Object> set = new HashSet<>();
        set.add(new JacksonJsonProvider());
        return set;
    }
}
