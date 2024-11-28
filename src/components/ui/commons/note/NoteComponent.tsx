import { Badge } from "@/components/ui/badge";
import { NoteModel } from "@/models/NoteModel";

type NoteComponentProps = {
  note: NoteModel;
};

export default function NoteComponent({ note }: NoteComponentProps) {
    
  const formattedDate = note.date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <li className="border-b border-gray-200 pb-4 mt-2">
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
