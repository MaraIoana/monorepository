// =================================================================================================
// Copyright (c) 2017-2020 BMW Group. All rights reserved.
// =================================================================================================
package msg.user.control;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import msg.exeptions.BusinessException;
import msg.notifications.boundary.NotificationFacade;
import msg.notifications.boundary.notificationParams.NotificationParamsWelcomeUser;
import msg.notifications.entity.NotificationType;
import msg.permission.entity.Permission;
import msg.permission.entity.PermissionEntity;
import msg.role.entity.RoleEntity;
import msg.user.MessageCatalog;
import msg.user.entity.UserDao;
import msg.user.entity.UserEntity;
import msg.user.entity.dto.*;
import msg.user.entity.dto.UserRolesDTO;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.management.relation.Role;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * Control operations for all the User related operations.
 *
 * @author msg-system ag;  Daniel Donea
 * @since 1.0
 */
@Stateless
public class UserControl {

    @EJB
    private UserDao userDao;

    @EJB
    private UserConverter userConverter;

    @EJB
    private NotificationFacade notificationFacade;


    /**
     * Creates a userDTO based on the {@link UserInputDTO}.
     *
     * @param userDTO the input User DTO. mandatory
     * @return the username of the newly created user.
     */
    public UserInputDTO createUser(final UserInputDTO userDTO){
        if (userDao.existsEmail(userDTO.getEmail())){
            throw new BusinessException(MessageCatalog.USER_WITH_SAME_MAIL_EXISTS);
        }

        final UserEntity newUserEntity = userConverter.convertInputDTOtoEntity(userDTO);
        int count=1;
        newUserEntity.setUsername(this.createUserName(userDTO.getFirstName(), userDTO.getLastName(),count));
        while(userDao.existUsername(newUserEntity.getUsername())){
            count++;
            newUserEntity.setUsername(this.createUserName(userDTO.getFirstName(), userDTO.getLastName(),count));
        }
        newUserEntity.setPassword("DEFAULT_PASSWORD");
        userDao.createUser(newUserEntity);

        final String userFullName = newUserEntity.getFirstName() + " " + newUserEntity.getLastName();
        this.notificationFacade.createNotification(
                NotificationType.WELCOME_NEW_USER,
                new NotificationParamsWelcomeUser(userFullName, newUserEntity.getUsername()));
        UserInputDTO responseUser = new UserInputDTO();
        responseUser.setFirstName(newUserEntity.getUsername());
        return responseUser;
    }

    /**
     * Update a userDTO based on the {@link UserInputDTO}.
     *
     * @param userDTO the input User DTO. mandatory
     * @return the username of the updated  user.
     * todo Message for updating the user (showing them on the UI is belongs to anther User Stroy)
     * todo Exception handling if username does not exist
     */
    public UserDTO updateUser(final UserDTO userDTO) {
        //userDTO = null;
       /* if (userDao.existsEmail(userDTO.getEmail())){
            throw new BusinessException(MessageCatalog.USER_WITH_SAME_MAIL_EXISTS);
        }*/

        UserEntity updateUserEntity = userConverter.convertDTOToEntity(userDTO);
        UserDTO result = userConverter.convertEntityDTO(userDao.updateUser(updateUserEntity));


        return result;
    }

    /**
     * Creates a unique user name based on the inputs.
     *
     * @param firstName the first name of the user. mandatory
     * @param lastName the last name of the user. mandatory
     * @return a unique identifier for the input user.
     */
    private String createUserName(final String firstName, final String lastName, int count){
        if(count <=5){
            return firstName.substring(0, 5-count).toUpperCase() + lastName.substring(lastName.length() - count ,lastName.length()).toUpperCase();
        }
        else {
            String ALPHA_NUMERIC_STRING = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            int counter = 8;
            StringBuilder builder = new StringBuilder();
            while (counter-- != 0) {
                int character = (int)(Math.random()*ALPHA_NUMERIC_STRING.length());
                builder.append(ALPHA_NUMERIC_STRING.charAt(character));
            }
            return builder.toString();
        }
    }

    public List<UserInputDTO> getAll(){
        return userDao.getAll()
                .stream()
                .map(userConverter::convertEntityDTOO)
                .collect(Collectors.toList());

    }

    public UserDTO getUser(String username){
        UserEntity user = userDao.getUser(username);
         return userConverter.convertEntityDTO(user);
    }

    public UserRolesDTO getUserRoles(String username){
        return userConverter.entityToUserRolesDto(userDao.getUser(username));
    }


    public UserOutputDto authenticateUser(UserLoginDTO userLoginDTO) {
        UserEntity user = userDao.findUserByUsername(userLoginDTO.getUsername());
        if(user != null && user.getPassword().equals(userLoginDTO.getPassword())){
            Set<PermissionEntity> permissions = new HashSet<>();
            List<String> permissionsList = new ArrayList<>();
            for(RoleEntity r : user.getRoles()){
                permissions.addAll(r.getPermissions());
            }
            Algorithm algorithm = Algorithm.HMAC256("jbugs");
            String token = JWT.create()
                    .withIssuer("auth0")
                    .withClaim("username", user.getUsername())
                    .withArrayClaim("permissions", permissions
                            .stream()
                            .map(PermissionEntity::getType).toArray(String[]::new))
                    .sign(algorithm);
            for(PermissionEntity p : permissions){
                permissionsList.add(p.getType());
            }
            return new UserOutputDto(user.getUsername(), permissionsList, token);

        } else {
            throw new BusinessException(MessageCatalog.INVALID_CREDENTIALS);
        }
    }
}
