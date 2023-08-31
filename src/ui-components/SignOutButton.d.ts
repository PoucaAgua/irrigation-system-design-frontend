/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { InfoButtonProps } from "./InfoButton";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SignOutButtonOverridesProps = {
    SignOutButton?: PrimitiveOverrideProps<ViewProps>;
    SignOutButton3938537?: InfoButtonProps;
} & EscapeHatchProps;
export declare type SignOutButtonProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SignOutButtonOverridesProps | undefined | null;
}>;
export default function SignOutButton(props: SignOutButtonProps): React.ReactElement;
