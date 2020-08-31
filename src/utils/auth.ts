export function getToken () {
    return localStorage.getItem('token');
}

export function setToken (token: string) {
    localStorage.setItem('token', token);
}

export function clearToken (token: string) {
    localStorage.removeItem('token');
}

export function isLogin () {
    if(localStorage.getItem('token')) {
        return true;
    } else {
        return false;
    }

}