//import icons
import { ChevronLeft} from "lucide-react";

//import shadcn
import NewNoteForm from "@/components/ui/commons/form/NewNoteForm";

export default function NewNotePage() {


  return (
    <section className="m-3 w-full lg:w-3/4 ">

     
      <div className="flex items-center lg:hidden pb-3 justify-between text-slate-600 border-b-2 md:h-16 md:text-2xl">
        <div className="flex">
          <ChevronLeft className="mr-1 w-4 md:w-8 my-auto" />
          <p>Go Back</p>
        </div>

        <div className="flex w-2/3 justify-around md:w-1/2">
          <p>Cancel</p>
          <p className="text-blue-500">Save Note</p>
        </div>
      </div>

      <NewNoteForm/>
    </section>
  );
}

  

