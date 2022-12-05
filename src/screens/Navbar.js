import { useContext } from 'react'
import { AuthenticatedUserContext } from '../context/AuthContext';


function Navbar() {
  const [user, setUser] = useContext(AuthenticatedUserContext);
  const logOut = () =>{
    setUser(null);
  }
    return (
        <div className="navbar">
          <span className="logo">
            <span className="link" to="/">
              SoftBlobs
            </span>
          </span>
          <ul className="list">
              <li className="listItem">
                <img
                  src={user.userAvatar}
                  alt=""
                  className="avatar"
                />
              </li>
              <li className="listItem">{"Hello " + user.userName}</li>         
              <li className="listItem" onClick={logOut}>
              LogOut
              </li>       
            </ul>
        </div>
      );
}

export default Navbar