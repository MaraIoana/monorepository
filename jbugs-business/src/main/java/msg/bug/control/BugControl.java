package msg.bug.control;
import msg.bug.entity.Bug;
import msg.bug.entity.BugDAO;
import msg.bug.entity.dto.BugConverter;
import msg.bug.entity.dto.BugDTO;
import msg.notifications.boundary.NotificationFacade;
import msg.notifications.boundary.notificationParams.NotificationParamsBugUpdated;
import msg.notifications.entity.NotificationType;

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

    @EJB
    private NotificationFacade notificationFacade;


    public List<BugDTO> getAll(){
        return bugDao.getAll()
                .stream()
                .map(bugConverter::convertEntityToDTO)
                .collect(Collectors.toList());
    }

    public BugDTO createBug(final BugDTO bugDTO) {
        final Bug newBug = bugConverter.convertDTOtoEntity(bugDTO);
        BugDTO result = bugConverter.convertEntityToDTO(newBug);
        bugDao.createBug(newBug);
        this.notificationFacade.createNotification(
                NotificationType.BUG_UPDATED,
                new NotificationParamsBugUpdated(bugDTO.toString(), "New Bug"));
        return result;
    }

    public BugDTO modifyStatus(final BugDTO bugDTO) {
        Bug bug = bugConverter.convertDTOtoEntity(bugDTO);
        BugDTO result = bugConverter.convertEntityToDTO(bugDao.modifyStatus(bug));
        return result;
    }


    public BugDTO getBug(Long ID) {
        Bug bug = bugDao.getBug(ID);
        return bugConverter.convertEntityToDTO(bug);
    }


    public BugDTO updateBug(BugDTO bugDTO) {
        Bug updateBug = bugConverter.convertDTOtoEntity(bugDTO);
        BugDTO result = bugConverter.convertEntityToDTO(bugDao.UpdateBug(updateBug));

        return result;
    }
}
