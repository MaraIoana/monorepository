// =================================================================================================
// Copyright (c) 2017-2020 BMW Group. All rights reserved.
// =================================================================================================
package msg.user.control;

import msg.notifications.boundary.NotificationFacade;
import msg.user.entity.UserDao;
import msg.user.entity.dto.UserConverter;
import msg.user.entity.dto.UserDTO;
import msg.user.entity.dto.UserInputDTO;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

/**
 * Test class for UserControl.
 *
 * @author msg-system ag;  Daniel Donea
 * @since 1.0
 */
@RunWith(MockitoJUnitRunner.class)
public class UserControlTest {

    @InjectMocks
    UserControl userControl;

    @Mock
    UserDao userDao;

    @Mock
    UserConverter userConverter;

    @Mock
    NotificationFacade notificationFacade;

    @Before
    public void setUp() {
    }

    @Test
    public void getAll() {

        Assert.assertEquals(2,userDao.getAll().size());
    }

    @Test
    public void testCreateUserWithSuccess(){
        UserInputDTO user = createTestInputDTO();

        Mockito.when(userConverter.convertInputDTOtoEntity(Mockito.any())).thenCallRealMethod();
        Mockito.when(userDao.existsEmail(user.getEmail())).thenReturn(false);
        Mockito.doNothing().when(notificationFacade).createNotification(Mockito.any(), Mockito.any());

        this.userControl.createUser(user);
    }

    @Test
    public void updateCreateUserWithSuccess() {
        UserDTO user = createTestUpdateDTO();

        Mockito.when(userConverter.convertDTOToEntity(Mockito.any())).thenCallRealMethod();
        // Mockito.when(userDao.findUserByUsername(Mockito.any())).thenCallRealMethod();
//        Mockito.doNothing().when(notificationFacade).createNotification(Mockito.any(), Mockito.any());
        System.out.println(user.getUsername());
        this.userControl.updateUser(user);

    }



/*
    @Test(expected = BusinessException.class)
    public void testCreateUserWhenEmailAddressAlreadyExists(){
        UserInputDTO user = createTestInputDTO();

        Mockito.when(userDao.existsEmail(user.getEmail())).thenReturn(true);

        this.userControl.createUser(user);
    }

    @Test
    public void testCreateUserNotificationSent(){
        UserInputDTO user = createTestInputDTO();

        ArgumentCaptor<NotificationType> sentNotificationType = ArgumentCaptor.forClass(NotificationType.class);
        Mockito.when(userConverter.convertInputDTOtoEntity(Mockito.any())).thenCallRealMethod();
        Mockito.when(userDao.existsEmail(user.getEmail())).thenReturn(false);
        Mockito.doNothing().when(notificationFacade).createNotification(sentNotificationType.capture(), Mockito.any());

        this.userControl.createUser(user);
        Assert.assertEquals(sentNotificationType.getValue(), NotificationType.WELCOME_NEW_USER);
    }
*/

    private UserInputDTO createTestInputDTO() {
        UserInputDTO user = new UserInputDTO();
        user.setLastName("Popa");
        user.setFirstName("Andreia");
        user.setEmail("axasde@yahoo.com");
        user.setMobileNumber("0700000000");
        //user.setCounter(0);
        return user;
    }

    private UserDTO createTestUpdateDTO() {
        UserDTO user = new UserDTO();
        user.setUsername("S4K283IO");
        user.setLastName("Malinas");
        user.setFirstName("Ionut-Calin");
        user.setEmail("Calin.Malinas@yahoo.com");
        user.setMobileNumber("0700000000");
        return user;

    }

}
