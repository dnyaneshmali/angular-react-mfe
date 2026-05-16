import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username = '';
  password = '';
  rememberMe = false;
  isLoading = false;
  errorMessage = '';
  showPassword = false;

  constructor(private authService: AuthService) {}

  onSubmit(): void {
    this.errorMessage = '';

    if (!this.username.trim() || !this.password.trim()) {
      this.errorMessage = 'Please enter both username and password.';
      return;
    }

    this.isLoading = true;

    this.authService.login(this.username.trim(), this.password).subscribe({
      next: (user) => {
        this.isLoading = false;
        if (user) {
          // Notify the host-app shell to navigate to dashboard
          window.dispatchEvent(
            new CustomEvent('mfe:login-success', { detail: { user } })
          );
          // Fallback: direct navigation if running standalone
          window.location.href = '/dashboard';
        } else {
          this.errorMessage = 'Invalid username or password. Please try again.';
        }
      },
      error: () => {
        this.isLoading = false;
        this.errorMessage = 'An error occurred. Please try again.';
      }
    });
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
