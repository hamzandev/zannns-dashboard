// "use client";

// import {Select, SelectItem, SelectItemDetails} from "@/components/ui";
// import {IconBrandNextjs} from "@irsyadadl/paranoid";
// import Link from "next/link";

// export default function Logo() {
//   return (
//     <Select
//     className="border-none"
//       /* @ts-ignore */
//       placeholder={
//         <>
//           <Link href="/" className="flex items-center font-semibold text-primary space-x-1">
//             <IconBrandNextjs className="w-8 h-8" />
//             <span>Next Dashboard</span>
//           </Link>
//         </>
//       }
//       items={roles}>
//       {(item: any) => (
//         <SelectItem id={item.id} textValue={item.name}>
//           <SelectItemDetails label={item.name} description={item.description} />
//         </SelectItem>
//       )}
//     </Select>
//   );
// }

// const roles = [
//   {id: 1, name: "Admin", description: "Has full access to all resources"},
//   {
//     id: 2,
//     name: "Editor",
//     description: "Can edit content but has limited access to settings",
//   },
//   {
//     id: 3,
//     name: "Viewer",
//     description: "Can view content but cannot make changes",
//   },
//   {
//     id: 4,
//     name: "Contributor",
//     description: "Can contribute content for review",
//   },
//   {
//     id: 5,
//     name: "Guest",
//     description: "Limited access, mostly for viewing purposes",
//   },
// ];

"use client";

import React from "react";

import {
  IconBag,
  IconBrandNextjs,
  IconCommandRegular,
  IconDashboard,
  IconDeviceDesktop,
  IconHeadphones,
  IconHeart,
  IconHome,
  IconLineChart6,
  IconLogout,
  IconMoon,
  IconPerson,
  IconSettings,
  IconSun,
} from "@irsyadadl/paranoid";
import {useTheme} from "next-themes";
import {
  Avatar,
  Menu,
  MenuContent,
  MenuItem,
  MenuSection,
  MenuSeparator,
  MenuTrigger,
  SubmenuTrigger,
} from "@/components/ui";

export default function UserDropdown() {
  const {resolvedTheme, setTheme} = useTheme();
  return (
    <Menu>
      <MenuTrigger>
        <Avatar />
      </MenuTrigger>
      <MenuContent placement="bottom" showArrow className="min-w-64">
        <MenuSection>
          <MenuItem href="/">
            <IconHome />
            Home
          </MenuItem>
          <MenuItem href="/dashboard">
            <IconLineChart6 />
            Dashboard
          </MenuItem>
        </MenuSection>
        <MenuSeparator />

        <MenuSeparator />
        <SubmenuTrigger>
          <MenuItem>
            {resolvedTheme === "light" ? (
              <IconSun />
            ) : resolvedTheme === "dark" ? (
              <IconMoon />
            ) : (
              <IconDeviceDesktop />
            )}
            Switch theme
          </MenuItem>
          <MenuContent>
            <MenuItem onAction={() => setTheme("system")}>
              <IconDeviceDesktop /> System
            </MenuItem>
            <MenuItem onAction={() => setTheme("dark")}>
              <IconMoon /> Dark
            </MenuItem>
            <MenuItem onAction={() => setTheme("light")}>
              <IconSun /> Light
            </MenuItem>
          </MenuContent>
        </SubmenuTrigger>
        <MenuSeparator />
        <MenuItem href="/profile">
          <IconPerson />
          Profile
        </MenuItem>
        <MenuItem href="#logout">
          <IconLogout />
          Log out
        </MenuItem>
      </MenuContent>
    </Menu>
  );
}
