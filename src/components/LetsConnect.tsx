import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState } from "react";

const LetsConnect = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - you can integrate with a service like Formspree, EmailJS, etc.
    const mailtoLink = `mailto:goeltanya01@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section ref={ref} id="lets-connect" className={`py-24 md:py-32 ${isVisible ? 'animate-fade-slide-up' : 'opacity-0'}`}>
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold">Let's Connect to build something great</h2>
            <div className="w-24 h-1 gradient-primary mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to new opportunities, collaborations, and conversations.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Left Side - Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-xl gradient-primary flex-shrink-0 group-hover:shadow-glow transition-smooth">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-lg mb-1">Email</h3>
                    <a 
                      href="mailto:goeltanya01@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      goeltanya01@gmail.com
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex-shrink-0 group-hover:shadow-glow transition-smooth">
                    <Linkedin className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-lg mb-1">LinkedIn</h3>
                    <a 
                      href="https://www.linkedin.com/in/tanya-g-3a9b61167/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      linkedin.com/in/tanya-g-3a9b61167
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-xl gradient-primary flex-shrink-0 group-hover:shadow-glow transition-smooth">
                    <Github className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-lg mb-1">GitHub</h3>
                    <a 
                      href="https://github.com/tanyagoel01" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      github.com/tanyagoel01
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div>
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
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full gradient-primary text-white shadow-glow hover:shadow-soft transition-smooth text-base px-8 py-6"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsConnect;

