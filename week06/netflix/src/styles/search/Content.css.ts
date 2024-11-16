import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  alignItems: "center",
  width: "400px",
  gap: "7px",
  backgroundColor: "#424242",

  color: "white",
  fontWeight: "400",
  fontSize: "14,72px",
  lineHeight: "30px",
});

export const textplaycontainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  width: "210px",
  height: "30px",

  fontWeight: 400,
});
