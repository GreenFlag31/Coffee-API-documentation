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

export const goingRight = trigger('goingRight', [
  state(
    'visible',
    style({
      transform: 'translateX(0)',
    })
  ),
  state(
    'invisible',
    style({
      transform: 'translateX(-120%)',
    })
  ),
  transition('invisible <=> visible', [animate('0.2s ease-out')]),
]);
