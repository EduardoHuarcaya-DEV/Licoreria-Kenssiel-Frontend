"use client"
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  return router.replace("/dashboard/panel");
}
