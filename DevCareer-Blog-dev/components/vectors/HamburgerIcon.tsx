import * as React from "react";
import { SVGProps } from "react";

const HamburgerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
  </svg>
);

export default HamburgerIcon;
