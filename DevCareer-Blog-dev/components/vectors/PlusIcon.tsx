import * as React from "react";
import { SVGProps } from "react";

const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" fill={props.color} />
  </svg>
);

export default PlusIcon;
