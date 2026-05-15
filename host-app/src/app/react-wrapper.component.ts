import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { ActivatedRoute } from '@angular/router';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

@Component({
  selector: 'app-react-wrapper',
  standalone: true,
  template: '<div #reactContainer></div>',
})
export class ReactWrapperComponent implements OnInit {
  @ViewChild('reactContainer', { static: true }) container!: ElementRef;
  
  private route = inject(ActivatedRoute);

  async ngOnInit() {
    const { remoteEntry, remoteName, exposedModule } = this.route.snapshot.data;

    const module = await loadRemoteModule({
      type: 'script',
      remoteEntry: remoteEntry,
      remoteName: remoteName,
      exposedModule: exposedModule
    });

    const Component = module.default || Object.values(module)[0];

    const root = ReactDOM.createRoot(this.container.nativeElement);
    root.render(React.createElement(Component as any));
  }
}
