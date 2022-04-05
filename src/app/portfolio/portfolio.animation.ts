import {
  transition,
  trigger,
  style,
  animate,
  query,
} from '@angular/animations';

export const portfolioAnimations = trigger('portfolioAnimations', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          minHeight:'500px'
        }),
      ],
      { optional: true }
    ),
    query(
      ':enter',
      [style({ opacity: 0, height: '100%', transform: 'translateX(-150px)' })],
      { optional: true }
    ),
    query(':leave', [style({ height: '100%' })], { optional: true }),
    query(
      ':leave',
      [
        animate(
          '250ms ease-in',
          style({ opacity: 0, transform: 'translateX(-150px)' })
        ),
      ],
      { optional: true }
    ),
    query(
      ':enter',
      [
        animate(
          '250ms ease-out',
          style({ opacity: 1, transform: 'translatex(0px)' })
        ),
      ],
      { optional: true }
    ),
  ]),
]);
