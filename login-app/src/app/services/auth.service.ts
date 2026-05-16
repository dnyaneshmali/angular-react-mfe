import { Injectable } from '@angular/core';
import { from, Observable, map, catchError, of } from 'rxjs';

export interface User {
  username: string;
  password: string;
  name: string;
  role: string;
}

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

  /**
   * Validates credentials against users.json using native fetch (no HttpClient dependency).
   * Stores the matched user in localStorage and returns them, or null on failure.
   */
  login(username: string, password: string): Observable<LoggedInUser | null> {
    const fetchPromise = fetch('/users.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load users.json');
        return res.json() as Promise<User[]>;
      })
      .then((users: User[]) => {
        const match = users.find(
          (u) => u.username === username && u.password === password
        );
        if (match) {
          const loggedInUser: LoggedInUser = {
            username: match.username,
            name: match.name,
            role: match.role
          };
          localStorage.setItem(STORAGE_KEY, JSON.stringify(loggedInUser));
          return loggedInUser;
        }
        return null;
      });

    return from(fetchPromise).pipe(
      catchError(() => of(null))
    );
  }

  /**
   * Returns the currently logged-in user from localStorage, or null.
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
   * Returns true if a valid user session exists in localStorage.
   */
  isAuthenticated(): boolean {
    return this.getCurrentUser() !== null;
  }

  /**
   * Clears the user session from localStorage.
   */
  logout(): void {
    localStorage.removeItem(STORAGE_KEY);
  }
}
