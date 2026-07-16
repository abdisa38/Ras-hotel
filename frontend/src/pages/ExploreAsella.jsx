import { motion } from 'framer-motion'
import { MapPin, Navigation } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { attractions } from '../constants/hotelData'

const ExploreAsella = () => {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Explore Asella"
        subtitle="Discover the beauty and culture of Asella and its surroundings"
        image="https://lh3.googleusercontent.com/gps-cs-s/APNQkAEbFlRp81f92CaGftDsLtQooUhizay9cRpguJrtHwglCkBEvvSkUwL9hcNooFXLC8ymDt_joZ1vbmUKcZ94QyFN6l2Q10a5NobP_hpHEHKin3Z2ne7uUCTwN93dmFJFEMokvtFJ=s680-w680-h510-rw"
      />

      {/* Intro */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Navigation className="w-16 h-16 text-gold mx-auto mb-6" />
            <h2 className="text-4xl font-playfair font-bold text-primary mb-6">
              Welcome to Asella
            </h2>
            <p className="text-gray leading-relaxed text-lg">
              Asella, located in the Arsi Zone of Oromia, is a vibrant city known for producing some of Ethiopia's 
              greatest distance runners. Beyond its athletic legacy, Asella offers stunning natural landscapes, 
              cultural richness, and warm hospitality. Let us guide you through the best experiences our city has to offer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Attractions */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              Must-Visit Destinations
            </h2>
            <p className="text-gray">
              Explore the wonders around Soljam Hotel
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((attraction, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-background rounded-luxury overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-gold text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{attraction.distance}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-playfair font-semibold text-primary mb-3">
                    {attraction.name}
                  </h3>
                  <p className="text-gray text-sm leading-relaxed">
                    {attraction.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Running Culture Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-playfair font-bold">
                The Heart of Ethiopian Running
              </h2>
              <p className="text-white text-opacity-90 leading-relaxed">
                Asella is renowned as the training ground for some of the world's greatest distance runners. 
                The high altitude (2,400 meters above sea level) and scenic landscapes make it the perfect 
                location for athletes seeking to improve their endurance and performance.
              </p>
              <p className="text-white text-opacity-90 leading-relaxed">
                Witness the dedication of local athletes during early morning training sessions, or join them 
                for a run through the beautiful highlands. The city's running culture is a source of pride and 
                inspiration for all visitors.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-4xl font-playfair font-bold text-gold mb-2">2,400m</div>
                  <div className="text-sm uppercase tracking-wider">Altitude</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-playfair font-bold text-gold mb-2">100+</div>
                  <div className="text-sm uppercase tracking-wider">Champions</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-luxury overflow-hidden shadow-2xl"
            >
              <img
                src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnJPEDfg-ZIFA8YDE3RPyM8ylybPjNN-kzwV8Xbjz8Tx2PkGG-OYy3Hx2g-HistQj7CvGUg6eDwQN1aDVjk2MMga5Qglscx5ylIT06KCwFJjb6gGC_h5mV89A7qWvXPlMjOo4LddA=s680-w680-h510-rw"
                alt="Running in Asella"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-playfair font-bold text-primary mb-6">
              Need Help Planning Your Visit?
            </h2>
            <p className="text-gray text-lg mb-8">
              Our concierge team is ready to help you explore Asella and create unforgettable experiences
            </p>
            <motion.a
              href="tel:+251223312828"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gold text-white px-10 py-4 rounded-luxury text-lg font-medium hover:bg-opacity-90 transition-all"
            >
              Contact Concierge
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ExploreAsella
