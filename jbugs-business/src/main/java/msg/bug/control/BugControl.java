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

    public BugDTO getBug(Long ID) {
        Bug bug = bugDao.getBug(ID);
        return bugConverter.convertEntitytoDTO(bug);

    }


//    public BugDTO updateBug(BugDTO bugDTO){
//        Bug updateBug = bugConverter
//        bugDTO result = bugConverter.convertEntityDTO(bugDao.updateBug(updateBug));
//
//
//        return result;
//
//    }
}
