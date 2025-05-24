import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const testimonials = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/3663530/pexels-photo-3663530.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/1821095/pexels-photo-1821095.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/2387874/pexels-photo-2387874.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: 3,
      spacing: 24,
    },
    loop: true,
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 2, spacing: 16 },
      },
      "(max-width: 640px)": {
        slides: { perView: 1, spacing: 16 },
      },
    },
    created() {
      setLoaded(true);
    },
  });

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, 3000);

    return () => {
      clearInterval(autoplayInterval);
    };
  }, [instanceRef]);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimoni Pelanggan</h2>
          <p className="text-secondary-600 max-w-2xl mx-auto">
            Pengalaman pelanggan yang telah menggunakan layanan rental mobil kami.
          </p>
        </motion.div>

        <div className="relative">
          <div ref={sliderRef} className="keen-slider">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="keen-slider__slide">
                <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
                  <img
                    src={testimonial.image}
                    alt={`Testimonial ${testimonial.id}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {loaded && instanceRef.current && (
            <div className="flex justify-center gap-2 mt-6">
              {[...Array(testimonials.length)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === idx ? 'bg-primary-600 scale-110' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;