import Header from "@/components/ui/commons/header/Header";
import NoteComponent from "@/components/ui/commons/note/NoteComponent";
import {NotesContext} from "@/hooks/NotesContext";
import { useContext } from "react";


export default function AllNotesPage() {
  
 const notes = useContext(NotesContext)
 
  return ( 
  <main>
    <Header/>
    <section className="p-4">
      <h2 className="text-2xl md:text-3xl lg:text-2xl font-bold">All Notes</h2>
      <ul className="mt-6">
      {notes?.map((note, index) => (
            <NoteComponent key={index} note={note}/>
          ))}

      </ul>
    </section>
  </main>
  )

}
