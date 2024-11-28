import Header from "@/components/ui/commons/header/Header";
import NoteComponent from "@/components/ui/commons/note/NoteComponent";
import { NoteModel } from "@/models/NoteModel";

export default function AllNotesPage() {
  const notes: NoteModel[] = [
    {
      title: "React Performance Optimization",
      badges: ["React", "Optimization", "Tips"],
      date: new Date(2024, 9, 29),
    },
    {
      title: "Understanding Async/Await",
      badges: ["JavaScript", "Async", "ES6"],
      date: new Date(2024, 9, 30),
    },
    {
      title: "Understanding Async/Await",
      badges: ["JavaScript", "Async", "ES6"],
      date: new Date(2024, 9, 30),
    },
    {
      title: "Understanding Async/Await",
      badges: ["JavaScript", "Async", "ES6"],
      date: new Date(2024, 9, 30),
    },
    {
      title: "Understanding Async/Await",
      badges: ["JavaScript", "Async", "ES6"],
      date: new Date(2024, 9, 30),
    },
    {
      title: "Understanding Async/Await",
      badges: ["JavaScript", "Async", "ES6"],
      date: new Date(2024, 9, 30),
    },
    {
      title: "Understanding Async/Await",
      badges: ["JavaScript", "Async", "ES6"],
      date: new Date(2024, 9, 30),
    },
    {
      title: "Understanding Async/Await",
      badges: ["JavaScript", "Async", "ES6"],
      date: new Date(2024, 9, 30),
    },
    {
      title: "Understanding Async/Await",
      badges: ["JavaScript", "Async", "ES6"],
      date: new Date(2024, 9, 30),
    },
    {
      title: "Understanding Async/Await",
      badges: ["JavaScript", "Async", "ES6"],
      date: new Date(2024, 9, 30),
    },
  ];

  return ( 
  <main>
    <Header/>
    <section className="p-4">
      <h2 className="text-2xl md:text-3xl lg:text-2xl font-bold">All Notes</h2>
      <ul className="mt-6">
      {notes.map((note, index) => (
        <NoteComponent key={index} note={note} />
      ))}

      </ul>
    </section>
  </main>
  )

}
