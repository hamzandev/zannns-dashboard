import AppLogo from "@/components/app-logo";
import CmdPalette from "@/components/custom/cmd-palette";
import DashboardSheet from "@/components/custom/dashboard-sheet";
import UserDropdown from "@/components/custom/user-dropdown";
import {ThemeSwitcher} from "@/components/theme-switcher";

export default function Topbar() {
  return (
    <header
      id="topbar"
      className="px-3 z-10 sticky top-0 bg-background/80 backdrop-blur py-2 items-center flex justify-between">
      <div className="md:hidden block">
        <AppLogo />
      </div>
      <span className="md:flex hidden text-lg font-bold uppercase">
        👋 welcome back, John Doe!
      </span>
      <div className="md:flex hidden items-center space-x-2">
        <CmdPalette />
        <UserDropdown />
      </div>
      <div className="md:hidden block space-x-2">
        <ThemeSwitcher />
        <DashboardSheet />
      </div>
    </header>
  );
}
