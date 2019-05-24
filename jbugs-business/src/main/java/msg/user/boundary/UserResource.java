package msg.user.boundary;

import msg.user.entity.dto.UserDTO;
import msg.user.entity.dto.UserInputDTO;

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
<<<<<<< HEAD
   public Response createUser(UserInputDTO inputDTO){
        //userFacade = null;
        //userFacade.createUser(inputDTO);
        //return Response.ok().build();
        return Response.status(200).entity(userFacade.createUser(inputDTO)).build();

//       userFacade.createUser(inputDTO);
//       return null;
=======
    @Produces(MediaType.APPLICATION_JSON)
    public Response createUser(UserInputDTO inputDTO){
        return Response
                .status(200)
                .entity(userFacade.createUser(inputDTO))
                .build();
>>>>>>> 5d06dff5b821bbe3933dc655b0cd14a91e8e8ba9
   }

    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public Response updateUser(UserDTO userDTO) {
        //userFacade = null;
        //userFacade.updateUser(userDTO);
        return Response.status(200).entity(userFacade.updateUser(userDTO)).build();

    }

   @GET
   @Produces(MediaType.APPLICATION_JSON)
    public Response getAll(){
       return Response
               .status(200)
               .entity(userFacade.getAll())
               .build();
        //return Response.ok(userFacade.getAll()).build();
   }
}
