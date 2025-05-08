"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

export type ContactFormState = {
  message: string;
  status: "success" | "error" | "idle";
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "Form validation failed. Please check your inputs.",
      status: "error",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = validatedFields.data;

  // --- Placeholder for actual email sending logic ---
  // In a real application, you would integrate with an email service like SendGrid, Resend, etc.
  // or use Firebase Functions to send an email.
  console.log("--- New Contact Form Submission ---");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);
  console.log("-----------------------------------");
  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000)); 
  // --- End of placeholder ---
  
  // Simulate a successful submission for now
  // In a real scenario, check the result of the email sending operation
  const submissionSuccessful = true; 

  if (submissionSuccessful) {
    return {
      message: "Thank you! Your message has been sent successfully. I'll get back to you soon.",
      status: "success",
    };
  } else {
    return {
      message: "Sorry, there was an error sending your message. Please try again later.",
      status: "error",
    };
  }
}
