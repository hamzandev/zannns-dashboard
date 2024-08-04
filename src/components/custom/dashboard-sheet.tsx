"use client";

import React from "react";

import {
  Avatar,
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
  IconLineChart6,
  IconLock,
  IconLogout,
} from "@irsyadadl/paranoid";
import CmdPalette from "./cmd-palette";
import Link from "next/link";
import {linkMenus, MenuLink} from "@/app/(dashboard-area)/dashboard/sidebar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function DashboardSheet() {
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
          <SheetHeader className="flex items-center gap-2">
            <Avatar />
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
            onClick={() => setOpen(false)}
            className="flex flex-col space-y-2">
            <span className="font-semibold text-muted-fg uppercase text-xs">
              Links & Menus
            </span>
            {linkMenus.map((menu, index) =>
              menu.items ? (
                <Accordion className="mx-2">
                  <AccordionItem currentId={1}>
                    <AccordionTrigger className="text-xs uppercase">
                      {menu.label}
                    </AccordionTrigger>
                    <AccordionContent className="bg-muted rounded-lg px-2 pt-1 pb-2">
                      {menu.items.map((item, i) => (
                        <MenuLink menu={item} key={"nested " + i++} />
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ) : (
                <MenuLink menu={menu} key={index} />
              )
            )}
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
