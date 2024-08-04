import Navbar from "@/components/partials/navbar";
import React from "react";

export default function PublicAreaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="container mx-auto min-h-screen">{children}</main>
    </>
  );
}
