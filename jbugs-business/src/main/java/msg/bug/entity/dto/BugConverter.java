package msg.bug.entity.dto;

import msg.bug.entity.Bug;
import msg.bug.entity.Severity;

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
     * Converts a {@link Bug} to {@link BugDTO}.
     *
     * @param bug the input entity.
     * @return the output un-managed dto.
     */
    public BugDTO convertEntityToDTO(Bug bug){
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
        //b.setId(bug.getId());

        return b;
    }

    public Bug convertDTOtoEntity(BugDTO bug) {
        Bug b = new Bug();

        b.setTitle(bug.getTitle());
        b.setDescription(bug.getDescription());
        b.setVersion(bug.getVersion());
        b.setDate(bug.getDate());
        b.setFixedVersion(bug.getFixedVersion());
        b.setCreatedBy(bug.getCreatedBy());
        b.setAssignedTo(bug.getAssignedTo());
        //b.setId(bug.getId());
        Severity severity = Severity.valueOf(bug.getSeverity());
        b.setSeverity(severity);

        return b;
    }
}
