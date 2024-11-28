import { useNote } from "@/hooks/NoteContext";
import { ArrowLeft, Trash } from "lucide-react";
export default function NoteDetailPage() {
  const selectedNote = useNote(); // Importer le hook personnalisé

  return (
    <section>
      <div className="flex">
        <ArrowLeft/>
        <p>Go Back</p>
        <Trash/>
      </div>
        <p>{selectedNote.selectedNote?.id}</p>
        <p>{selectedNote.selectedNote?.title}</p>
        <p>{selectedNote.selectedNote?.content}</p>
        <p>{selectedNote.selectedNote?.date.toLocaleDateString()}</p>
        <p>{selectedNote.selectedNote?.badges.join(", ")}</p>
    </section>
  )
}
