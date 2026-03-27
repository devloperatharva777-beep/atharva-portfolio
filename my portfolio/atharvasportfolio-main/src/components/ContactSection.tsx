import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import LiquidGlassCard from "./LiquidGlassCard";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: form,
      });
      if (error) throw error;
      toast({ title: "Message sent! 🎉", description: "Thanks for reaching out, I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      toast({ title: "Failed to send", description: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="max-w-[1200px] mx-auto px-6 md:px-10 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 font-space"
      >
        Get In Touch
      </motion.h2>

      <LiquidGlassCard className="max-w-[600px] mx-auto p-8 md:p-12">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-4 bg-foreground/[0.03] border border-foreground/10 rounded-xl text-foreground font-outfit focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_hsl(263_70%_58%_/_0.1)] transition-all duration-300"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-4 bg-foreground/[0.03] border border-foreground/10 rounded-xl text-foreground font-outfit focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_hsl(263_70%_58%_/_0.1)] transition-all duration-300"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full p-4 bg-foreground/[0.03] border border-foreground/10 rounded-xl text-foreground font-outfit resize-none focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_hsl(263_70%_58%_/_0.1)] transition-all duration-300"
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={sending}
            className="btn-gradient px-8 py-4 rounded-full font-semibold text-lg border-none cursor-pointer disabled:opacity-50"
          >
            {sending ? "Sending..." : "Send Email"}
          </motion.button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-muted-foreground text-sm mb-4">Or reach out directly</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:devloperatharva777@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold border border-foreground/15 text-foreground text-sm transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_hsl(263_70%_58%_/_0.15)]"
            >
              ✉ Send Email
            </a>
            <a
              href={`https://wa.me/917499953767?text=${encodeURIComponent("Hi Atharva! I visited your portfolio and would like to connect.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300"
              style={{
                background: "hsl(142 70% 45%)",
                color: "white",
              }}
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </LiquidGlassCard>
    </section>
  );
};

export default ContactSection;
