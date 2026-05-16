import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService, LoggedInUser } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  currentUser: LoggedInUser | null = null;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();

    // Listen for login success events from the login-app MFE
    window.addEventListener('mfe:login-success', (event: Event) => {
      const customEvent = event as CustomEvent;
      this.currentUser = customEvent.detail?.user ?? null;
      this.router.navigate(['/dashboard']);
    });
  }

  onLogin(): void {
    this.router.navigate(['/login']);
  }

  onLogout(): void {
    this.authService.logout();
    this.currentUser = null;
  }

  getRoleLabel(role: string): string {
    const labels: Record<string, string> = {
      admin: '🛡️ Admin',
      manager: '📋 Manager',
      user: '👤 User'
    };
    return labels[role] ?? role;
  }
}
