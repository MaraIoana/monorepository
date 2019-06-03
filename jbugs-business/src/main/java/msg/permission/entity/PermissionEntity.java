package msg.permission.entity;

import edu.msg.ro.persistence.entity.BaseEntity;

import javax.persistence.*;
import java.util.Objects;

/**
 * The permission entity.
 *
 * @author msg systems AG;
 * @since 19.1.2
 */
@Entity
@Table(name="permission")
@NamedQueries({
        @NamedQuery(name = PermissionEntity.QUERY_GET_PERMISSIONS_BY_ROLES,
                query = "select r.permissions from RoleEntity r "
                        + "where r.type in :" + PermissionEntity.INPUT_ROLES),
        @NamedQuery(name = PermissionEntity.GET_PERMISSION_BY_TYPE,
                query = "select p from PermissionEntity p " +
                        "where p.type = :type"),
        @NamedQuery(name = PermissionEntity.FIND_ALL,
                query = "select p from PermissionEntity p"),
        @NamedQuery(name= PermissionEntity.GET_PERMISSION_ENTITIES,
                query = "select p from PermissionEntity p" +
                        " where p.type in :" + PermissionEntity.TYPES),
        @NamedQuery(name = PermissionEntity.GET_PERMISSIONS_FOR_USER,
                query = "select u.roles from UserEntity u" +
                        " where u.username = :username"),
        @NamedQuery(name = PermissionEntity.USER_COUNT,
                query = "select count(u) from UserEntity u" +
                        " where u.username = :username")
}
)
public class PermissionEntity extends BaseEntity<Long> {

    public static final String QUERY_GET_PERMISSIONS_BY_ROLES = "getPermissionsByRoles";
    public static final String INPUT_ROLES = "roles";
    public static final String GET_PERMISSION_BY_TYPE = "getPermissionByType";
    public static final String FIND_ALL = "findAllPermissions";
    public static final String GET_PERMISSION_ENTITIES = "getPermissionEntities";
    public static final String TYPES = "types";
    public static final String GET_PERMISSIONS_FOR_USER = "getPermissionsForUser";
    public static final String USER_COUNT = "userCount";


    @Column(name="type", nullable = false)
    private String type;
    @Column(name="description",nullable = false)
    private String description;


    public PermissionEntity() {
    }

    public PermissionEntity(String type, String description) {
        this.type = type;
        this.description = description;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PermissionEntity that = (PermissionEntity) o;
        return Objects.equals(type, that.type) &&
                Objects.equals(description, that.description);
    }

    @Override
    public int hashCode() {
        return Objects.hash(type, description);
    }
}
