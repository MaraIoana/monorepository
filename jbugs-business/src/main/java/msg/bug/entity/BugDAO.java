package msg.bug.entity;

import javax.ejb.Stateless;
import javax.persistence.*;
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
}
