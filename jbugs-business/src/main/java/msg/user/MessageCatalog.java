// =================================================================================================
// Copyright (c) 2017-2020 BMW Group. All rights reserved.
// =================================================================================================
package msg.user;

import msg.exeptions.ExceptionMessage;

/**
 * A catalog of all the Messages thrown from the User component.
 *
 * @author msg-system ag;  Daniel Donea
 * @since 1.0
 */
public class MessageCatalog {

    /** A message for the case when a user already exists with the same email. */
    public static final ExceptionMessage USER_WITH_SAME_MAIL_EXISTS
            = new ExceptionMessage("USER-01", "A user with the same email already exists.");
    public static final ExceptionMessage INVALID_CREDENTIALS
            = new ExceptionMessage("USER-02", "Username or password invalid");
    public static final ExceptionMessage NOT_ACTIVE_USER
            = new ExceptionMessage("USER-03", "User is not active. Please contact support ");
    public static final ExceptionMessage TOO_MANY_ATTEMPTS
            = new ExceptionMessage("USER-04", "User has been blocked. Please contact support");
    public static final ExceptionMessage HAS_TASKS
            = new ExceptionMessage("USER-05", "Can't deactivate user with assigned tasks");
}
