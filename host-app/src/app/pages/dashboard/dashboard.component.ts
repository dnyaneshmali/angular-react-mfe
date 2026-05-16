import { Component } from '@angular/core';
import { ReactWrapperComponent } from '../../components/react-wrapper/react-wrapper.component';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [ReactWrapperComponent],
  template: `
    <div class="page-container">
      <app-react-wrapper 
        remoteName="dashboard" 
        exposedModule="./Module">
      </app-react-wrapper>
    </div>
  `,
  styles: [`
    .page-container {
      animation: fadeIn 0.5s ease-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class DashboardPage { }
