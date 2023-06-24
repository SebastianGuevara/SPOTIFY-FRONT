export const getAuthorizationToken = (code: String) =>{
  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Basic NTA5YmQxMjZlNTI3NDg2MjkzMjVhMmE1YjFmOWIxYWM6YzAyMWU2Yjk4YmQxNGVkZWFkNDBlMmE5ZTc0NThlMDQ=");
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  myHeaders.append("Cookie", "__Host-device_id=AQCJfIFwsqHsqnZ5J0Y-JBs-WGffAJq5SvXn_SfshmY-a4N1g_YerXL-G9XgMhTfw2AEzJNbMAhzDCdGp9kvft8gS08oDiq3qyk; __Secure-TPASESSION=AQDiOGmf62Q52DFmaSuEObPpPE05hf+PR7BcdpEBqxSVZBKB3/vCfxb73DzCLQcmYVbyFgcgbt1kQkXVdWv+9mXrcW07xvryk4M=; sp_sso_csrf_token=013acda719653f021df042b40e509c8d6bb74ee2a531363837353432383239323730; sp_tr=false");
  
  const requestOptions: any = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  return fetch(`https://accounts.spotify.com/api/token?grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:5173/login`, requestOptions)
}

export const refreshAccessToken = async (refreshToken: String ) =>{
  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Basic NTA5YmQxMjZlNTI3NDg2MjkzMjVhMmE1YjFmOWIxYWM6YzAyMWU2Yjk4YmQxNGVkZWFkNDBlMmE5ZTc0NThlMDQ=");
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  myHeaders.append("Cookie", "__Host-device_id=AQCJfIFwsqHsqnZ5J0Y-JBs-WGffAJq5SvXn_SfshmY-a4N1g_YerXL-G9XgMhTfw2AEzJNbMAhzDCdGp9kvft8gS08oDiq3qyk; __Secure-TPASESSION=AQDiOGmf62Q52DFmaSuEObPpPE05hf+PR7BcdpEBqxSVZBKB3/vCfxb73DzCLQcmYVbyFgcgbt1kQkXVdWv+9mXrcW07xvryk4M=; sp_sso_csrf_token=013acda719653f021df042b40e509c8d6bb74ee2a531363837353432383239323730; sp_tr=false");

  const requestOptions: any = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow'
  };

  return fetch(`https://accounts.spotify.com/api/token?grant_type=refresh_token&refresh_token=${refreshToken}`, requestOptions)
  .then(response => response.text())
  .then(result => {
    return JSON.parse(result).access_token
  })
  .catch(error => console.error(error));
}

