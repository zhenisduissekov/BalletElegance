import React from 'react';
import ScrollReveal from './ScrollReveal';
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
    <section id="contact" className="py-20 md:py-24">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="section-title">Contact Me</h2>
            <div className="section-divider"></div>
            <p className="text-lg leading-relaxed">
              Book your free 30-minute trial class or inquire about regular sessions
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollReveal className="flex flex-col justify-center">
              <div className="mb-8">
                <h3 className="font-playfair text-2xl font-medium mb-4">Get in Touch</h3>
                <p className="mb-6">
                  Contact me to discuss your goals, schedule a trial class, or learn more about the different programs offered.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <i className="fas fa-phone text-[#8B7355] mt-1 mr-4"></i>
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+13467191003" className="hover:text-[#8B7355] transition-colors">+1 (346) 719-1003</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-envelope text-[#8B7355] mt-1 mr-4"></i>
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:contact@sophia.dance" className="hover:text-[#8B7355] transition-colors">contact@sophia.dance</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-map-marker-alt text-[#8B7355] mt-1 mr-4"></i>
                    <div>
                      <p className="font-medium">Location</p>
                      <p>Houston, Texas</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-playfair text-xl font-medium mb-4">Class Schedule</h4>
                <p className="mb-2">
                  Morning classes from 8:00 AM to 12:00 PM
                </p>
                <p>
                  Duration: 45-90 minutes depending on level and focus
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal className="bg-[#F8F0E9] p-8 rounded-sm">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium">Your Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your name" 
                            className="bg-white border-gray-300 focus:border-[#8B7355]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium">Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="bg-white border-gray-300 focus:border-[#8B7355]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium">Phone Number</FormLabel>
                        <FormControl>
                          <Input 
                            type="tel" 
                            placeholder="Enter your phone number" 
                            className="bg-white border-gray-300 focus:border-[#8B7355]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell me about your goals or questions" 
                            className="bg-white border-gray-300 focus:border-[#8B7355]" 
                            rows={4}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-[#8B7355] hover:bg-opacity-90 text-white font-medium py-3 px-6 rounded-sm transition-colors duration-300"
                  >
                    Schedule Your Free Trial
                  </Button>
                </form>
              </Form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
