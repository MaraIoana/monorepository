package msg.role.entity;

import edu.msg.ro.persistence.entity.BaseEntity;
import msg.permission.entity.PermissionEntity;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/**
 * The Roles Entity.
 *
 * @author msg systems AG;
 * @since 19.1.2
 */
@Entity
@Table(name="roles")
@NamedQueries({
        @NamedQuery(name= RoleEntity.GET_PERMISSIONS,
            query="select r.permissions from RoleEntity r where r.type=:type "),
        @NamedQuery(name= RoleEntity.QUERY_GET_ROLES_BY_TYPE_LIST,
            query= "select r from RoleEntity r where r.type in :" + RoleEntity.INPUT_TYPE_LIST ),
        @NamedQuery(name = RoleEntity.FIND_ALL,
                query =  "select u from RoleEntity u")
})
public class RoleEntity extends BaseEntity<Long> {

    public static final String QUERY_GET_ROLES_BY_TYPE_LIST = "getRolesDTOByTypeList";
    public static final String INPUT_TYPE_LIST = "type";
    public static final String FIND_ALL = "findAllRoles";
    public static final String GET_PERMISSIONS = "getPermissions";
    @Column(name="type",nullable = false)
    private String type;

    @ManyToMany(cascade= CascadeType.PERSIST)
    @JoinTable(name="permissions_roles",
            joinColumns = @JoinColumn(name="role_id", referencedColumnName = "id",nullable = false),
            inverseJoinColumns = @JoinColumn(name="permission_id",referencedColumnName = "id",nullable = false)
    )
    private List<PermissionEntity> permissions=new ArrayList<>();


    public RoleEntity() {
    }

    public RoleEntity(String type, List<PermissionEntity> permissions) {
        this.type = type;
        this.permissions = permissions;
    }

    public List<PermissionEntity> getPermissions() {
        return permissions;
    }

    public void setPermissions(List<PermissionEntity> permissions) {
        this.permissions = permissions;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RoleEntity role = (RoleEntity) o;
        return Objects.equals(type, role.type);
    }

    @Override
    public int hashCode() {
        return Objects.hash(type);
    }


}
