import { NoteModel } from "@/models/NoteModel";
import { createContext } from "react";

export const NotesContext = createContext<NoteModel[]>([
    {
        id:1,
        title: "React Performance Optimization",
        badges: ["React", "Optimization", "Tips"],
        date: new Date(2024, 9, 29),
        content:"React Performance Optimization"
      },
      {
        id:2,
        title: "Understanding Async/Await",
        badges: ["JavaScript", "Async", "ES6"],
        date: new Date(2024, 9, 30),
        content:"React Performance Optimization"
      },
      {
        id:3,
        title: "Advanced React Hooks",
        badges: ["React", "Hooks", "API"],
        date: new Date(2024, 10, 1),
        content:"React Performance Optimization"
      },
      {
        id:4,
        title: "React Context API",
        badges: ["React", "Context API", "State Management"],
        date: new Date(2024, 10, 2),
        content:"React Performance Optimization"
      },
      {
        id:5,
        title: "React Router v6",
        badges: ["React", "Router", "Navigation"],
        date: new Date(2024, 10, 3),
        content:"React Performance Optimization"
      },
      {
        id:6,
        title: "React Redux",
        badges: ["React", "Redux", "State Management"],
        date: new Date(2024, 10, 4),
        content:"React Performance Optimization"
      },
      {
        id:7,
        title: "React Redux",
        badges: ["React", "Redux", "State Management"],
        date: new Date(2024, 10, 4),
        content:"React Performance Optimization"
      },
      {
        id:8,
        title: "React Redux",
        badges: ["React", "Redux", "State Management"],
        date: new Date(2024, 10, 4),
        content:"React Performance Optimization"
      },
      {
        id:9,
        title: "React Redux",
        badges: ["React", "Redux", "State Management"],
        date: new Date(2024, 10, 4),
        content:"React Performance Optimization"
      },
      
])


