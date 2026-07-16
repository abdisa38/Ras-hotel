import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Users, Maximize, Wifi, Tv, Coffee, Wind, ArrowLeft, Check } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { rooms } from '../constants/hotelData'
import RoomCard from '../components/RoomCard'

const RoomDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const room = rooms.find((r) => r.id === id)

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-playfair font-bold text-primary mb-4">Room Not Found</h2>
          <Link to="/rooms" className="text-gold hover:underline">Back to Rooms</Link>
        </div>
      </div>
    )
  }

  const relatedRooms = rooms.filter((r) => r.id !== id).slice(0, 3)

  // Multiple images for gallery
  const roomImages = [
    room.image,
    'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1920',
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/rooms')}
          className="flex items-center space-x-2 text-primary hover:text-gold transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Rooms</span>
        </motion.button>
      </div>

      {/* Image Gallery */}
      <section className="px-4 mb-12">
        <div className="max-w-7xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            className="rounded-luxury overflow-hidden shadow-2xl h-[60vh]"
          >
            {roomImages.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`${room.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Room Details */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h1 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
                  {room.name}
                </h1>
                <div className="flex items-center space-x-6 text-gray mb-6">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-gold" />
                    <span>Up to {room.capacity} {room.capacity === 1 ? 'Guest' : 'Guests'}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Maximize className="w-5 h-5 text-gold" />
                    <span>{room.size}</span>
                  </div>
                </div>
                <p className="text-gray leading-relaxed text-lg">
                  {room.description}
                </p>
              </motion.div>

              {/* Amenities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-luxury p-8"
              >
                <h2 className="text-2xl font-playfair font-semibold text-primary mb-6">
                  Room Amenities
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {room.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-gold flex-shrink-0" />
                      <span className="text-gray">{amenity}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Policies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-luxury p-8"
              >
                <h2 className="text-2xl font-playfair font-semibold text-primary mb-6">
                  Room Policies
                </h2>
                <div className="space-y-4 text-gray">
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Check-in / Check-out</h3>
                    <p>Check-in: 2:00 PM | Check-out: 12:00 PM</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Cancellation</h3>
                    <p>Free cancellation up to 48 hours before arrival</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Payment</h3>
                    <p>Cash, credit cards, and bank transfer accepted</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Booking Card */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-luxury p-8 shadow-xl sticky top-24"
              >
                <div className="text-center mb-6">
                  <div className="text-4xl font-playfair font-bold text-primary mb-2">
                    ETB {room.price}
                  </div>
                  <div className="text-gray text-sm">per night</div>
                </div>

                <Link to="/contact" state={{ selectedRoom: room }}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gold text-white py-4 rounded-luxury font-medium text-lg hover:bg-opacity-90 transition-all mb-4"
                  >
                    Reserve Now
                  </motion.button>
                </Link>

                <div className="space-y-3 pt-6 border-t border-border">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray">Free WiFi</span>
                    <Wifi className="w-5 h-5 text-gold" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray">Satellite TV</span>
                    <Tv className="w-5 h-5 text-gold" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray">24/7 Room Service</span>
                    <Coffee className="w-5 h-5 text-gold" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray">Air Conditioning</span>
                    <Wind className="w-5 h-5 text-gold" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Rooms */}
      {relatedRooms.length > 0 && (
        <section className="py-20 bg-white px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
                Other Rooms You May Like
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedRooms.map((relatedRoom, index) => (
                <RoomCard key={relatedRoom.id} room={relatedRoom} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default RoomDetails
