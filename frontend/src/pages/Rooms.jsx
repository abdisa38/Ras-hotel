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
        image="https://z-p3-scontent.fadd2-1.fna.fbcdn.net/v/t39.30808-6/467187688_122123105306424440_4710170043960023570_n.jpg?stp=dst-jpg_tt6&cstp=mx1152x864&ctp=s720x720&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEw-J_SAFNfPcLixGeEMV8dcLM-_BMTj2Jwsz78ExOPYqlO1OtZAuG0a91HMuM8CE09-YTud-MR7bKk5c68TO2J&_nc_ohc=ErM54VHVOEoQ7kNvwF07Qmt&_nc_oc=Adp2_n3rjJPYmbpmdRIZIk9f20VA6uyunKGlZfxTeDLFsXfKv_HHU5TrwEydCYKGn78&_nc_zt=23&_nc_ht=z-p3-scontent.fadd2-1.fna&_nc_gid=57xVZpKUd5KJSxxrsZws8w&_nc_ss=7b2a8&oh=00_AQCsjoAp7rJCT-p32jZCfG781Ec3_YKZ6k5uwTMMwH7iJA&oe=6A5BBE2C"
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
