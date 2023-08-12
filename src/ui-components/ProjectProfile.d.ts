/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectProfileOverridesProps = {
    ProjectProfile?: PrimitiveOverrideProps<FlexProps>;
    ProjectName?: PrimitiveOverrideProps<TextProps>;
    Badges?: PrimitiveOverrideProps<FlexProps>;
    UpdateBadge?: PrimitiveOverrideProps<BadgeProps>;
    DeleteBadge?: PrimitiveOverrideProps<BadgeProps>;
} & EscapeHatchProps;
export declare type ProjectProfileProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ProjectProfileOverridesProps | undefined | null;
}>;
export default function ProjectProfile(props: ProjectProfileProps): React.ReactElement;
