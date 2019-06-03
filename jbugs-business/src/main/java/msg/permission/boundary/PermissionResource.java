package msg.permission.boundary;

import jdk.nashorn.internal.objects.annotations.Getter;
import msg.exeptions.BusinessException;
import msg.exeptions.BusinessExceptionMapper;
import msg.permission.entity.dto.PermissionTypeDTO;
import msg.permission.entity.dto.UserPermissionsDTO;

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

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/userPermissions")
    public Response getPermissionsForUser(UserPermissionsDTO userPermissionsDTO){
        return Response.status(200).entity(permissionFacade.getPermissionsForUser(userPermissionsDTO.getUsername())).build();
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/rolePermissions")
    public Response getRolePermissions(PermissionTypeDTO permissionTypeDTO){
        return Response.status(200).entity(permissionFacade.getRolePermissions(permissionTypeDTO.getType())).build();
    }






}
