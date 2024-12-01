import Header from "@/components/ui/commons/header/Header";
import NoteComponent from "@/components/ui/commons/note/NoteComponent";
import { useNotes } from "@/hooks/NotesContext";
import { useMediaQuery } from "@/hooks/useMediaQuerY";
import NoteDetailPage from "./NoteDetailPage";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function AllNotesPage() {
  // Gestion des notes
  const { notes } = useNotes();

  // Initialisation de la note sélectionnée sur la première note du tableau (index 0)
  const [selectedNoteId, setSelectedNoteId] = useState<number | null>(notes.length > 0 ? notes[0].id : null);

  // Vérification de la taille de l'écran
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  return (
    <main className="max-w-screen overflow-hidden">
      <Header />
      <div className="flex flex-col lg:flex-row px-6 lg:px-12 w-full">
        <section className="lg:w-1/5">
          <h1 className="text-2xl mt-6 font-bold lg:hidden">All Notes</h1>
          <Button className="w-full h-12 mt-4">Create New Note</Button>
          <ScrollArea className="mt-4 h-screen">
            <ul>
              {notes.map((note) => (
                <NoteComponent
                  key={note.id}
                  note={note}
                  isSelected={note.id === selectedNoteId}
                  onSelect={() => setSelectedNoteId(note.id)}
                />
              ))}
            </ul>
          </ScrollArea>
        </section>

        {isLargeScreen && (
          <div className="ml-6 flex-1">
            <div className="flex h-full">
              {/* Page de détail */}
              <NoteDetailPage />

              {/* Colonne avec bordure */}
              <div className="border-l-2 flex flex-col justify-between h-full">
                <div className="p-4">
                  <Button>Archive Note</Button>
                  <Button>Delete Note</Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
