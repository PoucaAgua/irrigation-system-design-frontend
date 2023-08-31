/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ProjectInMainViewProps } from "./ProjectInMainView";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectInMainViewCollectionOverridesProps = {
    ProjectInMainViewCollection?: PrimitiveOverrideProps<CollectionProps>;
    ProjectInMainView?: ProjectInMainViewProps;
} & EscapeHatchProps;
export declare type ProjectInMainViewCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => ProjectInMainViewProps;
} & {
    overrides?: ProjectInMainViewCollectionOverridesProps | undefined | null;
}>;
export default function ProjectInMainViewCollection(props: ProjectInMainViewCollectionProps): React.ReactElement;
