import { style } from '@vanilla-extract/css';

export const container = style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'flex-start',
});

export const title = style({
    display: 'flex',
    alignItems: 'center',
    fontSize: '26.75px',
    fontWeight: '700',
    color: '#FFFFFF',
    marginLeft: '16px',
});

export const contents = style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '375px',
    overflowX: 'scroll',
    overflowY: 'hidden',
    whiteSpace: 'nowrap',
    scrollbarWidth: 'none', // Firefox
    msOverflowStyle: 'none', // IE 10+
    '::-webkit-scrollbar': {
        display: 'none', // Chrome, Safari
    },
    marginLeft: '11px',
});

export const element = style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '7px',
});

export const tvItem = style({
    marginLeft: '7px',
});

export const roundPoster = style({
    width: '102px',
    height: '102px',
    borderRadius: '50%',
});