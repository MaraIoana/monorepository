package msg.user.entity.dto;

import java.util.List;

/**
 * Document me.
 *
 * @author msg systems AG; User Name.
 * @since 19.1.2
 */
public class UserOutputDto {
    private String username;
    private List<String> permissions;
    private String token;

    public UserOutputDto() {
    }

    public UserOutputDto(String username, List<String> permissions, String token) {
        this.username = username;
        this.permissions = permissions;
        this.token = token;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public List<String> getPermissions() {
        return permissions;
    }

    public void setPermissions(List<String> permissions) {
        this.permissions = permissions;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
