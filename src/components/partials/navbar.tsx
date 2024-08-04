import Link from "next/link";
import {Button, buttonStyles} from "@/components/ui";
import {ThemeSwitcher} from "@/components/theme-switcher";
import {IconBrandGithub, IconDashboard, IconLineChart6, IconLock} from "@irsyadadl/paranoid";
import {Separator} from "@/components/ui/separator";
import NavbarSheet from "@/components/custom/navbar-sheet";
import React from "react";
import AppLogo from "../app-logo";
import UserDropdown from "../custom/user-dropdown";

export default function Navbar() {

  const loggedIn = true;

  return (
    <header className="sticky top-0 z-10 bg-background/80 backdrop-blur">
      <nav className="py-4 border-b border-fg/15">
        <div className="container mx-auto flex md:justify-normal justify-between items-center">
          <div className="md:text-lg font-bold md:w-2/12">
            <AppLogo/>
          </div>
          <div className="hidden md:w-7/12 md:flex items-center space-x-10">
            {Array.from({length: 5}).map((_, index) => (
              <Link key={`nav-link-${index + 1}`} href="/">
                Menu
              </Link>
            ))}
          </div>
          <div className="md:w-3/12 flex justify-end md:space-x-2 space-x-1">
            <Button size="square-petite" appearance="outline">
              <IconBrandGithub />
            </Button>
            <ThemeSwitcher />
            <Separator
              orientation="vertical"
              className="mx-2 md:inline-block hidden"
            />
            {loggedIn ? (
              <UserDropdown/>
            ) : (
              <Button className="md:flex hidden">
                Sign up
                <IconLock />
              </Button>
            )}
            <NavbarSheet />
          </div>
        </div>
      </nav>
    </header>
  );
}
