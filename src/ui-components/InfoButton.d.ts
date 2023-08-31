/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InfoButtonOverridesProps = {
    InfoButton?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 16"?: PrimitiveOverrideProps<ViewProps>;
    Info?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type InfoButtonProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: InfoButtonOverridesProps | undefined | null;
}>;
export default function InfoButton(props: InfoButtonProps): React.ReactElement;
