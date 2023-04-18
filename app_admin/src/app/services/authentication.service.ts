import { Inject, Injectable } from '@angular/core'; 
import { BROWSER_STORAGE } from '../storage'; 
import { User } from '../models/user'; 
import { AuthResponse } from '../models/authresponse'; 
import { TripDataService } from '../services/trip-data.service'; 

@Injectable({ 
  providedIn: 'root' 
}) 
export class AuthenticationService {

  constructor(
    @Inject(BROWSER_STORAGE) private storage: Storage, 
    private tripDataService: TripDataService 
  ) { }

  // Checks browser storage for token and returns it if found
  public getToken(): string { 
    return this.storage.getItem('travlr-token'); 
  }

  // Accepts a token and saves it to local storage
  public saveToken(token: string): void { 
    this.storage.setItem('travlr-token', token); 
  }

  // Defers to the tripDataService login, then calls the saveToken method
  public login(user: User): Promise<any> { 
    return this.tripDataService.login(user) 
    .then((authResp: AuthResponse) => this.saveToken(authResp.token)); 
  }

  public register(user: User): Promise<any> {
    return this.tripDataService.register(user) 
    .then((authResp: AuthResponse) => this.saveToken(authResp.token)); 
  }

  public logout(): void { 
    this.storage.removeItem('travlr-token'); 
  }

  /*
  The JWT payload for authentication in this app has the following key:value pairs...
    "_id": value,
    "email": value,
    "name": value,
    "exp": value,
    "iat": value
  */

  // Checks browser storage for token, and if present parses the token to extract the payload, also checks expiration
  public isLoggedIn(): boolean { 
    const token: string = this.getToken(); 
    if (token) { 
      const payload = JSON.parse(atob(token.split('.')[1])); 
      return payload.exp > (Date.now() / 1000); 
    } else { 
      return false; 
    } 
  }

  // Obtains the name of the user who is currently logged in
  public getCurrentUser(): User { 
    if (this.isLoggedIn()) { 
      const token: string = this.getToken(); 
      const { email, name } = JSON.parse(atob(token.split('.')[1])); 
      return { email, name } as User; 
    } 
  }
}
