import { useNote } from "@/hooks/NoteContext";
import { ChevronLeft, Clock, Folder, Tag, Trash } from "lucide-react";
import { useNotes } from "@/hooks/NotesContext";

export default function NoteDetailPage() {
  const { notes } = useNotes();
  const selectedNoteContext = useNote();

  // Si aucune note n'est sélectionnée, utiliser la première note comme défaut
  const selectedNote =
    selectedNoteContext.selectedNote || (notes.length > 0 ? notes[0] : null);

  // Si aucune note n'est disponible (liste vide), return message
  if (!selectedNote) {
    return <p className="text-center">No notes available</p>;
  }

  const formattedDate = new Date(selectedNote.date).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <section className="m-3 w-full lg:w-3/4 ">

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
      <h1 className="text-2xl font-bold mt-4">{selectedNote.title}</h1>
      <div className="mt-6 flex text-lg">
        <div className="flex w-1/3 lg:w-1/6">
          <Tag className="w-4 mr-2 md:w-8 my-auto" />
          <p>Tags</p>
        </div>
        <p>{selectedNote.badges?.join(", ")}</p>
      </div>
      <div className="mt-3 flex border-b-2 pb-8 text-lg">
        <div className="flex w-1/3 lg:w-1/6">
          <Clock className="w-4 mr-2 md:w-8 my-auto" />
          <p>Last edited</p>
        </div>
        <p>{formattedDate}</p>
      </div>

      <p className="mt-3">{selectedNote.content}</p>
    </section>
  );
}
