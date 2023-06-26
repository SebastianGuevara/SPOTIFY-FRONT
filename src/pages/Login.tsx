import { useEffect } from 'react';
import { getAuthorizationToken } from '../services/GetAuthorizationToken';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAccessAndRefreshTokens, setNewAccesToken } from '../redux/slices/AuthenticationSlice';
import { getUserData } from '../services/GetUserData';
import { setUserData } from '../redux/slices/UserSlice';
const Login:React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        const searchParams = new URLSearchParams(window.location.search);
        const SPOTIFY_GRANT_CODE_URL = "https://accounts.spotify.com/authorize?client_id=509bd126e52748629325a2a5b1f9b1ac&redirect_uri=http://localhost:5173/login&response_type=code&scope=user-follow-read%20user-read-private%20user-read-email%20user-library-read%20playlist-read-private%20playlist-read-collaborative";
        const code = searchParams.get('code');
        if(code){
            getAuthorizationToken(code).then(response => response.text())
            .then(result => {
                if(JSON.parse(result).access_token){
                    const { access_token, refresh_token } = JSON.parse(result);
                    dispatch(setAccessAndRefreshTokens({accessToken: access_token, refreshToken: refresh_token}));
                    handleGetUserData(access_token, refresh_token);
                    navigate('/');
                }
            })
            .catch(error => console.error('error', error));;
        }
        else{
            window.location.href = SPOTIFY_GRANT_CODE_URL;
        }
    },[])

    const handleGetUserData = async (accessToken:String, refreshToken:String)=>{
        const user = await getUserData(accessToken, refreshToken);
        if('newAccessToken' in user){
            dispatch(setNewAccesToken({accessToken: user.newAccessToken}))
            handleGetUserData(user.newAccessToken, refreshToken);
        }
        else{
            const { id,display_name,email,followers,images } = await getUserData(accessToken, refreshToken);
            if(images[0]){
                dispatch(setUserData({id: id, name: display_name, email: email, followers: followers.total, image:images[0].url}));
            }
            else{
                dispatch(setUserData({id: id, name: display_name, email: email, followers: followers.total, image:null}));
            }
            
        }
    }
    return(
        <>
        </>

    )
}

export default Login;