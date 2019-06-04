package msg.user.boundary;

import msg.user.entity.dto.UserDTO;
import msg.user.entity.dto.UserDataDTO;
import msg.user.entity.dto.UserInputDTO;
import msg.user.entity.dto.UserRolesDTO;

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
@Path("/users")
public class UserResource {
    @EJB
    UserFacade userFacade;

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response createUser(UserInputDTO inputDTO) {
        return Response
                .status(200)
                .entity(userFacade.createUser(inputDTO))
                .build();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAll() {
        return Response
                .status(200)
                .entity(userFacade.getAll())
                .build();
        //return Response.ok(userFacade.getAll()).build();
    }

    @GET
    @Path(value = "/getUser/{username}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getUser(@PathParam("username") String username) {
        System.out.println("String username ´" + username);
        return Response
                .status(200)
                .entity(userFacade.getUser(username))
                .build();
    }

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("/getUserRoles")
    public Response getUserRoles(UserRolesDTO userRolesDTO) {
        return Response
                .status(200)
                .entity(userFacade.getUserRoles(userRolesDTO.getUsername()))
                .build();
        //return Response.ok(userFacade.getAll()).build();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("/getUserData/{username}")
    public Response getUserData(@PathParam("username") String username) {
        return Response
                .status(200)
                .entity(userFacade.getUserData(username))
                .build();
    }

    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("/activate")
    public Response activateOrReset(UserDataDTO userDataDTO){
        return Response
                .status(200)
                .entity(userFacade.activateOrReset(userDataDTO.getUsername()))
                .build();
    }

    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("/deactivate")
    public Response deactivate(UserDataDTO userDataDTO){
        return Response
                .status(200)
                .entity(userFacade.deactivate(userDataDTO.getUsername()))
                .build();
    }

    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/decrement")
    public Response decrementUser(UserDataDTO userDataDTO){
        return Response
                .status(200)
                .entity(userFacade.decrementUser(userDataDTO.getUsername()))
                .build();
    }

    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public Response updateUser(UserInputDTO userDTO) {
        //userFacade = null;
        //userFacade.updateUser(userDTO)
        return Response.status(200).entity(userFacade.updateUser(userDTO)).build();

    }

}


