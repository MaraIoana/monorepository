package msg.notifications.boundary.notificationParams;

/**
 * Document me.
 *
 * @author msg systems AG; User Name.
 * @since 19.1.2
 */
public class NotificationParamsBugUpdated implements NotificationParams {
    private String bugData;
    private String status;

    public NotificationParamsBugUpdated(String bugData, String status) {
        this.bugData = bugData;
        this.status = status;
    }

    @Override
    public String toString() {
        return "NotificationParamsBugUpdated{" +
                "bugData='" + bugData + '\'' +
                ", status='" + status + '\'' +
                '}';
    }

    public String getBugData() {
        return bugData;
    }

    public void setBugData(String bugData) {
        this.bugData = bugData;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
