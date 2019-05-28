package msg.permission.entity.dto;

import msg.permission.entity.PermissionEntity;

import javax.ejb.Stateless;

/**
 * Document me.
 *
 * @author msg systems AG; User Name.
 * @since 19.1.2
 */

@Stateless
public class PermissionConverter {

    public PermissionEntity dtoToEntity(PermissionDTO permissionDTO){
        PermissionEntity permissionEntity = new PermissionEntity();

        permissionEntity.setType(permissionDTO.getType());
        permissionEntity.setDescription(permissionDTO.getDescription());

        return permissionEntity;
    }

    public PermissionDTO entityToDto(PermissionEntity permissionEntity){
        PermissionDTO permissionDTO = new PermissionDTO();

        permissionDTO.setType(permissionEntity.getType());
        permissionDTO.setDescription(permissionEntity.getDescription());

        return permissionDTO;
    }
}
