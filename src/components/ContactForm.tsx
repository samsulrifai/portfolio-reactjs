
"use client";

import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect, useActionState } from "react";

import { submitContactForm, type ContactFormState } from "@/app/contact/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle, AlertTriangle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

export function ContactForm() {
  const { toast } = useToast();

  const initialFormState: ContactFormState = {
    message: "",
    status: "idle",
  };
  const [formState, formAction] = useActionState(submitContactForm, initialFormState);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    if (formState.status === "success") {
      toast({
        title: "Message Sent!",
        description: formState.message,
        variant: "default",
      });
      form.reset(); // Reset form fields on successful submission
    } else if (formState.status === "error" && formState.message && !formState.errors) {
       // General error not related to specific fields
      toast({
        title: "Error",
        description: formState.message,
        variant: "destructive",
      });
    }
  }, [formState, toast, form]);


  const onFormSubmit = (data: ContactFormData) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);
    formAction(formData);
  };


  return (
    <form onSubmit={form.handleSubmit(onFormSubmit)} className="space-y-6">
      {formState.status === "success" && formState.message && (
        <Alert variant="default" className="bg-green-50 border-green-200 dark:bg-green-900 dark:border-green-700">
          <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
          <AlertTitle className="text-green-700 dark:text-green-300">Success!</AlertTitle>
          <AlertDescription className="text-green-600 dark:text-green-400">
            {formState.message}
          </AlertDescription>
        </Alert>
      )}
      {formState.status === "error" && formState.message && !formState.errors && (
         <Alert variant="destructive">
          <AlertTriangle className="h-5 w-5" />
          <AlertTitle>Submission Error</AlertTitle>
          <AlertDescription>
            {formState.message}
          </AlertDescription>
        </Alert>
      )}

      <div>
        <Label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</Label>
        <Input
          id="name"
          {...form.register("name")}
          placeholder="Your Name"
          className={form.formState.errors.name || (formState.errors?.name && "border-destructive")}
        />
        {form.formState.errors.name && (
          <p className="mt-1 text-sm text-destructive">{form.formState.errors.name.message}</p>
        )}
        {formState.errors?.name && (
          <p className="mt-1 text-sm text-destructive">{formState.errors.name[0]}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</Label>
        <Input
          id="email"
          type="email"
          {...form.register("email")}
          placeholder="you@example.com"
          className={form.formState.errors.email || (formState.errors?.email && "border-destructive")}
        />
        {form.formState.errors.email && (
          <p className="mt-1 text-sm text-destructive">{form.formState.errors.email.message}</p>
        )}
         {formState.errors?.email && (
          <p className="mt-1 text-sm text-destructive">{formState.errors.email[0]}</p>
        )}
      </div>

      <div>
        <Label htmlFor="message" className="block text-sm font-medium mb-1">Message</Label>
        <Textarea
          id="message"
          {...form.register("message")}
          rows={5}
          placeholder="Your message..."
          className={form.formState.errors.message || (formState.errors?.message && "border-destructive")}
        />
        {form.formState.errors.message && (
          <p className="mt-1 text-sm text-destructive">{form.formState.errors.message.message}</p>
        )}
        {formState.errors?.message && (
          <p className="mt-1 text-sm text-destructive">{formState.errors.message[0]}</p>
        )}
      </div>
      
      <SubmitButton />
    </form>
  );
}
