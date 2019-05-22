package msg.role.entity.dto;

import java.util.ArrayList;
import java.util.List;

/**
 * Document me.
 *
 * @author msg systems AG; User Name.
 * @since 19.1.2
 */
public class RoleInputDTO {
    private String type;
    private List<String> permissions=new ArrayList<>();

    public RoleInputDTO() {
    }

    public RoleInputDTO(String type, List<String> permissions) {
        this.type = type;
        this.permissions = permissions;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public List<String> getPermissions() {
        return permissions;
    }

    public void setPermissions(List<String> permissions) {
        this.permissions = permissions;
    }
}
