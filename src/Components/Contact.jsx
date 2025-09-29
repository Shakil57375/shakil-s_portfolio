'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPhone } from 'react-icons/fi';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { IoLocationOutline } from 'react-icons/io5';
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    from_name: '',
    user_email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        'service_prc4pqj', // Your Service ID from the images
        'template_4pbavrf', // Your Template ID from the images
        {
          from_name: form.from_name,
          user_email: form.user_email,
          message: form.message,
        },
        'znPFbB32RpLb9p65c' // You need to add your EmailJS public key here
      );

      setLoading(false);
      setSuccess(true);

      // Reset form after success
      setTimeout(() => {
        setForm({
          from_name: '',
          user_email: '',
          message: '',
        });
        setSuccess(false);
      }, 3000);
    } catch (error) {
      setLoading(false);
      console.error('Error sending email:', error);
      toast.error('Failed to send message. Please try again.');
    }
  };

  // Enhanced Section Title Component
  const SectionTitle = ({ title }) => (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="text-center mb-16"
    >
      <motion.h2
        className="text-6xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-200 to-purple-200 font-Montserrat"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.h2>
    </motion.div>
  );

  // Enhanced Gradient Background Component
  const GradientBackground = ({ className }) => (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.4 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
      className={className}
    />
  );

  return (
    <section
      id="directContact"
      className="paddingX paddingY text-white relative min-h-screen"
    >
      <SectionTitle title="Contact Me" />

      <GradientBackground className="absolute top-20 right-4 bg-blue-800 blur-[120px] w-96 h-80 opacity-40" />
      <GradientBackground className="absolute top-60 left-0 bg-rose-700 blur-[120px] w-96 h-80 opacity-40" />

      <div className="flex lg:flex-row flex-col justify-between items-start mt-12 gap-10 lg:px-0 px-2">
        {/* Left side - Contact info */}
        <motion.div
          className="basis-full lg:basis-1/2 space-y-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-3xl font-Poppins font-semibold mb-4">
              Drop me a Message
            </h3>
            <p className="text-sm font-Poppins leading-7 text-gray-300">
              As a passionate front-end developer, I thrive on turning ideas
              into visually stunning and interactive web experiences. Whether
              you have a project in mind, need help solving a coding challenge,
              or just want to chat about the latest web technologies, I am here
              for you!
            </p>
          </motion.div>

          <div className="space-y-7">
            {[
              {
                icon: FiPhone,
                text: '+880 1814265294',
                color: 'text-blue-400',
              },
              {
                icon: HiOutlineMailOpen,
                text: 'shakil57375@gmail.com',
                color: 'text-pink-400',
              },
              {
                icon: IoLocationOutline,
                text: 'Barura, Cumilla, Bangladesh',
                color: 'text-purple-400',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 group cursor-pointer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <item.icon
                  className={`text-3xl ${item.color} group-hover:scale-110 transition-transform duration-300`}
                />
                <p className="text-xl group-hover:text-white transition-colors duration-300">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right side - Contact form */}
        <motion.div
          className="basis-full lg:basis-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-6"
            >
              {[
                {
                  name: 'from_name',
                  type: 'text',
                  placeholder: "What's your good name?",
                  label: 'Your Name *',
                },
                {
                  name: 'user_email',
                  type: 'email',
                  placeholder: "What's your web address?",
                  label: 'Your Email *',
                },
                {
                  name: 'message',
                  type: 'textarea',
                  placeholder: 'What you want to say?',
                  label: 'Your Message *',
                  rows: 5,
                },
              ].map((field, index) => (
                <motion.label
                  key={field.name}
                  className="flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <span className="text-lg text-white font-medium mb-3">
                    {field.label}
                  </span>
                  {field.type === 'textarea' ? (
                    <motion.textarea
                      name={field.name}
                      required
                      rows={field.rows}
                      value={form[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="py-4 px-6 placeholder:text-gray-400 border border-gray-600/50 focus:border-pink-500/50 rounded-xl font-medium bg-gray-800/50 backdrop-blur-sm outline-none focus:outline-none text-white transition-all duration-300 focus:shadow-lg focus:shadow-pink-500/10"
                      whileFocus={{ scale: 1.02 }}
                    />
                  ) : (
                    <motion.input
                      type={field.type}
                      name={field.name}
                      required
                      value={form[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="py-4 px-6 placeholder:text-gray-400 border border-gray-600/50 focus:border-pink-500/50 rounded-xl font-medium bg-gray-800/50 backdrop-blur-sm outline-none focus:outline-none text-white transition-all duration-300 focus:shadow-lg focus:shadow-pink-500/10"
                      whileFocus={{ scale: 1.02 }}
                    />
                  )}
                </motion.label>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex justify-center mt-4"
              >
                <AnimatePresence mode="wait">
                  {success ? (
                    <motion.div
                      key="success"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="flex items-center gap-3 py-4 px-8 bg-green-600 text-white rounded-xl font-bold"
                    >
                      <FaCheckCircle />
                      <span>Message Sent Successfully!</span>
                    </motion.div>
                  ) : (
                    <motion.button
                      key="submit"
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative py-4 px-8 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-pink-500/25 transition-all duration-300 overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <span className="relative z-10 flex items-center gap-3">
                        {loading ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: 'linear',
                              }}
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <FaPaperPlane />
                            <span>Send Message</span>
                          </>
                        )}
                      </span>
                    </motion.button>
                  )}
                </AnimatePresence>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
