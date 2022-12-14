import * as React from "react";
import { SVGProps } from "react";

const CaretDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m12 13.172 4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
  </svg>
);

export default CaretDown;
