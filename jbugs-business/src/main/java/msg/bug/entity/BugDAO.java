package msg.bug.entity;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

/**
 * Document me.
 *
 * @author msg systems AG; User Name.
 * @since 19.1.2
 */
@Stateless
public class BugDAO {

    @PersistenceContext(unitName="jbugs-persistence")
    private EntityManager em;

    public List<Bug> getAll(){
       return em.createNamedQuery(Bug.BUG_FIND_ALL, Bug.class).getResultList();
    }

    public Bug createBug(Bug newBug) {
        em.persist(newBug);
        return newBug;
    }
}
