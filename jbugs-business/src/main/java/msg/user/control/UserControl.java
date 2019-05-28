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
import msg.role.entity.RoleEntity;
import msg.user.MessageCatalog;
import msg.user.entity.UserDao;
import msg.user.entity.UserEntity;
import msg.user.entity.dto.UserConverter;
import msg.user.entity.dto.UserDTO;
import msg.user.entity.dto.UserInputDTO;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import java.util.List;
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
    public String updateUser(final UserDTO userDTO) {
        //userDTO = null;
       /* if (userDao.existsEmail(userDTO.getEmail())){
            throw new BusinessException(MessageCatalog.USER_WITH_SAME_MAIL_EXISTS);
        }*/

        UserEntity updateUserEntity = userConverter.convertDTOToEntity(userDTO);
        userDao.updateUser(updateUserEntity);


        return updateUserEntity.getUsername();
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

    public String authenticateUser(UserInputDTO userInputDTO) {
        UserEntity byEmail = userDao.findByEmail(userInputDTO.getEmail());
        if (byEmail != null) {
            Algorithm algorithm = Algorithm.HMAC256("abcd");
            return JWT.create().withIssuer("auth0")
                    .withClaim("username",byEmail.getUsername())
                    .withArrayClaim("roles",byEmail.getRoles()
                            .stream()
                            .map(RoleEntity::getType).toArray(String[]::new)) .sign(algorithm);
        } else {
            throw new BusinessException(MessageCatalog.INVALID_CREDENTIALS);
        }
    }
}
