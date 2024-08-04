import {Button} from "@/components/ui";
import {IconChevronLeft} from "@irsyadadl/paranoid";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen">
      <h1 className="text-9xl font-extrabold">404</h1>
      <p className="text-xl text-muted-fg mb-3">Page Not Found</p>
      <Link href={"/"}>
        <Button size="large">
          <IconChevronLeft /> Back to Home
        </Button>
      </Link>
    </div>
  );
}
