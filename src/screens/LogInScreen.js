import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { useContext } from "react";
import { AuthenticatedUserContext } from "../context/AuthContext";
import Google from "../images/google.png";
import Facebook from "../images/facebook.png";
import Github from "../images/github.png";
import APIService from "../services/APIService";

function LogInScreen() {
    const [user, setUser] = useContext(AuthenticatedUserContext);

    const initUser = async (dataPost) =>{        
        const luser = await APIService.signIn(dataPost);
        console.log(luser);
        setUser(luser);
    }

    // const googleSignIn = useGoogleLogin({
    //     onSuccess:tokenResponse =>{
    //         console.log(tokenResponse)
    //         const dataPost = JSON.stringify({ 
    //             UserName: '',
    //             Password:'',
    //             Provider:'google',
    //             Client_Id:'1060359963793-ob0lncuib4f9bpoqo8j9rm9m90jsv3r1.apps.googleusercontent.com',
    //             IdToken:tokenResponse.access_token }) 
    //         initUser(dataPost)          
    //     }
    // })
    const useGoogleToLogin= useGoogleLogin({
        onSuccess: async tokenResponse =>{ 
            const dataPost = JSON.stringify({ 
                UserName: '',
                Password:'',
                Provider:'google',
                Client_Id:'',
                IdToken:tokenResponse.access_token })
            initUser(dataPost)   
        }
    })
    // const googleSignIn = useGoogleLogin({
    //     onSuccess: async tokenResponse =>{           
    //         var dc = `Bearer ${tokenResponse.access_token}`
    //         console.log(dc)
    //         const requestOptions = {
    //             method: 'GET',
    //             headers: { 'Authorization':  dc}           
    //         };     
    //     return fetch('https://www.googleapis.com/oauth2/v3/userinfo',requestOptions)
    //         .then(function(response) {
    //             return response.json();
    //         }).then(function(json) {
    //             console.log(json);
    //             return json;
    //         }).catch(error => console.log(error));              
    //     }
    // })

    const normalLogin = () =>{
        const dataPost = JSON.stringify({ 
            UserName: 'user@dummy.com',
            Password:'Password123',
            Provider:'',
            Client_Id:'',
            IdToken:'' })
        initUser(dataPost)       
    };    

    const facebookLogin = async () => {

    }

    const githubLogin = async () => {
        
    }

    const handleSignIn = (googleData) => {
        console.log(googleData);
        const dataPost = JSON.stringify({
            UserName: '',
            Password: '',
            Provider: 'google',
            Client_Id: '1060359963793-ob0lncuib4f9bpoqo8j9rm9m90jsv3r1.apps.googleusercontent.com',
            IdToken: googleData.credential
        })
        initUser(dataPost)
    }

    return (
        <div className="login">
            <h1 className="loginTitle">Choose a Login Method</h1>
            <div className="wrapper">
                <div className="left">                   
                    <div className="loginButton google" onClick={useGoogleToLogin}>
                        <img src={Google} alt="" className="icon" />
                        Google
                    </div>                                       
                    {/* <GoogleLogin className="loginButton google"
                        clientId="1060359963793-ob0lncuib4f9bpoqo8j9rm9m90jsv3r1.apps.googleusercontent.com"
                        buttonText="Google"
                        onSuccess={handleSignIn}
                        cookiePolicy={'single_host_origin'}
                    ></GoogleLogin> */}
                    <div className="loginButton facebook" onClick={facebookLogin}>
                        <img src={Facebook} alt="" className="icon" />
                        Facebook
                    </div>
                    <div className="loginButton github" onClick={githubLogin}>
                        <img src={Github} alt="" className="icon" />
                        Github
                    </div>
                </div>
                <div className="center">
                    <div className="line" />
                    <div className="or">OR</div>
                </div>
                <div className="right">
                    <input type="text" placeholder="Username" />
                    <input type="text" placeholder="Password" />
                    <button className="submit" onClick={normalLogin}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default LogInScreen
