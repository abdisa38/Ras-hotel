import { motion } from 'framer-motion'

const PageHeader = ({ title, subtitle, image }) => {
  return (
    <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-playfair font-bold text-white mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-white text-opacity-90 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>

      {/* Decorative Element */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100px' }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-gold"
      />
    </div>
  )
}

export default PageHeader
