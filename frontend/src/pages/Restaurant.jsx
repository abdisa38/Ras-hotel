import { motion } from 'framer-motion'
import { Utensils, Coffee } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { menuCategories } from '../constants/hotelData'

const Restaurant = () => {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Restaurant"
        subtitle="Savor authentic Ethiopian cuisine and international flavors"
        image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070"
      />

      {/* Intro */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Utensils className="w-16 h-16 text-gold mx-auto mb-6" />
            <h2 className="text-4xl font-playfair font-bold text-primary mb-6">
              A Culinary Journey
            </h2>
            <p className="text-gray leading-relaxed text-lg">
              Experience the finest dining in Asella at Ras Hotel's restaurant. Our expert chefs blend 
              traditional Ethiopian recipes with international cuisine, using fresh local ingredients to create 
              unforgettable flavors. From breakfast to dinner, every meal is a celebration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Categories */}
      {menuCategories.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          className={`py-16 px-4 ${categoryIndex % 2 === 0 ? 'bg-white' : ''}`}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
                {category.title}
              </h2>
              <p className="text-gray">{category.description}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.items.map((item, itemIndex) => (
                <motion.div
                  key={itemIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: itemIndex * 0.05 }}
                  className="bg-background rounded-luxury p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-playfair font-semibold text-primary">
                      {item.name}
                    </h3>
                    <span className="text-gold font-semibold text-lg">
                      ETB {item.price}
                    </span>
                  </div>
                  <p className="text-gray text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Coffee Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Coffee className="w-16 h-16 text-gold mx-auto mb-6" />
            <h2 className="text-4xl font-playfair font-bold mb-6">
              Ethiopian Coffee Ceremony
            </h2>
            <p className="text-white text-opacity-90 leading-relaxed text-lg">
              Experience the traditional Ethiopian coffee ceremony, a cultural ritual that has been passed down 
              through generations. Watch as our staff roasts, grinds, and brews fresh coffee beans, creating an 
              aromatic and flavorful cup that embodies Ethiopian hospitality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              Dining Experience
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Injera_with_eight_kinds_of_stew.jpg/960px-Injera_with_eight_kinds_of_stew.jpg', name: 'Injera with Beyaynetu' },
              { src: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Kitfo_with_Ayibe..JPG', name: 'Kitfo (Minced Beef)' },
              { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Ethiopian_wat.jpg/960px-Ethiopian_wat.jpg', name: 'Doro Wat (Chicken Stew)' },
              { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop', name: 'Shekla Tibs (Sautéed Meat)' },
              { src: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop', name: 'Shiro Wat (Chickpea Stew)' },
              { src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1200&auto=format&fit=crop', name: 'Tibs Firfir' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative h-64 rounded-luxury overflow-hidden shadow-lg cursor-pointer group"
              >
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <span className="text-white font-playfair text-lg font-bold">
                    {item.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Restaurant
