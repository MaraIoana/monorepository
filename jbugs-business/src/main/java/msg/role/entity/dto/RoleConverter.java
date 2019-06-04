package msg.role.entity.dto;

import msg.permission.control.PermissionControl;
import msg.permission.entity.dto.PermissionConverter;
import msg.permission.entity.dto.PermissionDTO;
import msg.role.entity.RoleEntity;

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
public class RoleConverter {

    @EJB
    private PermissionControl permissionControl;

    @EJB
    private PermissionConverter permissionConverter;

    public RoleEntity dtoToEntity(RoleInputDTO dto){
        RoleEntity roleEntity = new RoleEntity();

        roleEntity.setType(dto.getType());
        if (dto.getPermissions() != null && !dto.getPermissions().isEmpty()){
            List<PermissionDTO> permissionDTOList = permissionControl.getPermissionsByRoles(dto.getPermissions());


            roleEntity.getPermissions().addAll(
                    permissionDTOList.stream().map(permissionConverter::dtoToEntity).collect(Collectors.toList()));
        }

        return roleEntity;
    }

    public RoleInputDTO entityToDto(RoleEntity roleEntity){
        RoleInputDTO dto = new RoleInputDTO();

        dto.setType(roleEntity.getType());
        if (roleEntity.getPermissions() != null && !roleEntity.getPermissions().isEmpty()) {
            dto.setPermissions(
                    roleEntity
                            .getPermissions()
                            .stream()
                            .map(x -> x.getType())
                            .collect(Collectors.toList()));
        }

        return dto;
    }

    public List<String> RoleToStringList(List<RoleEntity> roleEntities) {
        List<String> roles = new ArrayList<>();
        roleEntities.forEach((role) -> roles.add(role.getType()));
        return roles;

    }
}
