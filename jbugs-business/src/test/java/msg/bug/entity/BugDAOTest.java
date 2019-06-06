package msg.bug.entity;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.when;

/**
 * Document me.
 *
 * @author msg systems AG; User Name.
 * @since 19.1.2
 */
@RunWith(MockitoJUnitRunner.class)
public class BugDAOTest {


    @Mock
    private EntityManager em;
    @Mock
    private TypedQuery<Bug> query;

    @InjectMocks
    BugDAO bugDAO;

    @Before
    public void init() {
        List<Bug> bugs = new ArrayList<>();
        when(em.createNamedQuery(Bug.BUG_FIND_ALL, Bug.class)).thenReturn(query);
        when(query.getResultList()).thenReturn(bugs);
    }

    @Test
    public void getAll() {

        List<Bug> bugs = bugDAO.getAll();
        Assert.assertEquals(0, bugs.size());
    }

    @Test
    public void modifyStatus() {
        Bug b = new Bug();
        b.setStatus(Status.FIXED);
        b.setId(Long.valueOf(74));
        Bug b2 = bugDAO.modifyStatus(b);


    }

    @Test
    public void findBugById() {
        Bug b = bugDAO.findBugById(Long.valueOf(74));
        Assert.assertEquals("bugg2", b.getTitle());
    }

}