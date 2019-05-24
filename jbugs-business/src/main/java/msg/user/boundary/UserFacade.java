// =================================================================================================
// Copyright (c) 2017-2020 BMW Group. All rights reserved.
// =================================================================================================
package msg.user.boundary;

import com.sun.org.apache.xpath.internal.operations.String;
import msg.exeptions.BusinessException;
import msg.right.Permission;
import msg.user.control.UserControl;
import msg.user.entity.dto.UserDTO;
import msg.user.entity.dto.UserInputDTO;

import javax.annotation.security.PermitAll;
import javax.annotation.security.RolesAllowed;
import javax.ejb.EJB;
import javax.ejb.Stateless;
import java.util.List;

/**
 * Facade for all operations on Users.
 *
 * @author msg-system ag;  Daniel Donea
 * @since 1.0
 */
@Stateless
public class UserFacade {

    @EJB
    private UserControl userControl;

    /**
     * Creates a user based on the {@link UserInputDTO}.
     *
     * @param user the input User DTO. mandatory
     */
    @PermitAll
    @RolesAllowed(Permission.USER_MANAGEMENT)
<<<<<<< HEAD
    public String createUser(UserInputDTO user) {
        return this.userControl.createUser(user);
=======
    public Object createUser(UserInputDTO user){
        try{
            return this.userControl.createUser(user);
        }
        catch (BusinessException e){
         return e.getExceptionMessage();
        }
>>>>>>> 5d06dff5b821bbe3933dc655b0cd14a91e8e8ba9
    }

    @PermitAll
    @RolesAllowed(Permission.USER_MANAGEMENT)
    public String updateUser(UserDTO user) {
        return this.userControl.updateUser(user);
    }

    ;

    public List<UserDTO> getAll(){
        return userControl.getAll();
    }


    public Object authenticateUser(UserInputDTO userInputDTO) {
       return userControl.authenticateUser(userInputDTO);
    }
}
