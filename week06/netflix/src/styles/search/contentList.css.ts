import { style } from "@vanilla-extract/css";

export const topSearches = style({
  color: "white",

  fontWeight: 700,
  fontSize: "26.75px",

  width: "100%",

  margin: "21px 0 21px 10px",
});

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "3px",
});
