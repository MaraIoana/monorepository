package msg.bug.entity.dto;

import msg.bug.entity.Bug;
import msg.bug.entity.Severity;
import msg.bug.entity.Status;

import javax.ejb.Stateless;

/**
 * Bug Converter.
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
    public Bug convertDTOtoEntity(BugDTO bugDTO) {
        final Bug b = new Bug();

        b.setId(bugDTO.getId());
        b.setTitle(bugDTO.getTitle());
        b.setDescription(bugDTO.getDescription());
        b.setVersion(bugDTO.getVersion());
        b.setDate(bugDTO.getDate());

        String status = bugDTO.getStatus();
        b.setStatus(Status.valueOf(status));
        b.setFixedVersion(bugDTO.getFixedVersion());


        String severity = bugDTO.getSeverity();
        b.setSeverity(Severity.valueOf(severity));

        b.setCreatedBy(bugDTO.getCreatedBy());
        b.setAssignedTo(bugDTO.getAssignedTo());

        return b;
    }


    /**
     * Converts a {@link Bug} to {@link BugDTO}.
     *
     * @param bug the input entity.
     * @return the output un-managed dto.
     */
    public BugDTO convertEntitytoDTO(Bug bug){
        final BugDTO b = new BugDTO();

        b.setId(bug.getId());
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
