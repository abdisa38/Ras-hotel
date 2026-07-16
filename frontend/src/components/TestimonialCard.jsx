import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-white rounded-luxury p-8 shadow-lg relative"
    >
      <Quote className="absolute top-6 right-6 w-12 h-12 text-gold opacity-20" />
      
      <div className="space-y-4">
        {/* Stars */}
        <div className="flex space-x-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-gold text-gold" />
          ))}
        </div>

        {/* Text */}
        <p className="text-gray leading-relaxed italic">
          "{testimonial.text}"
        </p>

        {/* Author */}
        <div className="flex items-center space-x-4 pt-4 border-t border-border">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-primary">{testimonial.name}</h4>
            <p className="text-sm text-gray">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard
