"use client";

import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message envoye !", {
      description: "Nous vous recontacterons dans les plus brefs delais.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Input
          type="text"
          name="name"
          placeholder="Votre nom"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full"
          aria-label="Votre nom"
        />
      </div>
      <div>
        <Input
          type="email"
          name="email"
          placeholder="Votre adresse email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full"
          aria-label="Votre adresse email"
        />
      </div>
      <div>
        <Input
          type="tel"
          name="phone"
          placeholder="Votre numero de telephone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full"
          aria-label="Votre numero de telephone"
        />
      </div>
      <div>
        <Textarea
          name="message"
          placeholder="Parlez-nous de votre projet de celebration..."
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full"
          aria-label="Votre message"
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-espresso hover:bg-espresso-light text-cream py-6 text-lg"
      >
        Envoyer le message
      </Button>
    </form>
  );
}
