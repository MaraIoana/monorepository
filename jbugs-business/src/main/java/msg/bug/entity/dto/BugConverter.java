package msg.bug.entity.dto;

import msg.bug.entity.Bug;
import msg.role.control.RoleControl;

import javax.ejb.EJB;
import javax.ejb.Stateless;
/**
 * Document me.
 *
 * @author msg systems AG; User Name.
 * @since 19.1.2
 */
@Stateless
public class BugConverter {

    /**
     * Converts a {@link BugDTO} to {@link Bug}.
     *
     * @param bugDTO the dto.
     * @return the output un-managed Entity.
     */
//    public Bug convertDTOtoEntity(BugDTO bugDTO){
//        final Bug b = new Bug();
//
//        b.setTitle(bugDTO.getTitle());
//        b.setDescription(bugDTO.getDescription());
//        b.setVersion(bugDTO.getVersion());
//        b.setDate(bugDTO.getDate());
//        String status=bugDTO.getStatus().toString();
//        b.setStatus(status);
//        b.setFixedVersion(bugDTO.getFixedVersion());
//        b.setSeverity(bugDTO.getSeverity());
//        b.setCreatedBy(bugDTO.getCreatedBy());
//        b.setAssignedTo(bugDTO.getAssignedTo());
//
//        return b;
//    }


    /**
     * Converts a {@link Bug} to {@link BugDTO}.
     *
     * @param bug the input entity.
     * @return the output un-managed dto.
     */
    public BugDTO convertEntitytoDTO(Bug bug){
        final BugDTO b = new BugDTO();

        b.setTitle(bug.getTitle());
        b.setDescription(bug.getDescription());
        b.setVersion(bug.getVersion());
        b.setDate(bug.getDate());

        String status=bug.getStatus().toString();
        b.setStatus(status);
        b.setFixedVersion(bug.getFixedVersion());

        String severity=bug.getSeverity().toString();
        b.setSeverity(severity);
        b.setCreatedBy(bug.getCreatedBy());
        b.setAssignedTo(bug.getAssignedTo());

        return b;
    }
}
