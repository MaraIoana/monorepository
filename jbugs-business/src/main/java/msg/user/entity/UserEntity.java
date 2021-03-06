package msg.user.entity;

import edu.msg.ro.persistence.entity.BaseEntity;
import msg.role.entity.RoleEntity;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/**
 * The User entity.
 *
 * @author msg systems AG; UserEntity Name.
 * @since 19.1.2
 */
@Entity
@Table(name="users")
@NamedQueries({
        @NamedQuery(name= UserEntity.USER_COUNT_BY_EMAIL,query= "SELECT count(u) from UserEntity u where u.email = :" + UserEntity.EMAIL),
        @NamedQuery(name= UserEntity.USER_FIND_BY_EMAIL,query= "SELECT u from UserEntity u where u.email = :" + UserEntity.EMAIL),
        @NamedQuery(name = UserEntity.USER_FIND_BY_USERNAME, query = "SELECT u from UserEntity u where u.username = :" + UserEntity.USERNAME),
        @NamedQuery(name = UserEntity.USER_FIND_ALL,
                    query =  "select u from UserEntity u"),
        @NamedQuery(name= UserEntity.USER_COUNT_BY_USERNAME,query= "SELECT count(u) from UserEntity u where u.username = :" + UserEntity.USERNAME),
        @NamedQuery(name= UserEntity.GET_TASKS,query = "SELECT b.title from Bug b JOIN UserEntity u ON b.assignedTo = u.id " +
                " where u.username = :username"),
        @NamedQuery(name = UserEntity.IS_ACTIVE,query = "SELECT u.counter from UserEntity u where u.username= :username"),
        @NamedQuery(name = UserEntity.GET_USER_WITH_ID,query = "select u from UserEntity u where u.id= :id")
})
public class UserEntity extends BaseEntity<Long> {
    public static final String USER_FIND_ALL = "UserEntity.findAll";
    public static final String USER_COUNT_BY_EMAIL = "UserEntity.countByEmail";
    public static final String EMAIL = "email";
    public static final String USERNAME = "username";
    public static final String USER_FIND_BY_EMAIL = "UserEntity.findByEmail";
    public static final String USER_FIND_BY_USERNAME = "UserEntity.findByUsername";
    public static final String USER_COUNT_BY_USERNAME = "UserEntity.countByUsername";
    public static final String GET_TASKS = "getTasks";
    public static final String IS_ACTIVE = "isActive";
    public static final String GET_USER_WITH_ID = "getUserWithId";

    @Column(name="first_name",nullable = false)
    private String firstName;
    @Column(name="last_name",nullable = false)
    private String lastName;
    @Column(name="email",nullable = false)//todo: @Pattern
    private String email;
    @Column(name="mobile_number",nullable = false)
    private String mobileNumber;
    @Column(name="username",nullable = false)
    private String username;
    @Column(name="password",nullable = false)
    private String password;
    @Column(name="counter")
    private int counter;
    @ManyToMany(cascade= CascadeType.PERSIST)
    @JoinTable(name="users_roles",
            joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "role_id", referencedColumnName = "id")
    )
    private List<RoleEntity> roles=new ArrayList<>();

    public UserEntity() { }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getCounter() {
        return counter;
    }

    public void setCounter(int counter) {
        this.counter = counter;
    }

    public List<RoleEntity> getRoles() {
        return roles;
    }

    public void setRoles(List<RoleEntity> roles) {
        this.roles = roles;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserEntity userEntity = (UserEntity) o;
        return counter == userEntity.counter &&
                Objects.equals(firstName, userEntity.firstName) &&
                Objects.equals(lastName, userEntity.lastName) &&
                Objects.equals(email, userEntity.email) &&
                Objects.equals(mobileNumber, userEntity.mobileNumber) &&
                Objects.equals(username, userEntity.username) &&
                Objects.equals(password, userEntity.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(firstName, lastName, email, mobileNumber, username, password, counter);
    }
}
