package msg.role.boundary;

import msg.role.control.RoleControl;
import msg.role.entity.dto.RoleInputDTO;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

/**
 * Document me.
 *
 * @author msg systems AG; User Name.
 * @since 19.1.2
 */

@Stateless
public class RoleFacade {

    @EJB
    private RoleControl roleControl;

    public List<RoleInputDTO> getAll(){
        return this.roleControl.getAll();
    }

    public List<String> getRoleTypes(){
        return this.roleControl.getRoleTypes();
    }

    public RoleInputDTO getRole(String type){
        return roleControl.getRolesByTypeList(Collections.singletonList(type)).get(0);
    }

    public RoleInputDTO save(RoleInputDTO roleInputDTO){
        return roleControl.save(roleInputDTO);
    }
}
