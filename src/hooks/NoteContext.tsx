// src/contexts/NoteContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';
import { NoteModel } from '@/models/NoteModel';

interface NoteContextType {
  selectedNote: NoteModel | null;
  setSelectedNote: (note: NoteModel) => void;
}

const NoteContext = createContext<NoteContextType | undefined>(undefined);

export const NoteProvider = ({ children }: { children: ReactNode }) => {
  const [selectedNote, setSelectedNote] = useState<NoteModel | null>(null);

  return (
    <NoteContext.Provider value={{ selectedNote, setSelectedNote }}>
      {children}
    </NoteContext.Provider>
  );
};

export const useNote = () => {
  const context = useContext(NoteContext);
  if (!context) {
    throw new Error('useNote must be used within a NoteProvider');
  }
  return context;
};
