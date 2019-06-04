package msg.role.control;

import msg.role.entity.RoleDao;
import msg.role.entity.dto.RoleConverter;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Document me.
 *
 * @author msg systems AG; User Name.
 * @since 19.1.2
 */
@RunWith(MockitoJUnitRunner.Silent.class)
public class RoleControlTest {

    @InjectMocks
    RoleControl roleControl;

    @Mock
    RoleDao roleDao;

    @Mock
    RoleConverter roleConverter;

    @Test
    public void getRolesDTOByTypeList() {
        List<String> roles = createRoleList();

        Mockito.when(roleConverter.dtoToEntity(Mockito.any())).thenCallRealMethod();

        roleControl.getRolesDTOByTypeList(roles);
    }

    @Test
    public void getRolesByTypeList() {
        List<String> roles = createRoleList();

        Mockito.when(roleConverter.dtoToEntity(Mockito.any())).thenCallRealMethod();

        roleControl.getRolesByTypeList(roles);
    }

    @Test
    public void getAll() {
        Mockito.when(roleConverter.dtoToEntity(Mockito.any())).thenCallRealMethod();

        roleControl.getAll();
    }

    @Test
    public void getRoleTypes() {
        List<String> roleTypes;
        Mockito.when(roleConverter.dtoToEntity(Mockito.any())).thenCallRealMethod();
        Mockito.when(roleControl.getRoleTypes()).thenReturn(roleTypes = createRoleTypes());

        Assert.assertEquals(5,roleTypes.size());
    }

    @Test
    public void save() {
    }

    List<String> createRoleList(){
        List<String> roles = new ArrayList<>();
        roles.add("ADMINISTRATOR");
        return roles;
    }

    List<String> createRoleTypes(){
        List<String> roles = new ArrayList<>();
        roles.add("ADMINISTRATOR");
        roles.add("PROJECT MANAGER");
        roles.add("TEST MANAGER");
        roles.add("DEVELOPER");
        roles.add("TESTER");

        return roles;
    }
}
