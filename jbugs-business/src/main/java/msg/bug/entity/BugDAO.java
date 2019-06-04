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

    /*public Bug createBug(Bug bug){
        em.persist(bug);
        return bug;
    }*/

    public List<Bug> getAll(){
       return em.createNamedQuery(Bug.BUG_FIND_ALL, Bug.class).getResultList();
    }

    public Bug findBugById(Long id) {
        Bug bug = em.createNamedQuery(Bug.MODIFY_STATUS, Bug.class)
                .setParameter("id", id)
                .getSingleResult();
        return bug;
    }

    public Bug modifyStatus(Bug bug) {
        Bug modify = findBugById(bug.getId());
        modify.setStatus(bug.getStatus());
        em.merge(modify);
        return modify;
    }
}
