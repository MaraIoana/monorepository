// =================================================================================================
// Copyright (c) 2017-2020 BMW Group. All rights reserved.
// =================================================================================================
package msg.user.entity.dto;

import msg.role.control.RoleControl;
import msg.role.entity.RoleEntity;
import msg.role.entity.dto.RoleConverter;
import msg.user.entity.UserEntity;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Converts different DOs to UserEntity and vice-versa.
 *
 * @author msg-system ag;  Daniel Donea
 * @since 1.0
 */
@Stateless
public class UserConverter {

    @EJB
    private RoleControl roleControl;

    @EJB
    private RoleConverter roleConverter;

    /**
     * Converts a {@link UserInputDTO} to {@link UserEntity}.
     *
     * @param userInputDTO the input dto.
     * @return the output un-managed Entity.
     */
    public UserEntity convertInputDTOtoEntity(UserInputDTO userInputDTO){
        final UserEntity u = new UserEntity();
        u.setFirstName(userInputDTO.getFirstName());
        u.setLastName(userInputDTO.getLastName());
        u.setEmail(userInputDTO.getEmail());
        u.setMobileNumber(userInputDTO.getMobileNumber());
        u.setUsername(userInputDTO.getUsername());
        u.setRoles(new ArrayList<>());

        if (userInputDTO.getRoles() != null && !userInputDTO.getRoles().isEmpty()){
            List<RoleEntity> roleEntities = roleControl.getRolesByTypeList(userInputDTO.getRoles());
            u.setRoles(roleEntities);
        }
        return u;
    }

    public UserDTO convertEntityDTO(UserEntity userEntity){
        final UserDTO u = new UserDTO();
        u.setFirstName(userEntity.getFirstName());
        u.setLastName(userEntity.getLastName());
        u.setEmail(userEntity.getEmail());
        u.setMobileNumber(userEntity.getMobileNumber());
        u.setUsername(userEntity.getUsername());
        u.setRoles(roleConverter.RoleToStringList(userEntity.getRoles()));
        System.out.println(u.getRoles());
        return u;
    }

    public UserEntity convertDTOToEntity(UserDTO userDTO) {
        final UserEntity u = new UserEntity();
        u.setUsername(userDTO.getUsername());
        u.setFirstName(userDTO.getFirstName());
        u.setLastName(userDTO.getLastName());
        u.setEmail(userDTO.getEmail());
        u.setMobileNumber(userDTO.getMobileNumber());

        return u;
    }

    public UserInputDTO convertEntityDTOO(UserEntity userEntity){
        final UserInputDTO u = new UserInputDTO();
        u.setFirstName(userEntity.getFirstName());
        u.setLastName(userEntity.getLastName());
        u.setEmail(userEntity.getEmail());
        u.setMobileNumber(userEntity.getMobileNumber());
        u.setUsername(userEntity.getUsername());
        List<String> roles = new ArrayList<>();
        for(RoleEntity el: userEntity.getRoles())
        {
            roles.add(el.getType());
        }
        u.setRoles(roles);
        return u;
    }

    public UserRolesDTO entityToUserRolesDto(UserEntity userEntity){
        UserRolesDTO userRolesDTO  = new UserRolesDTO();
        List<String> roles = new ArrayList<>();

        userRolesDTO.setUsername(userEntity.getUsername());
        for(RoleEntity el: userEntity.getRoles())
        {
            roles.add(el.getType());
        }
        userRolesDTO.setRoles(roles);

        return userRolesDTO;
    }

    public UserEntity userRoleDtoToEntity(UserRolesDTO userRolesDTO){
        UserEntity userEntity = new UserEntity();

        userEntity.setUsername(userRolesDTO.getUsername());

        if (userRolesDTO.getRoles() != null && !userRolesDTO.getRoles().isEmpty()){
            roleControl.getRolesDTOByTypeList(userRolesDTO.getRoles())
                    .stream()
                    .map(roleConverter::dtoToEntity)
                    .collect(Collectors.toList())
                    .addAll(userEntity.getRoles());
        }

        return userEntity;
    }


}
