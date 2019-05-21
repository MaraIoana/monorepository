// =================================================================================================
// Copyright (c) 2017-2020 BMW Group. All rights reserved.
// =================================================================================================
package msg.user.boundary;

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
    public void createUser(UserInputDTO user){
         this.userControl.createUser(user);
    }

    @RolesAllowed(Permission.USER_MANAGEMENT)
    public void updateUser(UserInputDTO user) {
    }

    ;

    public List<UserDTO> getAll(){
        return userControl.getAll();
    }


    public Object authenticateUser(UserInputDTO userInputDTO) {
       return userControl.authenticateUser(userInputDTO);
    }
}
