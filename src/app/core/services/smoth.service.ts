import { Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SmoothScrollService {
  constructor(private ngZone: NgZone) {}

  scrollTo(targetElement: HTMLElement | null, duration: number = 500): void {
    if (!targetElement) return;

    const start = window.pageYOffset;
    const target = targetElement.getBoundingClientRect().top + start;
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

    const scroll = (currentTime: number): void => {
      const now = 'now' in window.performance ? performance.now() : new Date().getTime();
      const time = Math.min(1, (now - startTime) / duration);
      const easeInOutCubic = time < 0.5 
        ? 4 * time * time * time 
        : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1;

      window.scrollTo(0, start + (target - start) * easeInOutCubic);

      if (time < 1) {
        requestAnimationFrame(scroll);
      }
    };

    this.ngZone.runOutsideAngular(() => {
      requestAnimationFrame(scroll);
    });
  }

  scrollToElementById(elementId: string, duration: number = 500): void {
    const targetElement = document.getElementById(elementId);
    this.scrollTo(targetElement, duration);
  }
}