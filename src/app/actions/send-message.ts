'use server';

import { z } from 'zod';

// Define the schema for form validation
const ContactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(5, 'Message must be at least 5 characters long'),
});

export async function sendMessageAction(formData: FormData) {
  try {
    const rawData = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    // Validate form data
    const validationResult = ContactFormSchema.safeParse(rawData);

    if (!validationResult.success) {
      // Flatten errors for easier display if needed, though toast currently shows a generic error
      const errorMessages = validationResult.error.flatten().fieldErrors;
      console.error('Validation errors:', errorMessages);
      // Return the first error message found
      const firstError = Object.values(errorMessages).flat()[0] || 'Invalid form data.';
      return { success: false, error: firstError };
    }

    const { name, email, message } = validationResult.data;

    // --- Placeholder for actual sending logic ---
    // In a real application, you would integrate with an email service (like SendGrid, Resend)
    // or save the message to a database here.
    console.log('--- New Contact Message ---');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    console.log('---------------------------');

    // Simulate network delay (optional)
    await new Promise(resolve => setTimeout(resolve, 1000));

    // --- End Placeholder ---

    return { success: true };

  } catch (error) {
    console.error('Error sending message:', error);
    return { success: false, error: 'An unexpected error occurred. Please try again.' };
  }
}
