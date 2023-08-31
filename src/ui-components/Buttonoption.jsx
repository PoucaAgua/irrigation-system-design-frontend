/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function Buttonoption(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { Buttonoption: {} },
      variantValues: { property1: "Default" },
    },
    {
      overrides: {
        Buttonoption: {
          paths: [
            {
              d: "M49 25C49 38.2548 38.2548 49 25 49L25 51C39.3594 51 51 39.3594 51 25L49 25ZM25 49C11.7452 49 1 38.2548 1 25L-1 25C-1 39.3594 10.6406 51 25 51L25 49ZM1 25C1 11.7452 11.7452 1 25 1L25 -1C10.6406 -1 -1 10.6406 -1 25L1 25ZM25 1C38.2548 1 49 11.7452 49 25L51 25C51 10.6406 39.3594 -1 25 -1L25 1Z",
              stroke: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
              style: { transform: "translate(0%, 0%)" },
            },
            {
              d: "M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z",
              fill: "rgba(217,217,217,1)",
              fillRule: "nonzero",
              style: { transform: "translate(0%, 0%)" },
            },
            {
              d: "M39 20C39 30.4934 30.4934 39 20 39L20 41C31.598 41 41 31.598 41 20L39 20ZM20 39C9.50659 39 1 30.4934 1 20L-1 20C-1 31.598 8.40202 41 20 41L20 39ZM1 20C1 9.50659 9.50659 1 20 1L20 -1C8.40202 -1 -1 8.40202 -1 20L1 20ZM20 1C30.4934 1 39 9.50659 39 20L41 20C41 8.40202 31.598 -1 20 -1L20 1Z",
              stroke: "rgba(71,90,255,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
              style: { transform: "translate(10%, 10%)" },
            },
            {
              d: "M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(10%, 10%)" },
            },
          ],
        },
      },
      variantValues: { property1: "Variant2" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Icon
      width="50px"
      height="50px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 50, height: 50 }}
      paths={[
        {
          d: "M48 25C48 37.7025 37.7025 48 25 48L25 52C39.9117 52 52 39.9117 52 25L48 25ZM25 48C12.2975 48 2 37.7025 2 25L-2 25C-2 39.9117 10.0883 52 25 52L25 48ZM2 25C2 12.2975 12.2975 2 25 2L25 -2C10.0883 -2 -2 10.0883 -2 25L2 25ZM25 2C37.7025 2 48 12.2975 48 25L52 25C52 10.0883 39.9117 -2 25 -2L25 2Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeWidth: 2,
          style: { transform: "translate(0%, 0%)" },
        },
        {
          d: "M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z",
          fill: "rgba(217,217,217,1)",
          fillRule: "nonzero",
          style: { transform: "translate(0%, 0%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Buttonoption")}
      {...rest}
    ></Icon>
  );
}
