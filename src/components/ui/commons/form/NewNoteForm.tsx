"use client"

import { useForm } from "react-hook-form"

//import shadcn
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"





export default function NewNoteForm() {
  
  

    const formSchema = z.object({
        title: z.string().min(1, "Title is required."),
        tags: z
          .string()
          .refine(
            (tags) => tags.split(",").every((tag) => tag.trim() !== ""),
            "Each tag must be non-empty and separated by commas."
          ), // Les tags doivent être séparés par des virgules et non vides
        content: z
          .string()
          .optional() // Le contenu est optionnel
          .refine(
            (content) => content === undefined || content.trim().length > 0,
            "Content cannot be just whitespace if provided."
          ) // Si le contenu est fourni, il doit être valide (non vide)
      });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    
  })
 
  return (
    <Form {...form}>
      <form onSubmit={()=>{console.log("form submit");
      }} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} className="outline-none border-none shadow-none" placeholder="Title Here ..."/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} className="outline-none border-none shadow-none" placeholder="tags"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <textarea {...field} className="outline-none border-none shadow-none" placeholder="Title Here ..."/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
