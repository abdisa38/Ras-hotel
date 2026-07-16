import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'

const ServiceCard = ({ service, index = 0 }) => {
  const Icon = LucideIcons[service.icon] || LucideIcons.Star

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-luxury p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="w-16 h-16 bg-gold bg-opacity-10 rounded-full flex items-center justify-center"
        >
          <Icon className="w-8 h-8 text-gold" strokeWidth={1.5} />
        </motion.div>
        <h3 className="text-xl font-playfair font-semibold text-primary">
          {service.title}
        </h3>
        <p className="text-gray text-sm leading-relaxed">
          {service.description}
        </p>
      </div>
    </motion.div>
  )
}

export default ServiceCard
