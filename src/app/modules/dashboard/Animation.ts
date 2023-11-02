import { trigger, state, style, animate, transition } from '@angular/animations';

export const fadeInUp = trigger('fadeInUp', [
    state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
    transition(':enter', [animate('0.5s ease-in-out')]),
]);
