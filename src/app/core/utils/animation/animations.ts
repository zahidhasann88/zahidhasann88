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

export const photoGalleryAnimations = trigger('fadeInOut', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('300ms', style({ opacity: 1 })),
    ]),
    transition(':leave', [
      animate('300ms', style({ opacity: 0 })),
    ]),
]);

export const listAnimations = trigger('listAnimation', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(50px)' }),
      stagger(50, [
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0px)' })),
      ]),
    ], { optional: true }),
  ]),
])