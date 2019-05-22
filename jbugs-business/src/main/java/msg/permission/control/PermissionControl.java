package msg.permission.control;

import msg.permission.entity.PermissionDao;
import msg.permission.entity.PermissionEntity;

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
public class PermissionControl {

    @EJB
    private PermissionDao permissionDao;

    public List<PermissionEntity> getPermissionsByTypeList(List<String> typeList){
        return permissionDao.getPermissionsByTypeList(typeList);
    }
}
