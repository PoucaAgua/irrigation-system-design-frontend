/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import ProjectProfile from "./ProjectProfile";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Collection } from "@aws-amplify/ui-react";
export default function ProjectProfileCollection(props) {
  const { items, overrideItems, overrides, ...rest } = props;
  return (
    <Collection
      type="grid"
      isSearchable={true}
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={6}
      templateColumns="1fr 1fr 1fr"
      autoFlow="row"
      alignItems="center"
      justifyContent="center"
      items={items || []}
      {...getOverrideProps(overrides, "ProjectProfileCollection")}
      {...rest}
    >
      {(item, index) => (
        <ProjectProfile
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></ProjectProfile>
      )}
    </Collection>
  );
}
