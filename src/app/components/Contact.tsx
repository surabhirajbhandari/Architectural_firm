import { motion } from "motion/react";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-white">Get In Touch</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Ready to start your architectural journey? We'd love to hear about
            your project and explore how we can bring your vision to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neutral-800 mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="mb-2 text-white">Location</h3>
            <p className="text-neutral-400">
              Salt Lake City, Utah
              <br />
              United States
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neutral-800 mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="mb-2 text-white">Email</h3>
            <a
              href="mailto:hello@utaharchitects.com"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              hello@utaharchitects.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neutral-800 mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="mb-2 text-white">Phone</h3>
            <a
              href="tel:+18015551234"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              +1 (801) 555-1234
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-neutral-500 mb-4">Business Hours</p>
          <p className="text-neutral-400">
            Monday - Friday: 9:00 AM - 6:00 PM
            <br />
            Saturday: By Appointment
          </p>
        </motion.div>
      </div>
    </section>
  );
}
