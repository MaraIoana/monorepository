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

    public Bug createBug(Bug newBug) {
        em.persist(newBug);
        return newBug;
    }

    public Bug getBug(Long id) {
        return em.createNamedQuery(Bug.BUG_FIND_BY_ID, Bug.class).
                setParameter("id", id)
                .getSingleResult();
    }

    public Bug findBugById(Long id) {
        Bug bug = em.createNamedQuery(Bug.BUG_FIND_BY_ID, Bug.class)
                .setParameter(Bug.ID, id)
                .getSingleResult();
        return (bug);
    }

    public Bug UpdateBug(Bug bug) {
        Bug updateBug = findBugById(bug.getId());
        updateBug.setTitle(bug.getTitle());
        updateBug.setDescription(bug.getDescription());
        updateBug.setDate(bug.getDate());
        updateBug.setSeverity(bug.getSeverity());
        updateBug.setCreatedBy(bug.getCreatedBy());
        updateBug.setAssignedTo(bug.getAssignedTo());

        em.merge(updateBug);

        return updateBug;
    }
}
