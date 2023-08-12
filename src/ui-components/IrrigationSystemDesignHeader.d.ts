/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { UserDataProps } from "./UserData";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IrrigationSystemDesignHeaderOverridesProps = {
    IrrigationSystemDesignHeader?: PrimitiveOverrideProps<ViewProps>;
    Evapotranspiration?: PrimitiveOverrideProps<TextProps>;
    SignOutButton?: PrimitiveOverrideProps<ButtonProps>;
    UserData?: UserDataProps;
} & EscapeHatchProps;
export declare type IrrigationSystemDesignHeaderProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: IrrigationSystemDesignHeaderOverridesProps | undefined | null;
}>;
export default function IrrigationSystemDesignHeader(props: IrrigationSystemDesignHeaderProps): React.ReactElement;
