import { NewMemoryForm } from "@/components/NewMemoryForm";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function NewMemory() {
  return <div className="flex flex-1 flex-col gap-4">
    <Link
      href="/"
      className="flex p-16 items-center gap-1 text-sm text-gray-200 hover:text-gray-100 transition-colors"
    >
      <ChevronLeft className="h-4 w-4" />
      voltar à timeline
    </Link>
    <NewMemoryForm />
  </div>
}