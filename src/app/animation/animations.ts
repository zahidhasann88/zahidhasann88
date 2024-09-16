import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

export const pageLoadAnimation = trigger('pageLoadAnimation', [
  transition(':enter', [
    query('.fade-in', [
      style({ opacity: 0, transform: 'translateY(-10px)' }),
      stagger(50, [
        animate('600ms cubic-bezier(0.35, 0, 0.25, 1)', 
          style({ opacity: 1, transform: 'translateY(0)' })
        )
      ])
    ], { optional: true })
  ])
]);

export const routeAnimations = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ opacity: 0, transform: 'scale(0.98)' }),
    animate('400ms cubic-bezier(0.35, 0, 0.25, 1)', 
      style({ opacity: 1, transform: 'scale(1)' })
    ),
  ]),
]);