package msg.role.boundary;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.GET;
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
@Path("/roles")
public class RoleResource {
    @EJB
    private RoleFacade roleFacade;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/getTypes")
    public Response getRoleTypes(){
        return Response.ok(roleFacade.getRoleTypes()).build();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAll(){
        return Response.ok(roleFacade.getAll()).build();
    }
}
