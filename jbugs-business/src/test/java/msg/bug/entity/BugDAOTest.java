package msg.bug.entity;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import java.util.ArrayList;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
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
        when(em.createNamedQuery(Bug.BUG_FIND_BY_ID, Bug.class)).thenReturn(query);
        when(em.createNamedQuery(Bug.BUG_FIND_BY_ID, Bug.class)).thenReturn(query);
        when(query.setParameter(anyString(), any())).thenReturn(query);
        when(query.getResultList()).thenReturn(bugs);
    }

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this); //without this you will get NPE
    }

    @Test
    public void getAll() {

        List<Bug> bugs = bugDAO.getAll();
        Assert.assertEquals(0, bugs.size());
    }

    @Test
    public void getBug() {

        Bug bug = bugDAO.getBug(20L);
        Assert.assertEquals(null, bug);
    }

    @Test
    public void update() {
        Bug bug = createBugforUpdate();
        Mockito.when(bugDAO.findBugById(bug.getId())).thenReturn(new Bug());
        bugDAO.updateBug(bug);

    }

    private Bug createBugforUpdate() {
        Bug bug = new Bug();
        bug.setTitle("new Bug");
        bug.setDescription("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.");
        bug.setId((long) 20);
        return bug;

    }

/*    @Test
    @Ignore
    public void modifyStatus() {
        Bug b = new Bug();
        b.setStatus(Status.FIXED);
        b.setId(Long.valueOf(74));
        Bug b2 = bugDAO.modifyStatus(b);


    }*/

//    @Test

   /* public void findBugById() {
        Bug b = bugDAO.findBugById(Long.valueOf(74));
        Assert.assertEquals("bugg2", b.getTitle());
    }*/

}