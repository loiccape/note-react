import { useState } from "react";
import { useNavigate } from "react-router-dom";
//hooks imports
import { useNotes } from "@/hooks/NotesContext";
import { useMediaQuery } from "@/hooks/useMediaQuerY";

//components imports
import Header from "@/components/ui/commons/header/Header";
import NoteComponent from "@/components/ui/commons/note/NoteComponent";
import NoteDetailPage from "./NoteDetailPage";

//Shadcn imports
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

//icons imports
import {Folder, Trash } from "lucide-react";

export default function AllNotesPage() {
  //navigation
  const navigate = useNavigate();

  // Gestion des notes
  const { notes } = useNotes();

  // Initialisation de la note sélectionnée sur la première note du tableau (index 0)
  const [selectedNoteId, setSelectedNoteId] = useState<number | null>(notes.length > 0 ? notes[0].id : null);

  // Vérification de la taille de l'écran
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  const handleNewNoteButton = () => {
    navigate("/new-note");
  }

  return (
    <main className="max-w-screen overflow-hidden">
      <Header />
      <div className="flex flex-col lg:flex-row px-6 lg:px-12 w-full">
        <section className="lg:w-1/5">
          <h1 className="text-2xl mt-6 font-bold lg:hidden">All Notes</h1>
          <Button className="w-full h-12 mt-4 hidden lg:block" onClick={handleNewNoteButton}>+ Create New Note</Button>
          <button onClick={handleNewNoteButton} className="fixed bottom-4 right-10 rounded-full bg-blue-600 w-10 h-10  items-center flex text-white justify-center font-bold z-10"><span>+</span></button>
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

              <NoteDetailPage />

              <div className="border-l-2 flex flex-col justify-between h-full flex-1">
                <div className="p-4 flex flex-col w-full ">
                  <Button className="w-full border bg-white text-black h-12"><Trash/>Delete Note</Button>
                  <Button className="w-full border bg-white text-black mt-4 h-12"><Folder/>Archive Note</Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
