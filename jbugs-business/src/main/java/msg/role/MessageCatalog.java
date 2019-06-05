package msg.role;

import msg.exeptions.ExceptionMessage;

/**
 * Document me.
 *
 * @author msg systems AG; User Name.
 * @since 19.1.2
 */
public class MessageCatalog {

        /** A message for the case when a user already exists with the same email. */
        public static final ExceptionMessage USER_WITH_SAME_MAIL_EXISTS
                = new ExceptionMessage("ROLE-01", "A user with the same email already exists.");
        public static final ExceptionMessage INVALID_CREDENTIALS
                = new ExceptionMessage("ROLE-02", "Username or password invalid");
}
