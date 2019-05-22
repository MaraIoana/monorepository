package msg.permission.entity;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

/**
 * The DAO for the PermissionEntity Entities.
 *
 * @author msg systems AG;
 * @since 19.1.2
 */
@Stateless
public class PermissionDao {

    @PersistenceContext(unitName="jbugs-persistence")
    private EntityManager em;

    /**
     * Persists a permission entity.
     *
     * @param p the input entity to be saved.
     * @return the persisted entity.
     */
    public PermissionEntity createPermission(PermissionEntity p){
        em.persist(p);
        return p;
    }

    public void removePermission(PermissionEntity p){
        em.remove(p);
    }

    public List<PermissionEntity> getPermissionsByTypeList(final List<String> typeList){
        return em.createNamedQuery(PermissionEntity.QUERY_GET_PERMISSIONS_BY_TYPE_LIST, PermissionEntity.class)
                .setParameter(PermissionEntity.INPUT_TYPE_LIST, typeList)
                .getResultList();
    }
}
