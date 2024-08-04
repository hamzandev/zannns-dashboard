import {Button, Separator} from "@/components/ui";
import {
  IconArchive,
  IconFiles,
  IconGrid4,
  IconHamburger,
  IconHome2,
  IconHome5,
  IconKey,
  IconLogout,
  IconPeople,
  IconServerStack,
  IconSettings,
} from "@irsyadadl/paranoid";
import Link from "next/link";
import AppLogo from "@/components/app-logo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import LogoutButton from "@/components/custom/logout-button";

interface LinkMenu {
  label?: string;
  href?: string;
  icon?: React.ReactNode;
  items?: Partial<LinkMenu>[] | null;
}

export const linkMenus: LinkMenu[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <IconHome5 />,
    items: null,
  },
  {
    label: "Management",
    items: [
      {
        label: "Products",
        href: "/products",
        icon: <IconGrid4 />,
      },
      {
        label: "Categories",
        href: "/categories",
        icon: <IconServerStack />,
      },
    ],
  },
  {
    label: "Advanced",
    items: [
      {
        label: "Users",
        href: "/users",
        icon: <IconPeople />,
      },
      {
        label: "Roles",
        href: "/roles",
        icon: <IconKey />,
      },
    ],
  },
  {
    label: "Archives",
    href: "/archives",
    icon: <IconArchive />,
    items: null,
  },
  {
    label: "Reports",
    href: "/reports",
    icon: <IconFiles />,
    items: null,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: <IconSettings />,
    items: null,
  },
];

export default function Sidebar() {
  return (
    <aside className="md:w-2/12 border-e border-e-muted justify-between gap-3 md:flex hidden flex-col px-3 py-4 sticky inset-y-0 h-screen">
      <section id="top">
        <AppLogo />
        <Separator className="my-3" />
        <div className="flex flex-col space-y-2">
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
      </section>
      <section id="bottom">
        <Separator className="my-3" />
        <LogoutButton />
      </section>
    </aside>
  );
}

export function MenuLink({menu}: {menu: Partial<LinkMenu>}) {
  return (
    <Link
      href={menu.href as string}
      className="flex p-2 rounded-md hover:bg-primary/20 items-center gap-2 w-full">
      {menu.icon}
      <span className="capitalize">{menu.label}</span>
    </Link>
  );
}
