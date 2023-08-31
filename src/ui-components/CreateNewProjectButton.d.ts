/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateNewProjectButtonOverridesProps = {
    CreateNewProjectButton?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    "Create a new Project"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CreateNewProjectButtonProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: CreateNewProjectButtonOverridesProps | undefined | null;
}>;
export default function CreateNewProjectButton(props: CreateNewProjectButtonProps): React.ReactElement;
