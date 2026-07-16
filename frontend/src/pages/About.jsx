import { motion } from 'framer-motion'
import { Award, Users, Heart, Target } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Counter from '../components/Counter'
import { stats } from '../constants/hotelData'

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Hospitality',
      description: 'Ethiopian warmth and exceptional service in every interaction',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Commitment to the highest standards of quality and comfort',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building lasting relationships with guests and locals alike',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Continuously improving our facilities and services',
    },
  ]

  return (
    <div className="min-h-screen">
      <PageHeader
        title="About Us"
        subtitle="Where Ethiopian hospitality meets modern luxury"
        image="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnIZm4VUNpdsZyqnmbVzq2tt91Kfh9a2gzYuxbBnEvk8XyMkHQTGt7hTbo8WWBRbZYTmXpv2f97NrjSTxH0jNN6sJCpd4O9TL-dUVWMC32zqbnTPjv5BYCixIFr9IpxQcdUfkg547Ak07u6=s680-w680-h510-rw"
      />

      {/* Story */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-playfair font-bold text-primary mb-6">
              Our Story
            </h2>
            <div className="space-y-6 text-gray leading-relaxed text-lg">
              <p>
                Ras Hotel has been a cornerstone of hospitality in Asella for over a decade. 
                Located in the heart of Oromia, we have welcomed thousands of guests from around the world, 
                offering them a home away from home in one of Ethiopia's most beautiful regions.
              </p>
              <p>
                Our name, "Ras," meaning "gold" in Oromo, reflects our commitment to providing 
                golden experiences to every guest. From business travelers to families on vacation, 
                from conference attendees to adventure seekers exploring the Bale Mountains, 
                we cater to diverse needs with the same dedication to excellence.
              </p>
              <p>
                With 27 carefully designed rooms, an award-winning restaurant serving authentic Ethiopian 
                and international cuisine, state-of-the-art conference facilities, and a team of passionate 
                hospitality professionals, Ras Hotel continues to set the standard for luxury 
                accommodation in Asella.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              Ras Hotel by the Numbers
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Counter
                key={index}
                end={stat.number}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-gray">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-luxury p-8 text-center shadow-lg hover:shadow-2xl transition-shadow"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gold bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <value.icon className="w-8 h-8 text-gold" strokeWidth={1.5} />
                </motion.div>
                <h3 className="text-xl font-playfair font-semibold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-gray text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-primary text-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-playfair font-bold">
                Meet Our Team
              </h2>
              <p className="text-white text-opacity-90 leading-relaxed">
                Our dedicated team of hospitality professionals works around the clock to ensure 
                your stay at Ras Hotel exceeds expectations. From our front desk staff to our 
                housekeeping team, from our talented chefs to our concierge service, every member 
                is committed to making your experience memorable.
              </p>
              <p className="text-white text-opacity-90 leading-relaxed">
                We believe in the power of genuine Ethiopian hospitality combined with international 
                standards of service. Our team undergoes regular training to stay updated with the 
                latest hospitality trends while maintaining the authentic warmth that makes our 
                service special.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-luxury overflow-hidden shadow-2xl"
            >
              <img
                src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlRGnKtj6G74R9XuUzyat6vKT6EUMBsHRRSKcEfD2QaBqtPLJRyjWcplbpOax8L1yGQ59m6qQZKrzRM3cGhRj5HearAyHaaDkFRJrI9TaUAnK3mVTb2y7oL3qq1yk9VD4tqGFSE8DC_XGb_=s680-w680-h510-rw"
                alt="Hotel Team"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-playfair font-bold text-primary mb-6">
              Perfectly Located in Asella
            </h2>
            <p className="text-gray leading-relaxed text-lg mb-8">
              Situated in the heart of Asella, Ras Hotel offers easy access to the city's main attractions, 
              including Arsi University, local markets, and the stadium where Ethiopia's running legends train. 
              We're also the perfect base for exploring the stunning natural beauty of the surrounding highlands 
              and the nearby Bale Mountains National Park.
            </p>
            <div className="aspect-video rounded-luxury overflow-hidden shadow-2xl">
              <img
                src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAEbFlRp81f92CaGftDsLtQooUhizay9cRpguJrtHwglCkBEvvSkUwL9hcNooFXLC8ymDt_joZ1vbmUKcZ94QyFN6l2Q10a5NobP_hpHEHKin3Z2ne7uUCTwN93dmFJFEMokvtFJ=s680-w680-h510-rw"
                alt="Asella City"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
