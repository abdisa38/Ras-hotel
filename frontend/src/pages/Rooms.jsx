import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import RoomCard from '../components/RoomCard'
import BookingWidget from '../components/BookingWidget'
import { rooms } from '../constants/hotelData'

const Rooms = () => {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Our Rooms"
        subtitle="Elegantly designed accommodations combining comfort with luxury"
        image="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1920&auto=format&fit=crop"
      />

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rooms.map((room, index) => (
              <RoomCard key={room.id} room={room} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Booking Widget */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              Reserve Your Room
            </h2>
            <p className="text-gray">
              Check availability and book your perfect stay
            </p>
          </motion.div>
          <BookingWidget />
        </div>
      </section>
    </div>
  )
}

export default Rooms
