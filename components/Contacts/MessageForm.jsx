"use client";

import React, { useEffect, useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useSearchParams } from "next/navigation";
import emailjs from "@emailjs/browser";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Validation Schema
const messageSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  number: z.string().min(7, { message: "Number must be at least 7 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function MessageForm() {
  const form = useForm({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      subject: "",
    },
  });

  const formRef = useRef(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const subjectParam = searchParams.get("subject");
    if (subjectParam) {
      form.setValue("subject", `To book ${decodeURIComponent(subjectParam).replace(/-/g, " ")}`);
    }
  }, [searchParams, form]);

  const onSubmit = (data) => {
    console.log("Message Data:", data);
    emailjs
      .sendForm("service_p2rp2he", "template_jb97s5a", formRef.current, "3_gA9XGD3TJWzyzjy")
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} ref={formRef} className="space-y-6 max-w-lg mx-auto p-6 border-2 rounded-lg shadow-md">
        {/* Name Field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Number Field */}
        <FormField
          control={form.control}
          name="number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="Your Number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Your Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Subject Field */}
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="Subject" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Message Field */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <textarea
                  placeholder="Your Message"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  rows="5"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button type="submit" className="mx-auto w-full">
          Send Message
        </Button>
      </form>
    </Form>
  );
}
