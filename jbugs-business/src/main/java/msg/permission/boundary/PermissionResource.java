package msg.permission.boundary;

import jdk.nashorn.internal.objects.annotations.Getter;
import msg.permission.entity.dto.PermissionTypeDTO;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.awt.*;

/**
 * Document me.
 *
 * @author msg systems AG; User Name.
 * @since 19.1.2
 */

@Stateless
@Path("/permissions")
public class PermissionResource {

    @EJB
    private PermissionFacade permissionFacade;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAll(){
        return Response.ok(permissionFacade.getAll()).build();
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/perm")
    public Response getPermissionByType(PermissionTypeDTO type){
        return Response.ok(permissionFacade.getPermissionByType(type.getType())).build();
    }




}
