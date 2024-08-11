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

export function saveToken(token: string): void {
    const expiresIn = 30 * 24 * 60 * 60;
    const expiryTime = new Date().getTime() + expiresIn * 1000;
    localStorage.setItem('shop', token);
    localStorage.setItem('tokenExpiry', expiryTime.toString());
}