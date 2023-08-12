/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ProjectProfileProps } from "./ProjectProfile";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectProfileCollectionOverridesProps = {
    ProjectProfileCollection?: PrimitiveOverrideProps<CollectionProps>;
    ProjectProfile?: ProjectProfileProps;
} & EscapeHatchProps;
export declare type ProjectProfileCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => ProjectProfileProps;
} & {
    overrides?: ProjectProfileCollectionOverridesProps | undefined | null;
}>;
export default function ProjectProfileCollection(props: ProjectProfileCollectionProps): React.ReactElement;
