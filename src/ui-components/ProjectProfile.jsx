/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Badge, Flex, Text } from "@aws-amplify/ui-react";
export default function ProjectProfile(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="68px"
      direction="row"
      width="1100px"
      height="83.19px"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      borderRadius="10px"
      padding="30px 25px 30px 25px"
      backgroundColor="rgba(216,216,248,0.43)"
      {...getOverrideProps(overrides, "ProjectProfile")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="25px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="800px"
        height="30px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="ProjectName"
        {...getOverrideProps(overrides, "ProjectName")}
      ></Text>
      <Flex
        gap="8px"
        direction="row"
        width="200px"
        height="30px"
        justifyContent="flex-end"
        alignItems="flex-end"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Badges")}
      >
        <Badge
          width="unset"
          height="unset"
          backgroundColor="rgba(235,250,237,1)"
          shrink="0"
          size="default"
          variation="default"
          children="Update"
          {...getOverrideProps(overrides, "UpdateBadge")}
        ></Badge>
        <Badge
          width="unset"
          height="unset"
          backgroundColor="rgba(239,143,143,1)"
          shrink="0"
          size="default"
          variation="default"
          children="Delete"
          {...getOverrideProps(overrides, "DeleteBadge")}
        ></Badge>
      </Flex>
    </Flex>
  );
}
