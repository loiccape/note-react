import { useNote } from "@/hooks/NoteContext";
import { ChevronLeft, Clock, Folder, Tag, Trash } from "lucide-react";

export default function NoteDetailPage() {
  const selectedNote = useNote();

  // Vérifier si une note est sélectionnée
  if (!selectedNote || !selectedNote.selectedNote) {
    return null;
  }

  // Formatter la date de la note sélectionnée
  const formattedDate = new Date(selectedNote.selectedNote.date).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <section className="m-3 w-full">
      {/* Barre supérieure */}
      <div className="flex items-center lg:hidden pb-3 justify-between text-slate-600 border-b-2 md:h-16 md:text-2xl">
        <div className="flex">
          <ChevronLeft className="mr-1 w-4 md:w-8 my-auto" />
          <p>Go Back</p>
        </div>

        <div className="flex w-2/3 justify-around md:w-1/2">
          <Trash className="w-4 md:w-8 my-auto" />
          <Folder className="w-4 md:w-8 my-auto" />
          <p>Cancel</p>
          <p className="text-blue-500">Save Note</p>
        </div>
      </div>

      {/* Contenu de la note */}
      <h1 className="text-2xl font-bold mt-4">{selectedNote.selectedNote.title}</h1>
      <div className="mt-6 flex text-lg">
        <div className="flex w-1/3 lg:w-1/6">
          <Tag className="w-4 mr-2 md:w-8 my-auto" />
          <p>Tags</p>
        </div>
        <p>{selectedNote.selectedNote.badges?.join(", ")}</p>
      </div>
      <div className="mt-3 flex border-b-2 pb-8 text-lg">
        <div className="flex w-1/3 lg:w-1/6">
          <Clock className="w-4 mr-2 md:w-8 my-auto" />
          <p>Last edited</p>
        </div>
        <p>{formattedDate}</p>
      </div>

      <p className="mt-3">{selectedNote.selectedNote.content}</p>
    </section>
  );
}
