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
import msg.user.entity.dto.*;
import msg.user.entity.dto.UserConverter;
import msg.user.entity.dto.UserInputDTO;
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
        responseUser.setRoles(userDTO.getRoles());
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
    public UserInputDTO updateUser(final UserInputDTO userDTO) {
        //userDTO = null;
       /* if (userDao.existsEmail(userDTO.getEmail())){
            throw new BusinessException(MessageCatalog.USER_WITH_SAME_MAIL_EXISTS);
        }*/

        UserEntity updateUserEntity = userConverter.convertInputDTOtoEntity(userDTO);
        UserInputDTO result = userConverter.convertEntityDTOO(userDao.updateUser(updateUserEntity));


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

    public UserInputDTO getUser(String username) {
        UserEntity user = userDao.getUser(username);
        System.out.println("getUser:");
        System.out.println("getUser:");
        return userConverter.convertEntityDTOO(user);

    }

    public UserRolesDTO getUserRoles(String username) {
        return userConverter.entityToUserRolesDto(userDao.getUser(username));
    }


    public Object authenticateUser(UserLoginDTO userLoginDTO) {
        UserEntity user = userDao.findUserByUsername(userLoginDTO.getUsername());
        if(user != null){
            if(user.getPassword().equals(userLoginDTO.getPassword())) {
                if(user.getCounter() < 5) {
                    userDao.activateOrReset(user.getUsername());
                    Set<PermissionEntity> permissions = new HashSet<>();
                    List<String> permissionsList = new ArrayList<>();
                    for (RoleEntity r : user.getRoles()) {
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
                    for (PermissionEntity p : permissions) {
                        permissionsList.add(p.getType());
                    }
                    return new UserOutputDto(user.getUsername(), permissionsList, token);
                }
                else{
                    throw new BusinessException(MessageCatalog.NOT_ACTIVE_USER);
                }
            }
            else {
                userDao.incrementUser(user.getUsername());
                return MessageCatalog.INVALID_CREDENTIALS;
                //throw new BusinessException(MessageCatalog.INVALID_CREDENTIALS);
            }
        } else {
            throw new BusinessException(MessageCatalog.INVALID_CREDENTIALS);
        }
    }


    public UserDataDTO getUserData(String username){
        UserDataDTO userDataDTO = userConverter.entityToUserDataDto(userDao.getUser(username));
        userDataDTO.setTasks(userDao.getTasks(username));

        return userDataDTO;
    }

    public UserDataDTO activateOrReset(String username){

        return userConverter.entityToUserDataDto(userDao.activateOrReset(username));
    }

    public UserDataDTO deactivate(String username){
        if(!userDao.getTasks(username).isEmpty()){
            throw new BusinessException(MessageCatalog.HAS_TASKS);
        }
        return userConverter.entityToUserDataDto(userDao.deactivate(username));
    }

    public UserDataDTO incrementUser(String username){
        if(!userDao.isActive(username)){
            throw new BusinessException(MessageCatalog.NOT_ACTIVE_USER);
        }

        UserEntity userEntity = userDao.incrementUser(username);

        if(userEntity.getCounter() == 5){
            throw new BusinessException(MessageCatalog.TOO_MANY_ATTEMPTS);
        }

        return userConverter.entityToUserDataDto(userEntity);

    }

    public UserDTO getUserWithId(int id){
        return userConverter.convertEntityDTO(userDao.getUserWithId(id));
    }
}
