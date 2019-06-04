package msg.bug.control;

import msg.bug.entity.Bug;
import msg.bug.entity.BugDAO;
import msg.bug.entity.dto.BugConverter;
import msg.bug.entity.dto.BugDTO;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Document me.
 *
 * @author msg systems AG; User Name.
 * @since 19.1.2
 */

@Stateless
public class BugControl {

    @EJB
    private BugDAO bugDao;

    @EJB
    private BugConverter bugConverter;

    public List<BugDTO> getAll(){
        return bugDao.getAll()
                .stream()
                .map(bugConverter::convertEntitytoDTO)
                .collect(Collectors.toList());
    }

    public BugDTO modifyStatus(final BugDTO bugDTO) {
        Bug bug = bugConverter.convertDTOtoEntity(bugDTO);
        BugDTO result = bugConverter.convertEntitytoDTO(bugDao.modifyStatus(bug));
        return result;
    }

}
