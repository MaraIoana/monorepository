package msg.permission.entity;

import msg.role.entity.RoleEntity;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;

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

    public PermissionEntity getPermissionByType(String type){
        return em.createNamedQuery(PermissionEntity.GET_PERMISSION_BY_TYPE,PermissionEntity.class)
                .setParameter("type",type)
                .getSingleResult();
    }

    public void removePermission(PermissionEntity p){
        em.remove(p);
    }

    public List<PermissionEntity> getPermissionsByRoles(final List<String> roles){
        return em.createNamedQuery(PermissionEntity.QUERY_GET_PERMISSIONS_BY_ROLES, PermissionEntity.class)
                .setParameter(PermissionEntity.INPUT_ROLES, roles)
                .getResultList();
    }

    public List<PermissionEntity> getAll(){
        return em.createNamedQuery(PermissionEntity.FIND_ALL,PermissionEntity.class)
                .getResultList();
    }

    public List<PermissionEntity> getPermissionsForUser(String username) {
        List<String> roles;

        roles = em.createNamedQuery(PermissionEntity.GET_PERMISSIONS_FOR_USER, RoleEntity.class)
                .setParameter("username", username)
                .getResultList()
                .stream()
                .map(RoleEntity::getType)
                .collect(Collectors.toList());

        HashSet<PermissionEntity> perms = new HashSet<>(
                em.createNamedQuery(PermissionEntity.QUERY_GET_PERMISSIONS_BY_ROLES, PermissionEntity.class)
                        .setParameter(PermissionEntity.INPUT_ROLES, roles)
                        .getResultList()
        );

        return new ArrayList<>(perms);
    }

    public boolean existsUser(String username) {
        long count = em.createNamedQuery(PermissionEntity.USER_COUNT, Long.class)
                .setParameter("username", username)
                .getSingleResult();
        return (count > 0);
    }

    public List<PermissionEntity> getRolePermissions(String type){
        return em.createNamedQuery(PermissionEntity.GET_ROLE_PERMISSIONS,PermissionEntity.class)
                .setParameter("type",type)
                .getResultList();
    }
}
