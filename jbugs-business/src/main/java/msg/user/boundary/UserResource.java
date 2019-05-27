package msg.user.boundary;

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
    @Produces(MediaType.APPLICATION_JSON)
    public Response createUser(UserInputDTO inputDTO){
        return Response
                .status(200)
                .entity(userFacade.createUser(inputDTO))
                .build();
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
