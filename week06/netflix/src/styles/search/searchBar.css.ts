import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#424242",

  marginTop: "44px",
  gap: "6px",
  width: "100%",
  height: "52px",
});

export const icon = style({
  display: "flex",
  width: "20px",
  height: "20px",
});

export const searchInput = style({
  display: "flex",
  width: "270px",
  height: "31px",
  border: "none",
  backgroundColor: "transparent",
  color: "#C4C4C4",
});
