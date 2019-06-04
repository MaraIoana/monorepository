package msg.bug.boundary;

import msg.bug.control.BugControl;
import msg.bug.entity.dto.BugDTO;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import java.util.List;

/**
 * Document me.
 *
 * @author msg systems AG; User Name.
 * @since 19.1.2
 */

@Stateless
public class BugFacade {

    @EJB
    private BugControl bugControl;

    //@PermitAll
   // @RolesAllowed(Permission.BUG_MANAGEMENT)
    //public void createBug(BugDTO bug){
       // this.bugControl.createBug(bug);}

    //@RolesAllowed(Permission.BUG_MANAGEMENT)
    public List<BugDTO> getAll(){
        return bugControl.getAll();
    }

    public BugDTO getBug(Long id) {
        return bugControl.getBug(id);
    }

    public Object updateBug(BugDTO bug) {
        return this.bugControl.updateBug(bug);

    }

}
