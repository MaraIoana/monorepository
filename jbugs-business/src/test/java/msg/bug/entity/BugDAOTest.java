package msg.bug.entity;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.junit.MockitoJUnitRunner;

import static org.junit.Assert.*;

/**
 * Document me.
 *
 * @author msg systems AG; User Name.
 * @since 19.1.2
 */
@RunWith(MockitoJUnitRunner.class)
public class BugDAOTest {

    @InjectMocks
    BugDAO bugDAO;

    @Test
    public void getAll() {
        Assert.assertEquals(2,bugDAO.getAll().size());
    }

}