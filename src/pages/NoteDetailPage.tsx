import { useNote } from "@/hooks/NoteContext";
import { ChevronLeft, Clock, Folder, Tag, Trash } from "lucide-react";
export default function NoteDetailPage() {
  const selectedNote = useNote(); // Importer le hook personnalisé

  const formattedDate = selectedNote.selectedNote?.date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  return (
    <section className="m-3">
      <div className="flex lg:hidden  pb-2 justify-between text-slate-600  border-b-2">
        <div className="flex">

          <ChevronLeft className="mr-1" />
          <p>Go Back</p>
        </div>
        <div className="flex w-1/2 justify-around">

          <Trash className="w-4" />
          <Folder className="w-4" />
          <p className="">Cancel</p>
          <p className="text-blue-500">Save Note</p>
        </div>
      </div>
      <h1 className="text-3xl font-bold mt-2">{selectedNote.selectedNote?.title}</h1>
      <div className="mt-4 flex ">
        <div className="flex w-1/3">
          <Tag className="w-4 mr-2"/>
          <p>Tags</p>
        </div>       
      <p>{selectedNote.selectedNote?.badges.join(", ")}</p>
      </div>
      <div className="mt-4 flex border-b-2 pb-5">
        <div className="flex w-1/3">
          <Clock className="w-4 mr-2"/>
          <p>Last edited</p>
        </div>       
      <p>{formattedDate}</p>
      </div>

      <p className="mt-3">{selectedNote.selectedNote?.content}</p>
    </section>
  )
}
