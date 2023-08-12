/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextFieldProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EToComponentOverridesProps = {
    EToComponent?: PrimitiveOverrideProps<ViewProps>;
    EstimateETo?: PrimitiveOverrideProps<FlexProps>;
    Form?: PrimitiveOverrideProps<ViewProps>;
    CalculateButton?: PrimitiveOverrideProps<ButtonProps>;
    Radiation?: PrimitiveOverrideProps<TextFieldProps>;
    Tmin?: PrimitiveOverrideProps<TextFieldProps>;
    Tmed?: PrimitiveOverrideProps<TextFieldProps>;
    Tmax?: PrimitiveOverrideProps<TextFieldProps>;
    SaveButton?: PrimitiveOverrideProps<ButtonProps>;
    ETo?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EToComponentProps = React.PropsWithChildren<Partial<ViewProps> & {
    ETo?: Number;
} & {
    overrides?: EToComponentOverridesProps | undefined | null;
}>;
export default function EToComponent(props: EToComponentProps): React.ReactElement;
