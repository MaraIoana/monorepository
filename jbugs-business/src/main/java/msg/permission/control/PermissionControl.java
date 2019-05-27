package msg.permission.control;

import msg.permission.entity.PermissionDao;
import msg.permission.entity.PermissionEntity;
import msg.permission.entity.dto.PermissionConverter;
import msg.permission.entity.dto.PermissionDTO;

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
}
