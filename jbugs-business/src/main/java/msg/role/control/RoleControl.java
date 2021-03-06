// =================================================================================================
// Copyright (c) 2017-2020 BMW Group. All rights reserved.
// =================================================================================================
package msg.role.control;

import msg.role.entity.RoleDao;
import msg.role.entity.RoleEntity;
import msg.role.entity.dto.RoleConverter;
import msg.role.entity.dto.RoleInputDTO;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Control operations for all the RoleEntity related operations.
 *
 * @author msg-system ag;
 * @since 1.0
 */
@Stateless
public class RoleControl {

    @EJB
    private RoleDao roleDao;
    @EJB
    private RoleConverter roleConverter;

    /**
     * Given a input list of {@link RoleEntity#getType()}s, returns the corresponding list of RoleEntity Entities.
     *
     * @param typeList a list of role types.
     * @return a list of role entities.
     */
    public List<RoleInputDTO> getRolesDTOByTypeList(List<String> typeList) {
        return this.getRolesByTypeList(typeList)
                .stream()
                .map(roleConverter::entityToDto)
                .collect(Collectors.toList());
    }

    public List<RoleEntity> getRolesByTypeList(List<String> typeList) {
        return roleDao.getRolesByTypeList(typeList);
    }

    public List<RoleInputDTO> getAll(){
        return roleDao.getAll()
                .stream()
                .map(roleConverter::entityToDto)
                .collect(Collectors.toList());

    }

    public List<String> getRoleTypes(){
        return roleDao.getAll()
                .stream()
                .map(RoleEntity::getType)
                .collect(Collectors.toList());
    }

    public RoleInputDTO save(RoleInputDTO roleInputDTO){
        RoleEntity roleEntity = roleDao.save(roleInputDTO);

        return roleConverter.entityToDto(roleEntity);
    }


}
