package security;

import facades.UserFacade;
import javax.persistence.Persistence;

/**
 *
 * @author lam
 */
public class UserFacadeFactory {
//    private static final IUserFacade instance = 
//            new UserFacade(Persistence.createEntityManagerFactory(DeploymentConfiguration.PU_NAME));
private static final IUserFacade instance = 
            new UserFacade(Persistence.createEntityManagerFactory("PU"));
    public static IUserFacade getInstance(){
        return instance;
    }
}
