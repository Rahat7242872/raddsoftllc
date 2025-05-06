import { motion } from 'framer-motion';
import { FiArrowRight, FiGlobe, FiSmartphone, FiTrendingUp, FiBriefcase } from 'react-icons/fi';

const services = [
  {
    title: "USA/UK Business Setup",
    description: "Complete company registration, bank account opening, and legal services",
    icon: <FiBriefcase className="text-3xl" />,
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Web Development",
    description: "High-performance websites and web applications development",
    icon: <FiGlobe className="text-3xl" />,
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Mobile Development",
    description: "iOS and Android app development services",
    icon: <FiSmartphone className="text-3xl" />,
    color: "from-green-500 to-green-600"
  },
  {
    title: "Digital Marketing",
    description: "Search engine optimization and social media marketing",
    icon: <FiTrendingUp className="text-3xl" />,
    color: "from-orange-500 to-orange-600"
  }
];

export default function service() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Professional Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Complete services from global business solutions to digital marketing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className={`bg-gradient-to-r ${service.color} h-2`}></div>
              <div className="p-6">
                <div className={`text-white bg-gradient-to-r ${service.color} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="flex items-center text-blue-600 font-medium group">
                  Learn more
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}