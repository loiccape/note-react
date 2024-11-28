
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Settings } from "lucide-react"
export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white flex px-12 pt-3 items-center justify-between">
        <h1 className="text-3xl font-bold">LOGO</h1>
        <div className="lg:flex items-center w-1/2 justify-end hidden">
          <div className="flex items-center border-2 border-slate-100 p-2 rounded-lg w-4/6 mr-6">
            <Search className="w-4" />
            <Input
              placeholder="Search by title, content, or tags…"
              className="border-none focus:ring-0 p-0 ml-2"
            />
          </div>
      
          <Settings />
        </div>
      </header>
      
    )
}
