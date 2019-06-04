package msg.bug.boundary;

import msg.bug.entity.dto.BugDTO;

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
@Path("/bugs")
public class BugResource {

    @EJB
    BugFacade bugFacade;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAll(){
        return Response
                .status(200)
                .header("Access-Control-Allow-Origin", "*")
                .header("Access-Control-Allow-Credentials", "true")
                .header("Access-Control-Allow-Headers",
                        "origin, content-type, accept, authorization")
                .header("Access-Control-Allow-Methods",
                        "GET, POST, PUT, DELETE, OPTIONS, HEAD")
                .entity(bugFacade.getAll())
                .build();
        //return Response.ok(userFacade.getAll()).build();
    }

    @PUT
    @Produces(MediaType.APPLICATION_JSON)
    public Response modifyStatus(BugDTO bug) {
        return Response
                .status(200)
                .entity(bugFacade.modifyStatus(bug))
                .build();
        //return Response.ok(userFacade.getAll()).build();
    }

    @GET
    @Path(value = "/getBug/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getUser(@PathParam("id") Long id) {
        return Response
                .status(200)
                .entity(bugFacade.getBug(id))
                .build();
    }

    @PUT
    @Path("/edit")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response updateUser(BugDTO bugDTO) {
        //userFacade = null;
        //userFacade.updateUser(userDTO)
        return Response.status(200).entity(bugFacade.updateBug(bugDTO)).build();

    }

}
