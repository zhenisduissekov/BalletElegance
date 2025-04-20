import React from 'react';
import ScrollReveal from './ScrollReveal';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: ContactFormValues) {
    // In a real implementation, this would send the form data to a backend
    console.log(values);
    
    toast({
      title: "Request received!",
      description: `Thank you ${values.name}! We'll contact you soon to schedule your free trial class.`,
    });
    
    form.reset();
  }

    return (
        // <section id="contact" className="py-20 md:py-24 bg-red-100 text-black border border-black">

        <section id="contact" className="py-20 md:py-24 bg-[#F8F0E9] text-gray-800">
            <div className="container-custom">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-2">Contact Me</h2>
                        <div className="section-divider mb-4"></div>
                        <p className="text-lg leading-relaxed">
                            Book your free 30-minute trial class or inquire about regular sessions
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="flex flex-col justify-center space-y-8">
                            <div>
                                <h3 className="text-2xl font-semibold mb-4">📞 Get in Touch</h3>
                                <p className="mb-4">We'd love to hear from you! Whether you're curious about classes or just want to chat.</p>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <FaPhone className="text-[#8B7355] mt-1 mr-4" />
                                        <div>
                                            <p className="font-medium">Phone</p>
                                            <a href="tel:+13467191003" className="hover:text-[#8B7355] transition-colors">+1 (346) 719-1003</a>
                                            <p className="text-xs mt-1 text-gray-500">Available weekdays 9AM–6PM</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <FaEnvelope className="text-[#8B7355] mt-1 mr-4" />
                                        <div>
                                            <p className="font-medium">Email</p>
                                            <a href="mailto:contact@sophia.dance" className="hover:text-[#8B7355] transition-colors">contact@sophia.dance</a>
                                            <p className="text-xs mt-1 text-gray-500">Typical response time: 24–48 hours</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <FaMapMarkerAlt className="text-[#8B7355] mt-1 mr-4" />
                                        <div>
                                            <p className="font-medium">Location</p>
                                            <p>5718 Westheimer Rd, Suite 1200</p>
                                            <p>Houston, TX 77057</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-xl font-medium mb-4">🗺️ Find Us on the Map</h4>
                                <div className="rounded overflow-hidden border-2 border-[#8B7355]">
                                    <iframe
                                        title="Location Map"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.3532050563244!2d-95.48144902498855!3d29.738489433002933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c3d8b916cfdd%3A0x6f7ded358d826ac!2zNTcxOCBXZXN0aGVpbWVyIFJkICMxMjAwLCBIb3VzdG9uLCBUWCA3NzA1Nywg0KHQqNCQ!5e0!3m2!1sru!2str!4v1745139495053!5m2!1sru!2str"
                                        width="100%"
                                        height="250"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="w-full h-64"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded shadow-md">
                            <h3 className="text-2xl font-semibold mb-6">📬 Send a Message</h3>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                    <FormField control={form.control} name="name" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Your Name</FormLabel>
                                            <FormControl><Input placeholder="Your name" {...field} /></FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />

                                    <FormField control={form.control} name="email" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email Address</FormLabel>
                                            <FormControl><Input type="email" placeholder="you@example.com" {...field} /></FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />

                                    <FormField control={form.control} name="phone" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Phone Number</FormLabel>
                                            <FormControl><Input type="tel" placeholder="+1 234 567 890" {...field} /></FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />

                                    <FormField control={form.control} name="message" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Message</FormLabel>
                                            <FormControl><Textarea rows={4} placeholder="Tell me about your goals or questions" {...field} /></FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />

                                    <Button type="submit" className="w-full bg-[#8B7355] hover:bg-[#7c634b] text-white">Send</Button>
                                </form>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
