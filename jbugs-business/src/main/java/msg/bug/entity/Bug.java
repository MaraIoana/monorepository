package msg.bug.entity;

import edu.msg.ro.persistence.entity.BaseEntity;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;


/**
 * Bug entity.
 *
 * @author msg systems AG; User Name.
 * @since 19.1.2
 */
@Entity
@Table(name = "bugs")
@NamedQueries({
        @NamedQuery(name = Bug.BUG_FIND_ALL, query = "select b from Bug b"),
        @NamedQuery(name = Bug.MODIFY_STATUS, query = "select b from Bug b where b.id=:id"),
        @NamedQuery(name = Bug.BUG_FIND_BY_ID, query = "select b from Bug b where b.id = :id"),
        @NamedQuery(name = Bug.GET_USER_ID,query = "select u.id from UserEntity u where u.username=:username"),
        @NamedQuery(name = Bug.GET_USERNAME,query = "select u.username from UserEntity u where u.id=:id")
}
)
public class Bug extends BaseEntity<Long>{

   public static final String BUG_FIND_ALL = "Bug.findAll";
    public static final String MODIFY_STATUS = "Bug.modifyStatus";
    //public static final String ID="id" ;
//    @Id
//    @GeneratedValue(strategy= GenerationType.IDENTITY)
//    private Long id;
    public static final String BUG_FIND_BY_ID = "Bug.ByID";
    public static final String ID = "id";
    public static final String GET_USER_ID = "getUserId";
    public static final String GET_USERNAME = "getUsername";

    @Column(name = "title",nullable = false)
    private String title;

    @Column(name = "description",nullable = false)
    private String description;

    @Column(name ="version",nullable = false)
    private String version;

    @Column(name ="targetDate")
    @Temporal(TemporalType.DATE)
    private Date date;

    @Column(name = "status",nullable = false)
    @Enumerated(EnumType.STRING)
    private Status status;

    @Column(name = "fixedVersion")
    private String fixedVersion;

    @Column (name ="severity",nullable = false)
    @Enumerated(EnumType.STRING)
    private Severity severity;

    @Column (name="createdByUser")
    private Long createdBy;

    @Column (name="assignedTo")
    private Long  assignedTo;
    /* todo: createByUser assigned to */

    public Bug() { }

    @Override
    public String toString() {
        return "Bug{" +
                "title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", version='" + version + '\'' +
                ", date=" + date +
                ", status=" + status +
                ", fixedVersion='" + fixedVersion + '\'' +
                ", severity=" + severity +
                ", createdBy=" + createdBy +
                ", assignedTo=" + assignedTo +
                '}';
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public String getFixedVersion() {
        return fixedVersion;
    }

    public void setFixedVersion(String fixedVersion) {
        this.fixedVersion = fixedVersion;
    }

    public Severity getSeverity() {
        return severity;
    }

    public void setSeverity(Severity severity) {
        this.severity = severity;
    }

    public Long getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(Long createdBy) {
        this.createdBy = createdBy;
    }

    public Long getAssignedTo() {
        return assignedTo;
    }

    public void setAssignedTo(Long assignedTo) {
        this.assignedTo = assignedTo;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Bug bug = (Bug) o;
        return title.equals(bug.title) &&
                description.equals(bug.description) &&
                version.equals(bug.version) &&
                Objects.equals(date, bug.date) &&
                status == bug.status &&
                Objects.equals(fixedVersion, bug.fixedVersion) &&
                severity == bug.severity &&
                createdBy.equals(bug.createdBy) &&
                assignedTo.equals(bug.assignedTo);
    }

    @Override
    public int hashCode() {
        return Objects.hash(title, description, version, date, status, fixedVersion, severity, createdBy, assignedTo);
    }
}
