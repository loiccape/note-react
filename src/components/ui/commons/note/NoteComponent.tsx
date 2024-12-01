import { Badge } from "@/components/ui/badge";
import { NoteModel } from "@/models/NoteModel";
import { useNote } from "@/hooks/NoteContext"; // Importation du hook personnalisé pour gérer la sélection de la note
import { useNavigate } from "react-router-dom"; // Importation de `useNavigate` pour la navigation
import { useMediaQuery } from "@/hooks/useMediaQuerY"; // Importation du hook personnalisé pour détecter la taille de l'écran

type NoteComponentProps = {
  note: NoteModel;
  isSelected: boolean;
  onSelect: () => void;
};

export default function NoteComponent({ note, isSelected, onSelect }: NoteComponentProps) {

  // Hook pour définir la note sélectionnée
  const { setSelectedNote } = useNote();

  const navigate = useNavigate();

  // Détecte la taille de l'écran
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  // Formatage de la date de la note
  const formattedDate = note.date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });


  const handleClick = () => {

    // Définit la note sélectionnée
    setSelectedNote(note);
    
    // Utilisation de la fonction onSelect pour mettre à jour la note sélectionnée 
    onSelect(); 
    if (!isLargeScreen) {

      // Si l'écran n'est pas un lg, change de page
      navigate(`/note`);
    }
  };

  return (
    <li 
      className={`border-b border-gray-200 pb-4 mt-2 cursor-pointer ${isSelected ? "bg-gray-200" : ""}`} 
      onClick={handleClick}
    >
      <p className="text-4lg md:text-2xl lg:text-1xl font-bold">{note.title}</p>
      <ul className="my-2">
        <li className="flex gap-1">
          {note.badges.map((badge, index) => (
            <Badge key={index}>{badge}</Badge>
          ))}
        </li>
      </ul>
      <p>{formattedDate}</p>
    </li>
  );
}
