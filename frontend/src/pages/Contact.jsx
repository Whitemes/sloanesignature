import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const [scrolled, setScrolled] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <Navigation scrolled={scrolled} />
      <div className="pt-32 pb-16 px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl font-serif text-center mb-4">Contact Us</h1>
        <p className="text-center text-gray-600 mb-12 text-lg">Let's create something extraordinary together</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
          <div>
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
          <div>
            <Input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full"
            />
          </div>
          <div>
            <Textarea
              name="message"
              placeholder="Tell us about your celebration..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full"
            />
          </div>
          <Button type="submit" className="w-full bg-gray-800 hover:bg-gray-700 text-white py-6 text-lg">
            Send Message
          </Button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;