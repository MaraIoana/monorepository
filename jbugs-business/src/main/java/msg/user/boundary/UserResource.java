package msg.user.boundary;

import msg.user.entity.dto.UserDTO;
import msg.user.entity.dto.UserInputDTO;
import msg.user.entity.dto.UserRolesDTO;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.print.attribute.standard.Media;
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

    @GET
    @Path(value = "/getUser/{username}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getUser(@PathParam("username") String username){
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
    public Response getUserRoles(UserRolesDTO userRolesDTO){
        return Response
                .status(200)
                .entity(userFacade.getUserRoles(userRolesDTO.getUsername()))
                .build();
        //return Response.ok(userFacade.getAll()).build();
    }

//    @OPTIONS
//    public Response options() {
//        return Response.ok("")
//                .header("Access-Control-Allow-Origin", "*")
//                .header("Access-Control-Allow-Headers", "origin, content-type, accept, authorization")
//                .header("Access-Control-Allow-Credentials", "true")
//                .header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD")
//                .header("Access-Control-Max-Age", "1209600")
//                .build();
//    }
}

