import { createGlobalTheme, globalFontFace, style } from "@vanilla-extract/css";

const sfDisplay = "sfDisplay";

globalFontFace(sfDisplay, [
  {
    src: "url(/fonts/SF_Display_Medium.OTF)",
    fontWeight: "500",
  },
  {
    src: "url(/fonts/SF_Display_Bold.OTF)",
    fontWeight: "700",
  },
  {
    src: "url(/fonts/SF_Display_Regular.OTF)",
    fontWeight: "400",
  },
]);

export const global = createGlobalTheme(":root", {
  font: {
    body: "SF_Display",
    menu: "sfDisplay",
  },
});

export const root = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
});

export const page = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  minHeight: '100vh',
  width: '375px',
  backgroundColor: '#000000',
  overflowY: 'scroll',
  scrollbarWidth: 'none', // Firefox
  msOverflowStyle: 'none', // IE 10+
  '::-webkit-scrollbar': {
    display: 'none', // Chrome, Safari
  },
});

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

