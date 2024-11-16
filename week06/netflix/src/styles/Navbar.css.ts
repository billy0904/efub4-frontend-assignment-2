import { style } from '@vanilla-extract/css';

export const navBar = style({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#121212',
    width: '375px',
    height: '53px',
    position: 'fixed',
    bottom: 0,
    zIndex: 10,
});

export const navItem = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '8.2px',
    color: '#8C8787',
    textDecoration: 'none',
});

export const activeNavItem = style({
    color: '#FFFFFF',
});

export const icon = style({
    width: 24,
    height: 24,
});

export const activeIcon = style({
    filter: 'brightness(0) invert(1)',
});
