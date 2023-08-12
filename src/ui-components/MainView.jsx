/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, View } from "@aws-amplify/ui-react";
export default function MainView(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="751px"
      height="550px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "MainView")}
      {...rest}
    >
      <Button
        width="unset"
        height="unset"
        position="absolute"
        top="443px"
        left="478px"
        backgroundColor="rgba(0,0,0,1)"
        size="large"
        isDisabled={false}
        variation="destructive"
        children="Iniciar"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </View>
  );
}
