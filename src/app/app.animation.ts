import {
  transition,
  trigger,
  style,
  animate,
  query,
} from '@angular/animations';

export const appAnimations = trigger('appAnimations', [
  transition('* => project', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }),
      ],
      { optional: true }
    ),
    query(':enter', [style({ opacity: 0, transform: 'translateY(150px)' })], {
      optional: true,
    }),
    query(
      ':leave',
      [
        animate(
          '250ms ease-in',
          style({ opacity: 0, transform: 'translateY(-150px)' })
        ),
      ],
      { optional: true }
    ),
    query(
      ':enter',
      [
        animate(
          '250ms ease-out',
          style({ opacity: 1, transform: 'translateY(0px)' })
        ),
      ],
      { optional: true }
    ),
  ]),
  
  transition('* => portfolio', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }),
      ],
      { optional: true }
    ),
    query(':enter', [style({ opacity: 0, transform: 'translateY(-150px)' })], {
      optional: true,
    }),
    query(
      ':leave',
      [
        animate(
          '250ms ease-in',
          style({ opacity: 0, transform: 'translateY(150px)' })
        ),
      ],
      { optional: true }
    ),
    query(
      ':enter',
      [
        animate(
          '250ms ease-out',
          style({ opacity: 1, transform: 'translateY(0px)' })
        ),
      ],
      { optional: true }
    ),
  ]),
]);
