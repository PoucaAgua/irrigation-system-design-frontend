/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
import UpdateButton from "./UpdateButton";
import DeleteBuutton from "./DeleteBuutton";
export default function ProjectInMainView(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1250px"
      height="53px"
      display="flex"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ProjectInMainView")}
      {...rest}
    >
      <UpdateButton
        display="flex"
        gap="10px"
        direction="row"
        width="132.01px"
        height="36.04px"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        position="absolute"
        top="15.27%"
        bottom="16.73%"
        left="75.91%"
        right="13.53%"
        borderRadius="4px"
        padding="0px 11px 0px 11px"
        backgroundColor="rgba(112,185,86,1)"
        {...getOverrideProps(overrides, "UpdateButton")}
      ></UpdateButton>
      <DeleteBuutton
        display="flex"
        gap="10px"
        direction="row"
        width="132.01px"
        height="36.04px"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        position="absolute"
        top="15.27%"
        bottom="16.73%"
        left="87.38%"
        right="2.06%"
        borderRadius="4px"
        padding="2px 9px 2px 9px"
        backgroundColor="rgba(254,91,91,1)"
        {...getOverrideProps(overrides, "DeleteButton")}
      ></DeleteBuutton>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="32px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="91.22px"
        height="32.38px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="22.91%"
        bottom="16%"
        left="0.56%"
        right="92.14%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Project 1"
        {...getOverrideProps(overrides, "ProjectName")}
      ></Text>
    </View>
  );
}
