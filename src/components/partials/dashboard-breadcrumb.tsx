import {IconHome, IconHome2} from "@irsyadadl/paranoid";
import {Breadcrumb, Breadcrumbs} from "../ui";

interface DashboardBreadcrumbProps {
  links?: {
    href: string;
    label: string;
  }[];
}

export default function DashboardBreadcrumb({links}: DashboardBreadcrumbProps) {
  return (
    <div className="space-y-2 px-2">
      <h1 className="text-3xl font-bold capitalize">
        {links?.[links.length - 1]?.label}
      </h1>
      <Breadcrumbs>
        <Breadcrumb href={""}>
          <IconHome />
        </Breadcrumb>
        {links?.map((link, index) => (
          <Breadcrumb key={index} href={link.href}>
            {link.label}
          </Breadcrumb>
        ))}
        <Breadcrumb>{links?.[links.length - 1]?.label}</Breadcrumb>
      </Breadcrumbs>
    </div>
  );
}
