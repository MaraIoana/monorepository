package msg.permission.control;

import msg.exeptions.BusinessException;
import msg.permission.MessageCatalog;
import msg.permission.entity.PermissionDao;
import msg.permission.entity.PermissionEntity;
import msg.permission.entity.dto.PermissionConverter;
import msg.permission.entity.dto.PermissionDTO;
import msg.permission.entity.dto.UserPermissionsDTO;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

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

    @EJB
    private PermissionConverter permissionConverter;

    public List<PermissionDTO> getPermissionsByRoles(List<String> roles){
        return permissionDao.getPermissionsByRoles(roles)
                .stream()
                .map(permissionConverter::entityToDto)
                .collect(Collectors.toList());
    }

    public PermissionDTO getPermissionByType(String type){
        return permissionConverter.entityToDto(permissionDao.getPermissionByType(type));
    }

    public List<PermissionDTO> getAll(){
        return permissionDao.getAll().stream().map(permissionConverter::entityToDto).collect(Collectors.toList());
    }

    public UserPermissionsDTO getPermissionsForUser(String username){

        if (!permissionDao.existsUser(username)){
            throw new BusinessException(MessageCatalog.USER_DOES_NOT_EXIST);
        }
        UserPermissionsDTO permissions = new UserPermissionsDTO();
        permissions.setUsername(username);
        permissions.setPermissions(permissionDao.getPermissionsForUser(username)
                .stream()
                .map(PermissionEntity::getType)
                .collect(Collectors.toList())
        );
        return permissions;
    }
}
