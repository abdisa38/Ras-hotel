import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import { ChevronDown, ArrowRight } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

import BookingWidget from '../components/BookingWidget'
import ServiceCard from '../components/ServiceCard'
import RoomCard from '../components/RoomCard'
import TestimonialCard from '../components/TestimonialCard'
import Counter from '../components/Counter'
import FAQ from '../components/FAQ'
import { hotelInfo, stats, services, rooms, testimonials, faqs } from '../constants/hotelData'

const Home = () => {
  const heroImages = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT9le3ob-ePxz1i-6WWhMH27ylw8mtzFt4HhE3xl1rhA&s=10',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlHMHw4IMgfmC8Wn0Kb2jN65Z3mEAzd9ime2KbJWW_MA&s=10',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUPGvjBNx1PIVwZt31T65PWSkGAJj7K3PJ8I1hJllx3w&s=10',
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center justify-center pt-24 pb-40">
        <div className="absolute inset-0 z-0">
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            effect="fade"
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            className="h-full w-full"
          >
            {heroImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                <img
                  src={image}
                  alt={`Soljam Hotel ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/60" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full">
          <div className="text-center px-4 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-gold text-sm tracking-[0.3em] uppercase mb-6"
              >
                Welcome to Luxury
              </motion.p>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
                {hotelInfo.tagline}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white text-opacity-90 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
                {hotelInfo.description}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gold text-white px-8 py-4 rounded-luxury text-lg font-medium hover:bg-opacity-90 transition-all shadow-xl"
                  >
                    Book Your Stay
                  </motion.button>
                </Link>
                <Link to="/rooms">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-primary px-8 py-4 rounded-luxury text-lg font-medium hover:bg-opacity-90 transition-all shadow-xl"
                  >
                    Explore Rooms
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <ChevronDown className="w-8 h-8 text-white" />
        </motion.div>
      </section>

      {/* Booking Widget */}
      <section className="relative -mt-32 z-20 px-4">
        <div className="max-w-5xl mx-auto">
          <BookingWidget />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Images */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-luxury overflow-hidden">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUnsugEq-BqZ-oZDEXNcYqDqGDC71Og2RZQnJX3RIfNA&s=10"
                  alt="Hotel Interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-8 -right-8 w-64 h-64 rounded-luxury overflow-hidden shadow-2xl hidden md:block"
              >
                <img
                  src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkjIzOYbPBvPjLMVXx0p1p6ynf9yI7CDSH2W01CFHYy1gysJl1dJYmlH7QeimHcN_duZlFURQR9xEwZ5ex-UQezXsinhxktAj1vMuFOTbeOnCbc9ZmhYol4Wc6t0QiWzTH0_YUSKJc6OWz_=s680-w680-h510-rw"
                  alt="Hotel Room"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-gold text-sm tracking-[0.3em] uppercase">
                About Soljam Hotel
              </p>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary">
                Experience Ethiopian Hospitality at Its Finest
              </h2>
              <p className="text-gray leading-relaxed">
                Nestled in the heart of Asella, Oromia, Soljam Hotel stands as a beacon of comfort and luxury. 
                Our hotel combines traditional Ethiopian warmth with modern amenities to create an unforgettable experience for every guest.
              </p>
              <p className="text-gray leading-relaxed">
                With 27 elegantly appointed rooms, a renowned restaurant serving authentic Ethiopian and international cuisine, 
                state-of-the-art conference facilities, and 24/7 exceptional service, we cater to both business and leisure travelers.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                {stats.map((stat, index) => (
                  <Counter
                    key={index}
                    end={stat.number}
                    suffix={stat.suffix}
                    label={stat.label}
                  />
                ))}
              </div>
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gold text-white px-8 py-3 rounded-luxury font-medium hover:bg-opacity-90 transition-all flex items-center space-x-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
              Our Services
            </p>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
              Exceptional Amenities
            </h2>
            <p className="text-gray max-w-2xl mx-auto leading-relaxed">
              Experience world-class facilities and services designed for your comfort and convenience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
              Accommodation
            </p>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
              Luxury Rooms & Suites
            </h2>
            <p className="text-gray max-w-2xl mx-auto leading-relaxed">
              Choose from our selection of elegantly designed rooms, each offering modern comfort and stunning views
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {rooms.map((room, index) => (
              <RoomCard key={room.id} room={room} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/rooms">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-8 py-3 rounded-luxury font-medium hover:bg-gold transition-all inline-flex items-center space-x-2"
              >
                <span>View All Rooms</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
              Testimonials
            </p>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
              What Our Guests Say
            </h2>
          </motion.div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
              FAQ
            </p>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-gray">
              Find answers to common questions about your stay
            </p>
          </motion.div>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4">
        <div className="absolute inset-0">
          <img
            src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnUJKpYn4SsbSl_LeNaXQU-DkLNkH1T0-o0Jzfs6l6oCHiNOaBcPio3LCbEMN4CaIfAqZXP9s7pt4yH-m-dWvTZojCICdkzEDnytddFiOpDueTNRNxQvLBTYCJaBwaTG0dma8VXti5e9sE9=s680-w680-h510-rw"
            alt="Hotel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary bg-opacity-80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              Ready to Experience Luxury?
            </h2>
            <p className="text-white text-opacity-90 text-lg mb-8 leading-relaxed">
              Book your stay at Soljam Hotel and discover the perfect blend of comfort, elegance, and Ethiopian hospitality.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold text-white px-10 py-4 rounded-luxury text-lg font-medium hover:bg-opacity-90 transition-all shadow-xl"
              >
                Book Now
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
