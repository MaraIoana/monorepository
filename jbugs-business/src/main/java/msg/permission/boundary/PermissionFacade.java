package msg.permission.boundary;

import msg.exeptions.BusinessException;
import msg.permission.control.PermissionControl;
import msg.permission.entity.dto.PermissionDTO;
import msg.permission.entity.dto.UserPermissionsDTO;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.ext.ExceptionMapper;
import java.util.List;

/**
 * Document me.
 *
 * @author msg systems AG; User Name.
 * @since 19.1.2
 */

@Stateless
public class PermissionFacade {

    @EJB
    private PermissionControl permissionControl;

    public List<PermissionDTO> getPermissionForRoles(List<String> roleTypes){
        return permissionControl.getPermissionsByRoles(roleTypes);
    }

    public PermissionDTO getPermissionByType(String type){
        return permissionControl.getPermissionByType(type);
    }

    public List<PermissionDTO> getAll(){
        return permissionControl.getAll();
    }

    public Object getPermissionsForUser(String username){
        try {
            return permissionControl.getPermissionsForUser(username);
        }
        catch (BusinessException e){
            return e.getExceptionMessage();
        }
    }

    public List<PermissionDTO> getRolePermissions(String type){
        return permissionControl.getRolePermissions(type);
    }
}
