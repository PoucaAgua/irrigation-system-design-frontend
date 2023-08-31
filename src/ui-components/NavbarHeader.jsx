/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
import SignOutButton from "./SignOutButton";
import UserData from "./UserData";
export default function NavbarHeader(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="474px"
      direction="row"
      width="1472px"
      height="120px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="14px 44px 14px 120px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "NavbarHeader")}
      {...rest}
    >
      <Flex
        padding="0px 0px 0px 0px"
        width="417px"
        height="34px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Logo")}
      >
        <Text
          fontFamily="Inter"
          fontSize="32px"
          fontWeight="500"
          color="rgba(0,0,0,1)"
          lineHeight="32px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="417px"
          height="34px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="calc(50% - 17px - 0px)"
          left="0px"
          right="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="IrrigationSystemDesign&#xA;"
          {...getOverrideProps(overrides, "IrrigationSystemDesign")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="442px"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 104px 0px 104px"
        {...getOverrideProps(overrides, "Frame")}
      >
        <SignOutButton
          width="196.43px"
          height="92px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "SignOutButton")}
        ></SignOutButton>
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 2")}
        >
          <UserData
            display="flex"
            gap="0"
            direction="column"
            width="96px"
            height="82px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "UserData")}
          ></UserData>
        </Flex>
      </Flex>
    </Flex>
  );
}
