/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, TextField, View } from "@aws-amplify/ui-react";
export default function EToComponent(props) {
  const { ETo = 0, overrides, ...rest } = props;
  return (
    <View
      width="459px"
      height="416px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(239,240,240,1)"
      {...getOverrideProps(overrides, "EToComponent")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="column"
        width="364px"
        height="286.39px"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="15.58%"
        bottom="15.58%"
        left="calc(50% - 182px - -0.5px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "EstimateETo")}
      >
        <View
          width="335px"
          height="274px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Form")}
        >
          <Button
            width="100px"
            height="30px"
            position="absolute"
            padding="7px 9px 7px 9px"
            top="220px"
            left="173px"
            backgroundColor="rgba(13,26,38,1)"
            size="large"
            isDisabled={false}
            variation="primary"
            children="Calculate"
            {...getOverrideProps(overrides, "CalculateButton")}
          ></Button>
          <TextField
            width="150px"
            height="90px"
            label="Radiation"
            placeholder="2,5"
            position="absolute"
            top="90px"
            left="178px"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "Radiation")}
          ></TextField>
          <TextField
            width="150px"
            height="90px"
            label="Tmin"
            placeholder="30"
            position="absolute"
            top="4px"
            left="178px"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "Tmin")}
          ></TextField>
          <TextField
            width="150px"
            height="90px"
            label="Tmed"
            placeholder="70"
            position="absolute"
            top="90px"
            left="0px"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "Tmed")}
          ></TextField>
          <TextField
            width="150px"
            height="90px"
            label="Tmax"
            placeholder="100"
            position="absolute"
            top="0px"
            left="0px"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "Tmax")}
          ></TextField>
          <Button
            width="70px"
            height="30px"
            position="absolute"
            top="220px"
            left="284px"
            backgroundColor="rgba(67,168,84,1)"
            size="large"
            isDisabled={false}
            variation="primary"
            children="save"
            {...getOverrideProps(overrides, "SaveButton")}
          ></Button>
        </View>
      </Flex>
      <TextField
        width="150px"
        height="90px"
        label="ETo"
        placeholder="15"
        position="absolute"
        top="240px"
        left="63px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "ETo")}
      ></TextField>
    </View>
  );
}
