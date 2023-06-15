import * as React from "react";
import { SvgIcon as MuiSvgIcon, SvgIconProps, styled } from "@mui/material";

const SvgIcon = styled(MuiSvgIcon, {
  name: "CustomCircleIcon",
  shouldForwardProp: (prop) => prop !== "fill",
})<SvgIconProps>(() => ({
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "2.25px",
}));

// use https://yqnn.github.io/svg-path-editor/ to make ur own svg

SvgIcon.defaultProps = {
  viewBox: "0 0 24 24",
  focusable: "false",
  "aria-hidden": "true",
};
const CustomCircleIcon: React.FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <path d="M12 20A1 1 0 0012 4 1 1 0 0012 20"/>
    </SvgIcon>
  );
};

export default CustomCircleIcon;
