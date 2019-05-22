package msg.permission.entity;

import edu.msg.ro.persistence.entity.BaseEntity;

import java.util.Objects;
import javax.persistence.*;

/**
 * The permission entity.
 *
 * @author msg systems AG;
 * @since 19.1.2
 */
@Entity
@Table(name="permission")
@NamedQueries({
        @NamedQuery(name= PermissionEntity.QUERY_GET_PERMISSIONS_BY_TYPE_LIST,
                query= "select r from PermissionEntity r "
                        + "where r.type in :" + PermissionEntity.INPUT_TYPE_LIST )})
public class PermissionEntity extends BaseEntity<Long> {

    public static final String QUERY_GET_PERMISSIONS_BY_TYPE_LIST = "getPermissionsByTypeList";
    public static final String INPUT_TYPE_LIST = "type";

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
