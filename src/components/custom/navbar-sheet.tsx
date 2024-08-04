"use client";

import React from "react";

import {
  Button,
  buttonStyles,
  Separator,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetTitle,
} from "@/components/ui";
import {
  IconAlignmentRight,
  IconHome2,
  IconLineChart6,
  IconLock,
  IconLogout,
} from "@irsyadadl/paranoid";
import CmdPalette from "./cmd-palette";
import Link from "next/link";

export default function NavbarSheet() {
  const [open, setOpen] = React.useState(false);
  const loggedIn = true;
  return (
    <>
      <Button
        appearance="outline"
        size="square-petite"
        className="md:hidden"
        onPress={() => setOpen(true)}>
        <IconAlignmentRight />
      </Button>
      <SheetOverlay isOpen={open} onOpenChange={() => setOpen(false)}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Next Dashboard</SheetTitle>
            <SheetDescription>hamzankechil@gmail.com</SheetDescription>
          </SheetHeader>
          <CmdPalette />
          <Separator className="my-5" />
          <div className="space-y-2 grid">
            {loggedIn ? (
              <Link
                href={"/dashboard"}
                className={buttonStyles({appearance: "outline"})}>
                <IconLineChart6 />
                Dashboard
              </Link>
            ) : (
              <Link href={""} className={buttonStyles()}>
                Sign Up
                <IconLock />
              </Link>
            )}
          </div>
          <Separator className="my-5" />
          <div
            className="flex flex-col space-y-2"
            onClick={() => setOpen(false)}>
            <span className="font-semibold text-muted-fg uppercase text-xs ms-1 mb-3">
              Links & Menus
            </span>
            {Array.from({length: 5}).map((_, index) => (
              <Link
                href={"/"}
                key={`nav-menu-${index + 1}`}
                className="flex px-3 py-2 rounded-md hover:bg-fg/10 items-center gap-2 border border-muted">
                <IconHome2 />
                <span>Home</span>
              </Link>
            ))}
          </div>
          <Separator className="my-5" />
          <SheetFooter className="self-end place-self-end">
            <Link href={""} className={buttonStyles({intent: "danger"})}>
              Logout
              <IconLogout />
            </Link>
          </SheetFooter>
        </SheetContent>
      </SheetOverlay>
    </>
  );
}
