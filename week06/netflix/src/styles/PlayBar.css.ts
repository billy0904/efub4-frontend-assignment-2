import { style } from '@vanilla-extract/css';

export const container = style({
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
});

export const contents = style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '259px',
});

export const element = style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '7px',
});

export const button = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '5.63px',
    border: 'none',
    width: '110.62px',
    height: '45px',
    fontSize: '20.46px',
    fontWeight: '600',
    backgroundColor: '#C4C4C4',
    gap: '10px',
});

export const text = style({
    display: 'flex',
    alignItems: 'center',
    fontSize: '13.64px',
    fontWeight: '400',
    height: '14px',
    color: '#FFFFFF',
    marginTop: '5px',
});
