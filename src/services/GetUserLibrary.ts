import { refreshAccessToken } from "./GetAuthorizationToken";

export const getUserSavedAlbums = async (accessToken: String, refreshToken: String) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + accessToken);

    var requestOptions: any = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    return await fetch("https://api.spotify.com/v1/me/albums", requestOptions)
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
            return JSON.parse(result).items
        }
        
    })
    .catch(error => console.error('error', error));
}

export const getUserFollowedArtist = (accessToken: String, refreshToken: String) =>{
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+accessToken);

    const requestOptions: any = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    return fetch("https://api.spotify.com/v1/me/following?type=artist", requestOptions)
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
            return JSON.parse(result).artists.items
        }
    })
    .catch(error => console.log('error', error));
}

export const getUserPlaylists = (accessToken: String, refreshToken: String, userId: String) =>{
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+ accessToken);

    var requestOptions:any = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, requestOptions)
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
            return JSON.parse(result).items
        }
    })
    .catch(error => console.log('error', error));
}

export const  getUserLikedSongs = (accessToken: String, refreshToken: String) =>{
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+accessToken);

    const requestOptions:any = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    return fetch("https://api.spotify.com/v1/me/tracks?limit=50", requestOptions)
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
            return JSON.parse(result);
        }
    })
    .catch(error => console.log('error', error));
}