import { motion } from "motion/react";
import { Building2, Home, Ruler, TreePine } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Commercial Design",
    description: "Creating functional and inspiring spaces for businesses, from office buildings to retail environments.",
  },
  {
    icon: Home,
    title: "Residential Architecture",
    description: "Designing custom homes that reflect your lifestyle while maximizing comfort and efficiency.",
  },
  {
    icon: TreePine,
    title: "Sustainable Design",
    description: "Environmentally conscious architecture that reduces impact while enhancing livability.",
  },
  {
    icon: Ruler,
    title: "Interior Design",
    description: "Thoughtful interior spaces that seamlessly integrate with architectural vision.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Our Services</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            We offer comprehensive architectural services tailored to bring your
            vision to life with precision and creativity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 hover:shadow-lg transition-shadow"
            >
              <service.icon className="w-12 h-12 mb-4 text-neutral-900" />
              <h3 className="mb-3">{service.title}</h3>
              <p className="text-neutral-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
