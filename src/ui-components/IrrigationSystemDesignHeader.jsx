/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function IrrigationSystemDesignHeader(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1414px"
      height="79px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "IrrigationSystemDesignHeader")}
      {...rest}
    >
      <Icon
        width="1414px"
        height="79px"
        viewBox={{ minX: 0, minY: 0, width: 1414, height: 79 }}
        paths={[
          {
            d: "M0 0L1414 0L1414 79L0 79L0 0Z",
            fill: "rgba(125,214,232,0.4)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Rectangle 1")}
      ></Icon>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="175px"
        height="38px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="26.58%"
        bottom="25.32%"
        left="2.55%"
        right="85.08%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Evapotranspiration"
        {...getOverrideProps(overrides, "Evapotranspiration")}
      ></Text>
      <Image
        width="3.18%"
        height="56.96%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="21.52%"
        bottom="21.52%"
        left="96.04%"
        right="0.78%"
        borderRadius="160px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "image")}
      ></Image>
    </View>
  );
}
