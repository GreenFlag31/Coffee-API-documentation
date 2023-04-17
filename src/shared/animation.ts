import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('500ms', style({ opacity: 1 })),
  ]),
]);

export const goingRight = trigger('right', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(-30%)' }),
    animate('0.3s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
  ]),
]);

export const itemsToExpire = trigger('expiration', [
  state(
    'visible',
    style({
      transform: 'translateY(0)',
    })
  ),
  state(
    'invisible',
    style({
      transform: 'translateX(-120%)',
    })
  ),
  transition('invisible <=> visible', [animate('0.3s ease-out')]),
]);
