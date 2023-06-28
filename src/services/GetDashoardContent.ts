import { refreshAccessToken } from "./GetAuthorizationToken";
export const getPlaylist = async (accessToken: String, refreshToken: String, playlistId: any) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+accessToken);

    const requestOptions: any = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };


    return fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, requestOptions)
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
    .catch(error => console.log('error', error)); 
}