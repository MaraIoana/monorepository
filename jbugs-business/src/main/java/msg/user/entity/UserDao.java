package msg.user.entity;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

/**
 * The DAO for the User Entities.
 *
 * @author msg systems AG;
 * @since 19.1.2
 */
@Stateless
public class UserDao {

    @PersistenceContext(unitName="jbugs-persistence")
    private EntityManager em;

    /**
     * Checks if a email address of a user is in use.
     *
     * @param email the email to check for. mandatory
     * @return <code>true</code> if the input email is associated with a user.
     */
    public boolean existsEmail(String email){
        long count = em.createNamedQuery(UserEntity.USER_COUNT_BY_EMAIL, Long.class)
                .setParameter(UserEntity.EMAIL,email)
                .getSingleResult();
        return (count > 0);
    }
    public boolean existUsername(String username){
        long count = em.createNamedQuery(UserEntity.USER_COUNT_BY_USERNAME, Long.class)
                .setParameter(UserEntity.USERNAME,username)
                .getSingleResult();
        return (count > 0);
    }

    /**
     * Find user with username
     *
     * @param username to be found
     * @return user associated with username.
     */
    // TODO: 22.05.2019 exception handling need to be implemented if user not found
    public UserEntity findUserByUsername(String username) {
        UserEntity user = em.createNamedQuery(UserEntity.USER_FIND_BY_USERNAME, UserEntity.class)
                .setParameter(UserEntity.USERNAME, username)
                .getSingleResult();
        return (user);
    }

    /**
     * Persists a user entity.
     *
     * @param user the input entity to be saved.
     * @return the persisted entity.
     */
    public UserEntity createUser(UserEntity user){
        em.persist(user);
        return user;
    }

    public UserEntity updateUser(UserEntity user) {

        UserEntity updateUser = findUserByUsername(user.getUsername());
        updateUser.setFirstName(user.getFirstName());
        updateUser.setLastName(user.getLastName());
        updateUser.setEmail(user.getEmail());
        updateUser.setMobileNumber(user.getMobileNumber());
        updateUser.setRoles(user.getRoles());
        em.merge(updateUser);


        return updateUser;
    }

    public List<UserEntity> getAll(){
        return em.createNamedQuery(UserEntity.USER_FIND_ALL, UserEntity.class).getResultList();
    }
    public UserEntity getUser(String username){
        return em.createNamedQuery(UserEntity.USER_FIND_BY_USERNAME, UserEntity.class).
                setParameter(UserEntity.USERNAME,username)
                .getSingleResult();
    }
    public UserEntity findByEmail(String email){
        return em.createNamedQuery(UserEntity.USER_FIND_BY_EMAIL, UserEntity.class)
                .setParameter(UserEntity.EMAIL,email)
                .getSingleResult();
    }

    public List<String> getTasks(String username){
        return em.createNamedQuery(UserEntity.GET_TASKS,String.class)
                .setParameter("username",username)
                .getResultList();
    }

    public UserEntity activateOrReset(String username){
        UserEntity userEntity = getUser(username);
        userEntity.setCounter(0);

        em.merge(userEntity);

        return userEntity;
    }

    public UserEntity deactivate(String username){
        UserEntity userEntity = getUser(username);
        userEntity.setCounter(5);

        em.merge(userEntity);

        return userEntity;
    }

    public UserEntity incrementUser(String username){
        UserEntity userEntity = getUser(username);
        userEntity.setCounter(userEntity.getCounter() + 1);

        if(userEntity.getCounter() > 5){
            userEntity.setCounter(5);
        }

        em.merge(userEntity);

        return userEntity;
    }

    public boolean isActive(String username){
        return em.createNamedQuery(UserEntity.IS_ACTIVE,Integer.class)
                .setParameter("username",username)
                .getSingleResult() < 5;
    }

    public UserEntity getUserWithId(int id){
        List<UserEntity> users = em.createNamedQuery(UserEntity.GET_USER_WITH_ID, UserEntity.class)
                .setParameter("id",id)
                .getResultList();
        if (users.size() != 0) {
            return users.get(0);
        } else {
            return new UserEntity();
        }
    }


}
