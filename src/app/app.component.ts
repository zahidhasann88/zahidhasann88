import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { routeAnimations } from './core/utils/animation/animations';
import { SmoothScrollService } from './core/services/smoth.service';
import { ThemeService } from './core/services/theme.service';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [routeAnimations],
})
export class AppComponent {
  private readonly themeService = inject(ThemeService);

  constructor(private smoothScrollService: SmoothScrollService) {}

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }

  scrollToElement(elementId: string): void {
    this.smoothScrollService.scrollToElementById(elementId);
  }
}
