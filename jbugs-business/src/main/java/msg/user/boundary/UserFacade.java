// =================================================================================================
// Copyright (c) 2017-2020 BMW Group. All rights reserved.
// =================================================================================================
package msg.user.boundary;

import msg.exeptions.BusinessException;
import msg.permission.entity.Permission;
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
    public Object createUser(UserInputDTO user){
        try{
            return this.userControl.createUser(user);
        }
        catch (BusinessException e){
         return e.getExceptionMessage();
        }
    }

    @PermitAll
    @RolesAllowed(Permission.USER_MANAGEMENT)
    public Object updateUser(UserDTO user) {
        return this.userControl.updateUser(user);
    }

    public List<UserInputDTO> getAll(){
        return userControl.getAll();
    }

    public UserInputDTO getUser(String username) {
        return userControl.getUser(username);
    }


    public Object authenticateUser(UserInputDTO userInputDTO) {
       return userControl.authenticateUser(userInputDTO);
    }
}
