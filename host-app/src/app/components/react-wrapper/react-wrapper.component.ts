import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/native-federation';

@Component({
  selector: 'app-react-wrapper',
  standalone: true,
  template: '<div #container></div>',
  styles: [':host { display: block; width: 100%; }']
})
export class ReactWrapperComponent implements OnInit, OnDestroy {
  @ViewChild('container', { static: true }) containerRef!: ElementRef;
  
  @Input() remoteName!: string;
  @Input() exposedModule!: string;
  
  private unmount: (() => void) | undefined;

  async ngOnInit() {
    try {
      // Use dynamic import for framework-agnostic loading
      const remoteUrl = 'http://localhost:4202/remoteEntry.js';
      const module = await import(/* @vite-ignore */ remoteUrl);
      
      if (module && typeof module.mount === 'function') {
        // Create a unique ID for the container if needed, or just use the element
        const containerId = `react-container-${Math.random().toString(36).substring(2, 9)}`;
        this.containerRef.nativeElement.id = containerId;
        
        this.unmount = module.mount(containerId);
      }
    } catch (error) {
      console.error('Error loading React MFE:', error);
    }
  }

  ngOnDestroy() {
    if (this.unmount) {
      this.unmount();
    }
  }
}
