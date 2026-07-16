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
        image="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkBCgpcDBBuav0xbjFRyZSrKnHJerIGQVlnJlNjQ4LUnUpd0VLcBRVq1KgfHwj9-AddfxnkpoATMWV2MUuGJBIJoFUBXogZpv6P5Do8qDkBc-wBqwhzZnEtCghC5zYfsgFD1bfS4iRJZr52=s680-w680-h510-rw"
      />

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
