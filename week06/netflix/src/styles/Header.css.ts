import { style } from '@vanilla-extract/css';

export const header = style({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '338px',
    height: '57px',
    position: 'fixed',
    top: '24px',
    zIndex: 10,
});

export const headerItem = style({
    fontSize: '17.2px',
    color: '#FFFFFF',
});
