export class LocalStorageUtils {

  public getToken(): string | null {
      return localStorage.getItem('token');
  }

  public saveToken(token: string) {
      localStorage.setItem('token', token);
  }

  public saveUser(user: string) {
      localStorage.setItem('user', JSON.stringify(user));
  }

  public getUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  public cleanUser() {
    localStorage.removeItem('user');
  }

}
