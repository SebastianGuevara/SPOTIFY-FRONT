import { refreshAccessToken } from "./GetAuthorizationToken";

export const getUserData =async (accessToken: String, refreshToken: String) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + accessToken);

    const requestOptions: any = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    return fetch("https://api.spotify.com/v1/me", requestOptions)
    .then(response => response.text())
    .then(result => {
        if(JSON.parse(result).error){
            if("The access token expired"===JSON.parse(result).error.message){
                return refreshAccessToken(refreshToken).then(r=>{
                    if(r){
                        return r
                    }
                })
            }
        }
        else{
            return JSON.parse(result)
        }
        
    })
    .catch(error => console.error('error', error));
}
    
