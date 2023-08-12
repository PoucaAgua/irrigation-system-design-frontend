/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Text, View } from "@aws-amplify/ui-react";
import UserData from "./UserData";
export default function IrrigationSystemDesignHeader(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1218px"
      height="97px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(133,199,212,0.5)"
      {...getOverrideProps(overrides, "IrrigationSystemDesignHeader")}
      {...rest}
    >
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
        width="150.74px"
        height="46.66px"
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
      <Button
        width="88px"
        height="27px"
        position="absolute"
        top="35px"
        left="1024px"
        size="large"
        isDisabled={false}
        variation="primary"
        children="SignOut"
        {...getOverrideProps(overrides, "SignOutButton")}
      ></Button>
      <UserData
        display="flex"
        gap="0"
        direction="column"
        width="71px"
        height="71px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="13px"
        left="1135px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "UserData")}
      ></UserData>
    </View>
  );
}
