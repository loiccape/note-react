import Header from "@/components/ui/commons/header/Header";
import NoteComponent from "@/components/ui/commons/note/NoteComponent";
import {NotesContext} from "@/hooks/NotesContext";
import { useContext } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuerY";
import NoteDetailPage from "./NoteDetailPage";
import { ScrollArea } from "@/components/ui/scroll-area"

export default function AllNotesPage() {
  
 const notes = useContext(NotesContext)
 const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  return ( 
  <main>
    <Header/>
    <div className="flex">

    <section className="p-4 w-screen lg:w-2/5">
      <h2 className="text-2xl md:text-3xl lg:text-2xl font-bold">All Notes</h2>
      {/* <ScrollArea > */}
<ul>

      <ScrollArea className="mt-6 h-screen">
      {notes?.map((note, index) => (
        <NoteComponent key={index} note={note}/>
      ))}

      </ScrollArea>
      </ul>
      {/* </ScrollArea> */}
    </section>

   {isLargeScreen && (
          <NoteDetailPage/>
        )}
      </div>
  </main>
  )

}
