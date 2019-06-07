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

    public Bug modifyStatus(Bug bug) {
        Bug modify = findBugById(bug.getId());
        modify.setStatus(bug.getStatus());
        em.merge(modify);
        return modify;
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
        //updateBug.setDate(bug.getDate());
        updateBug.setSeverity(bug.getSeverity());
        updateBug.setCreatedBy(bug.getCreatedBy());
        updateBug.setAssignedTo(bug.getAssignedTo());

        em.merge(updateBug);

        return updateBug;
    }

    public Long getUserId(String username){
        return em.createNamedQuery(Bug.GET_USER_ID,Long.class)
                .setParameter("username",username)
                .getSingleResult();
    }

    public String getUsername(Long id){
        return em.createNamedQuery(Bug.GET_USERNAME,String.class)
                .setParameter("id",id)
                .getSingleResult();
    }
}
