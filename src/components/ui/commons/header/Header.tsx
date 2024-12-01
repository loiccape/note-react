
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Settings } from "lucide-react"
export default function Header() {
    return (
        <header className="sticky top-0 z-50  flex px-12 py-3 items-center justify-between border-2 bg-white">
        <h1 className="text-3xl font-bold lg:hidden">LOGO</h1>
        <h1 className="hidden lg:block text-3xl font-bold">All Notes</h1>
        <div className="lg:flex items-center w-1/2 justify-end hidden">
          <div className="flex items-center border-2 border-slate-100 p-2 rounded-lg w-4/6 mr-6">
            <Search className="w-4" />
            <Input
              placeholder="Search by title, content, or tags…"
              className="border-none border-0 focus:ring-0 p-2 ml-2"
            />
          </div>
      
          <Settings />
        </div>
      </header>
      
    )
}
