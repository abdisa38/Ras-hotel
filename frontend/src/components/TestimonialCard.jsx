import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Quote, User } from 'lucide-react'

const TestimonialCard = ({ testimonial }) => {
  const [imgError, setImgError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-white rounded-luxury p-8 shadow-lg relative h-full flex flex-col justify-between"
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
        <p className="text-primary leading-relaxed text-sm md:text-base font-normal">
          "{testimonial.text}"
        </p>
      </div>

      {/* Author */}
      <div className="flex items-center space-x-4 pt-4 mt-4 border-t border-border">
        {!imgError ? (
          <img
            src={testimonial.image}
            alt={testimonial.name}
            onError={() => setImgError(true)}
            className="w-12 h-12 rounded-full object-cover border-2 border-gold/40 shadow-sm"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary text-gold flex items-center justify-center font-bold text-base border-2 border-gold/40">
            {testimonial.name ? testimonial.name.charAt(0) : <User className="w-6 h-6" />}
          </div>
        )}
        <div>
          <h4 className="font-semibold text-primary">{testimonial.name}</h4>
          <p className="text-xs text-gold font-medium">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard
