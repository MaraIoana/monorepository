// =================================================================================================
// Copyright (c) 2017-2020 BMW Group. All rights reserved.
// =================================================================================================
package msg.role.entity;

import msg.permission.entity.Permission;
import msg.permission.entity.PermissionEntity;
import msg.role.entity.dto.RoleInputDTO;

import java.util.Collections;
import java.util.List;
import javax.ejb.Stateless;
import javax.management.relation.Role;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 * The DAO for the RoleEntity Entities.
 *
 * @author msg-system ag;  Daniel Donea
 * @since 1.0
 */
@Stateless
public class RoleDao {

    @PersistenceContext(unitName="jbugs-persistence")
    private EntityManager em;

    /**
     * Given a input list of {@link RoleEntity#getType()}s, returns the corresponding list of RoleEntity Entities.
     *
     * @param typeList a list of role types.
     * @return a list of role entities.
     */
    public List<RoleEntity> getRolesByTypeList(final List<String> typeList){
        return em.createNamedQuery(RoleEntity.QUERY_GET_ROLES_BY_TYPE_LIST, RoleEntity.class)
                .setParameter(RoleEntity.INPUT_TYPE_LIST, typeList)
                .getResultList();
    }

    public List<RoleEntity> getAll(){
        return em.createNamedQuery(RoleEntity.FIND_ALL, RoleEntity.class).getResultList();
    }

    public RoleEntity save(RoleInputDTO roleInputDTO){
        RoleEntity roleEntity = getRole(roleInputDTO.getType());
        roleEntity = em.find(RoleEntity.class,roleEntity.getId());
        List<PermissionEntity> permissions = em.createNamedQuery(PermissionEntity.GET_PERMISSION_ENTITIES,PermissionEntity.class)
                .setParameter("types",roleInputDTO.getPermissions())
                .getResultList();

        roleEntity.setPermissions(permissions);
        em.flush();
        return roleEntity;
    }

    private RoleEntity getRole(String type){
        return this.getRolesByTypeList(Collections.singletonList(type)).get(0);
    }
}
