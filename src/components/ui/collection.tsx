'use client'

import { Collection as CollectionPrimitive } from "react-aria-components";

export default function Collection({
  children,
  items,
}: {
  children: React.ReactNode;
  items: any & {children: React.ReactNode};
}) {
  return <CollectionPrimitive>{children}</CollectionPrimitive>;
}
