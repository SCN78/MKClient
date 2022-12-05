import { useContext } from 'react'
import { AuthenticatedUserContext } from '../context/AuthContext';
import HomeScreen from '../screens/HomeScreen';
import LogInScreen from '../screens/LogInScreen';

function RootNavigator() {
    const [user, setUser] = useContext(AuthenticatedUserContext);

    if(user == null)
    {
        return (
            <div>
              <LogInScreen />
            </div>
          )
    }
    else{
        return (
            <div>
              <HomeScreen />
            </div>
          )
    }  
}

export default RootNavigator