/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InputdataOverridesProps = {
    Inputdata?: PrimitiveOverrideProps<ViewProps>;
    "Label area"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 12"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type InputdataProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: InputdataOverridesProps | undefined | null;
}>;
export default function Inputdata(props: InputdataProps): React.ReactElement;
