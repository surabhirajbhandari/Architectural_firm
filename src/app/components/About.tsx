import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6">Our Story</h2>
            <p className="text-neutral-600 mb-4">
              Founded in the heart of Utah, we are a team of passionate architects
              and designers dedicated to creating spaces that reflect both innovation
              and timeless beauty. Our journey began with a simple belief: that
              architecture should not only serve its purpose but also inspire those
              who inhabit it.
            </p>
            <p className="text-neutral-600 mb-4">
              Drawing inspiration from Utah's diverse landscapes—from the red rock
              formations to the snow-capped peaks—we design with respect for our
              environment. Every project is an opportunity to blend modern aesthetics
              with sustainable practices, creating buildings that stand in harmony
              with their surroundings.
            </p>
            <p className="text-neutral-600">
              As a startup, we bring fresh perspectives and agile thinking to each
              challenge. We believe in collaborative partnerships with our clients,
              transforming their visions into architectural realities that exceed
              expectations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[500px]"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1571273033940-89c3e9bb18b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJjaGl0ZWN0dXJlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY2NDc1MDY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Minimalist architecture interior"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
