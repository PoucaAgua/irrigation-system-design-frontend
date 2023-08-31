/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { SignOutButtonProps } from "./SignOutButton";
import { UserDataProps } from "./UserData";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavbarHeaderOverridesProps = {
    NavbarHeader?: PrimitiveOverrideProps<FlexProps>;
    Logo?: PrimitiveOverrideProps<FlexProps>;
    IrrigationSystemDesign?: PrimitiveOverrideProps<TextProps>;
    Frame?: PrimitiveOverrideProps<FlexProps>;
    SignOutButton?: SignOutButtonProps;
    "Frame 2"?: PrimitiveOverrideProps<FlexProps>;
    UserData?: UserDataProps;
} & EscapeHatchProps;
export declare type NavbarHeaderProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavbarHeaderOverridesProps | undefined | null;
}>;
export default function NavbarHeader(props: NavbarHeaderProps): React.ReactElement;
