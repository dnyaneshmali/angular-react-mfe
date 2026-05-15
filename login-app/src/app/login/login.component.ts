import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="login-card">
      <div class="bank-logo">
        <span class="logo-icon">🏦</span>
        <h2>SecureBank</h2>
      </div>
      <p class="subtitle">Personal Banking Login</p>
      
      <form (ngSubmit)="onLogin()">
        <div class="form-group">
          <label for="username">Username / Customer ID</label>
          <input type="text" id="username" name="username" [(ngModel)]="username" placeholder="Enter your ID">
        </div>
        
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" [(ngModel)]="password" placeholder="••••••••">
        </div>
        
        <div class="login-options">
          <label><input type="checkbox"> Remember Me</label>
          <a href="#">Forgot Password?</a>
        </div>
        
        <button type="submit" class="login-btn">Secure Login</button>
      </form>
      
      <div class="security-notice">
        <small>🛡️ 256-bit Encrypted Connection</small>
      </div>
    </div>
  `,
  styles: [`
    .login-card {
      max-width: 400px;
      margin: 20px auto;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
      background: white;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      border: 1px solid #e0e0e0;
    }
    .bank-logo {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 5px;
    }
    .logo-icon { font-size: 32px; }
    h2 { color: #003366; margin: 0; }
    .subtitle { color: #666; margin-bottom: 25px; font-size: 0.9em; }
    .form-group { margin-bottom: 15px; }
    label { display: block; margin-bottom: 5px; font-weight: 600; color: #333; }
    input {
      width: 100%;
      padding: 12px;
      border: 1px solid #ccc;
      border-radius: 6px;
      box-sizing: border-box;
    }
    .login-options {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      font-size: 0.85em;
    }
    .login-btn {
      width: 100%;
      padding: 14px;
      background: #003366;
      color: white;
      border: none;
      border-radius: 6px;
      font-size: 1em;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.3s;
    }
    .login-btn:hover { background: #002244; }
    .security-notice {
      margin-top: 20px;
      text-align: center;
      color: #28a745;
    }
  `]
})
export class LoginComponent {
  username = '';
  password = '';

  onLogin() {
    alert(`SecureBank: Attempting login for ${this.username}`);
  }
}
