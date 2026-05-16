import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface LoggedInUser {
  username: string;
  name: string;
  role: string;
}

const STORAGE_KEY = 'auth_user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {}

  /**
   * Returns the logged-in user stored in localStorage, or null if not authenticated.
   */
  getCurrentUser(): LoggedInUser | null {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored) as LoggedInUser;
      } catch {
        return null;
      }
    }
    return null;
  }

  /**
   * Returns true if a valid user session exists.
   */
  isAuthenticated(): boolean {
    return this.getCurrentUser() !== null;
  }

  /**
   * Clears the user session and navigates to login.
   */
  logout(): void {
    localStorage.removeItem(STORAGE_KEY);
    this.router.navigate(['/login']);
  }
}
