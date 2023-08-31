/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function CreateNewProjectButton(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="250px"
      height="50px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "CreateNewProjectButton")}
      {...rest}
    >
      <View
        width="250px"
        height="50px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "Rectangle 1")}
      ></View>
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
        width="261px"
        height="41px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="calc(50% - 20.5px - 0.5px)"
        left="-6px"
        right="-5px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Create a new Project "
        {...getOverrideProps(overrides, "Create a new Project")}
      ></Text>
    </View>
  );
}
