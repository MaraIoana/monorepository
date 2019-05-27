package msg.role.boundary;

import msg.role.entity.dto.RoleInputDTO;
import msg.role.entity.dto.RoleTypeDTO;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.*;
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

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/role")
    public Response getRole(RoleTypeDTO type) {
        return Response.ok(roleFacade.getRole(type.getType())).build();
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/save")
    public Response save(RoleInputDTO roleInputDTO){
        return Response.ok(roleFacade.save(roleInputDTO)).build();
    }
}
