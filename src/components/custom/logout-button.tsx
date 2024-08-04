'use client'

import { toast } from "sonner";
import { Button } from "../ui";
import { IconLogout } from "@irsyadadl/paranoid";

export default function LogoutButton() {
  return (
    <Button
      onPress={() => toast.success("Anda berhasil keluar. Terima kasih.")}
      className="w-full"
      intent="danger">
      Logout
      <IconLogout />
    </Button>
  );
}
