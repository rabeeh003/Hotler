// this is for check token is expire or not
export function isTokenExpired(): boolean {
    const tokenExpiry = localStorage.getItem('tokenExpiry');
    if (!tokenExpiry) return true;
    return new Date().getTime() > parseInt(tokenExpiry, 10);
}

export function removeToken(): void {
    localStorage.removeItem('shop');
    localStorage.removeItem('tokenExpiry');
}