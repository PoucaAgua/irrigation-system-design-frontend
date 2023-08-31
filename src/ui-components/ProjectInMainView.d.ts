/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
import { UpdateButtonProps } from "./UpdateButton";
import { DeleteBuuttonProps } from "./DeleteBuutton";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectInMainViewOverridesProps = {
    ProjectInMainView?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 8"?: PrimitiveOverrideProps<ViewProps>;
    UpdateButton?: UpdateButtonProps;
    DeleteButton?: DeleteBuuttonProps;
    ProjectName?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ProjectInMainViewProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ProjectInMainViewOverridesProps | undefined | null;
}>;
export default function ProjectInMainView(props: ProjectInMainViewProps): React.ReactElement;
