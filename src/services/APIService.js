class APIService{

    signIn = async (dataPost) =>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: dataPost
        };
        return fetch('https://localhost:7078/api/Accounts/Token',requestOptions)
                .then(function(response) {
                    return response.json();
                }).then(function(json) {
                    return json;
                }).catch(error => console.log(error));
    }
    googleAccessToken = (tokenResponse) => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${tokenResponse.access_token}` }           
        };
        return fetch('https://www.googleapis.com/oauth2/v3/userinfo',requestOptions)
                .then(function(response) {
                    return response.json();
                }).then(function(json) {
                    return json;
                }).catch(error => console.log(error));
    }
}

export default new APIService();