import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Send, Clock, MessageCircle } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { hotelInfo } from '../constants/hotelData'
import { useLocation } from 'react-router-dom'

const Contact = () => {
  const location = useLocation()
  const bookingData = location.state?.booking
  const selectedRoom = location.state?.selectedRoom

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: bookingData ? 'Room Reservation' : selectedRoom ? `${selectedRoom.name} Reservation` : '',
    message: bookingData
      ? `I would like to book a room.\n\nCheck-in: ${bookingData.checkIn}\nCheck-out: ${bookingData.checkOut}\nGuests: ${bookingData.guests}\nRoom Type: ${bookingData.roomType}`
      : selectedRoom
      ? `I would like to reserve a ${selectedRoom.name}.`
      : '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 1500)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: hotelInfo.location,
    },
    {
      icon: Phone,
      title: 'Phone',
      content: hotelInfo.phones.map((phone, i) => (
        <div key={i}>
          <a href={`tel:${phone}`} className="hover:text-gold transition-colors">
            {phone}
          </a>
        </div>
      )),
    },
    {
      icon: Mail,
      title: 'Email',
      content: (
        <a href={`mailto:${hotelInfo.email}`} className="hover:text-gold transition-colors">
          {hotelInfo.email}
        </a>
      ),
    },
    {
      icon: MessageCircle,
      title: 'Telegram',
      content: (
        <a href={`https://t.me/${hotelInfo.telegram.replace('@', '')}`} className="hover:text-gold transition-colors">
          {hotelInfo.telegram}
        </a>
      ),
    },
  ]

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Contact Us"
        subtitle="We're here to help. Get in touch with us today"
        image="https://z-p3-scontent.fadd2-1.fna.fbcdn.net/v/t39.30808-6/467184440_122123105282424440_1890700287372260021_n.jpg?stp=dst-jpg_tt6&cstp=mx1152x864&ctp=s1152x864&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE5INRmvy6nXDL3qSUQSHgAYf_xzESWD3xh__HMRJYPfAOnUgLcdLrauaM5uknot3S6ve9a61w9dN0vDr784mkf&_nc_ohc=s1KRJUum3CEQ7kNvwHb7Vyj&_nc_oc=AdrjdV9yMhG7dZugZhtQrLt1LXEEksz3sbwDj9hP2DHvNs-NDYqLfZk0zj8uX7Vjr-4&_nc_zt=23&_nc_ht=z-p3-scontent.fadd2-1.fna&_nc_gid=CQGGaGr78_NTLICs3t7rng&_nc_ss=7b2a8&oh=00_AQDOm080uA0fu76DrDODSiXRaBrpDADR773VvgGxOkMFEg&oe=6A5BCBC8"
      />

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-4xl font-playfair font-bold text-primary mb-6">
                  Get In Touch
                </h2>
                <p className="text-gray leading-relaxed mb-8">
                  Have questions? We're here to help! Whether you're planning a stay, organizing an event, 
                  or just need more information, our team is ready to assist you.
                </p>
              </motion.div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-luxury p-6 shadow-lg flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-gold bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">{info.title}</h3>
                      <div className="text-gray text-sm">{info.content}</div>
                    </div>
                  </motion.div>
                ))}

                {/* Hours */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white rounded-luxury p-6 shadow-lg flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-gold bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">24/7 Reception</h3>
                    <div className="text-gray text-sm">
                      <p>We're available around the clock</p>
                      <p>Open 24 hours, 7 days a week</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-luxury p-8 shadow-xl"
            >
              <h3 className="text-2xl font-playfair font-semibold text-primary mb-6">
                Send Us a Message
              </h3>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 text-green-800 rounded-luxury p-4 mb-6"
                >
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-luxury focus:outline-none focus:border-gold transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-luxury focus:outline-none focus:border-gold transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-luxury focus:outline-none focus:border-gold transition-colors"
                      placeholder="+251..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-luxury focus:outline-none focus:border-gold transition-colors"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 border border-border rounded-luxury focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold text-white py-4 rounded-luxury font-medium text-lg hover:bg-opacity-90 transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              Find Us
            </h2>
            <p className="text-gray">
              Located in the heart of Asella, Oromia, Ethiopia
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-luxury overflow-hidden shadow-2xl"
          >
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.5!2d${hotelInfo.coordinates.lng}!3d${hotelInfo.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNTcnMTQuMCJOIDM5wrAwOCcwNy4xIkU!5e0!3m2!1sen!2set!4v1234567890`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Ras Hotel Location"
            />
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact
