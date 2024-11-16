import { style } from '@vanilla-extract/css';

export const container = style({
    display: 'flex',
    flexDirection: 'column',
    height: '435px',
});

export const poster = style({
    height: '415px',
});

export const topTenContainer = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20px',
});

export const text = style({
    display: 'flex',
    alignItems: 'center',
    fontSize: '13.72px',
    fontWeight: '700',
    color: '#FFFFFF',
    marginLeft: '5px',
});
