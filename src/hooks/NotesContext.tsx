import { createContext, useContext, useState, ReactNode } from "react";
import { NoteModel } from "@/models/NoteModel";

interface NotesContextType {
  notes: NoteModel[];
  addNote: (note: NoteModel) => void;
  removeNote: (id: number) => void;
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export const NotesProvider = ({ children }: { children: ReactNode }) => {
  const [notes, setNotes] = useState<NoteModel[]>([
    {
      id: 1,
      title: "React Performance Optimization",
      badges: ["React", "Optimization", "Tips"],
      date: new Date(2024, 9, 29),
      content: "React Performance Optimization",
    },
    {
      id: 2,
      title: "Understanding Async/Await",
      badges: ["JavaScript", "Async", "ES6"],
      date: new Date(2024, 9, 30),
      content: "Understanding Async/Await",
    },
    {
      id: 3,
      title: "CSS Flexbox Guide",
      badges: ["CSS", "Flexbox", "Layout"],
      date: new Date(2024, 10, 1),
      content: "A comprehensive guide to CSS Flexbox layout.",
    },
    {
      id: 4,
      title: "JavaScript Closures",
      badges: ["JavaScript", "Closures", "ES6"],
      date: new Date(2024, 10, 2),
      content: "Understanding closures in JavaScript and their practical uses.",
    },
    {
      id: 5,
      title: "TypeScript Basics",
      badges: ["TypeScript", "JavaScript", "Types"],
      date: new Date(2024, 10, 3),
      content: "A quick dive into TypeScript and its type system.",
    },
    {
      id: 6,
      title: "Git Best Practices",
      badges: ["Git", "Version Control", "Collaboration"],
      date: new Date(2024, 10, 4),
      content: "Best practices for using Git in team collaboration.",
    },
    {
      id: 7,
      title: "Understanding RESTful APIs",
      badges: ["API", "REST", "Backend"],
      date: new Date(2024, 10, 5),
      content: "Exploring the principles of RESTful APIs.",
    },
    {
      id: 8,
      title: "Vue.js Fundamentals",
      badges: ["Vue.js", "JavaScript", "Framework"],
      date: new Date(2024, 10, 6),
      content: "A beginner's guide to Vue.js and its core concepts.",
    },
    {
      id: 9,
      title: "Node.js for Backend Development",
      badges: ["Node.js", "Backend", "JavaScript"],
      date: new Date(2024, 10, 7),
      content: "How to use Node.js for building fast, scalable backend applications.",
    },
    {
      id: 10,
      title: "Introduction to Web Accessibility",
      badges: ["Accessibility", "Web", "UX"],
      date: new Date(2024, 10, 8),
      content: "Key concepts in making websites accessible to all users.",
    },
    {
      id: 11,
      title: "Testing in JavaScript with Jest",
      badges: ["JavaScript", "Testing", "Jest"],
      date: new Date(2024, 10, 9),
      content: "How to set up and use Jest for unit testing in JavaScript.",
    },
    {
      id: 12,
      title: "Building Single Page Applications with React",
      badges: ["React", "SPA", "Web Development"],
      date: new Date(2024, 10, 10),
      content: "How to build scalable and maintainable single-page applications using React.",
    },
  ]);
  

  const addNote = (note: NoteModel) => setNotes((prevNotes) => [...prevNotes, note]);
  const removeNote = (id: number) =>
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));

  return (
    <NotesContext.Provider value={{ notes, addNote, removeNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error("useNotes must be used within a NotesProvider");
  }
  return context;
};
