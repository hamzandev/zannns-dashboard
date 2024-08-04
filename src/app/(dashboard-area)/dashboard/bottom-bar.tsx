import AppLogo from "@/components/app-logo";
import {ThemeSwitcher} from "@/components/theme-switcher";
import {Button} from "@/components/ui";
import {IconBrandGithub} from "@irsyadadl/paranoid";

export default function BottomBar() {
  return (
    <footer>
      <div className="flex justify-between items-center py-3 border-t border-s border-muted bg-background container mx-auto">
        <div className="flex">
          <AppLogo />
        </div>
        <div className="flex items-center space-x-2">
          <span>Copyright &copy; 2024</span>
          <Button
            size="square-petite"
            className="md:inline hidden"
            appearance="outline">
            <IconBrandGithub />
          </Button>
          <div className="md:inline hidden">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
}
