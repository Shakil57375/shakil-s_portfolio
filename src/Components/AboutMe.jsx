'use client';
import about_img from '../assets/shakil_about_image.png';
import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';

const AboutMe = () => {
  const [counterOn, setCounterOn] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { threshold: 0.3 });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setCounterOn(isStatsInView);
  }, [isStatsInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: 'easeInOut',
      },
    },
  };

  const skills = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React.js',
    'Node.js',
    'MongoDB',
    'Express.js',
    'Tailwind CSS',
    'Bootstrap',
    'Firebase',
    'JWT',
    'Git',
  ];

  const stats = [
    {
      number: 15,
      label: 'Projects Completed',
      color: 'from-blue-400 to-cyan-400',
    },
    { number: 8, label: 'Happy Clients', color: 'from-purple-400 to-pink-400' },
    {
      number: 2,
      label: 'Years Experience',
      color: 'from-green-400 to-emerald-400',
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Section Title */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'linear',
            }}
            style={{
              backgroundSize: '200% 200%',
            }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {/* Image Section */}
          <motion.div className="relative" variants={itemVariants}>
            <motion.div
              className="relative z-10"
              variants={floatingVariants}
              animate="animate"
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-30"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'easeInOut',
                  }}
                />
                <img
                  src={about_img}
                  alt="About Shakil"
                  className="relative z-10 w-full max-w-md mx-auto rounded-3xl shadow-2xl border border-gray-700/50"
                />
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full opacity-20 blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'linear',
              }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 blur-xl"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 0],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'linear',
              }}
            />
          </motion.div>

          {/* Content Section */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.div
              className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30"
              whileHover={{
                scale: 1.02,
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.p
                className="text-gray-300 text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                I am a passionate{' '}
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-semibold">
                  Full-Stack Developer
                </span>{' '}
                with expertise in modern web technologies. I specialize in
                creating exceptional user experiences with clean, efficient code
                and innovative solutions.
              </motion.p>
            </motion.div>

            {/* Skills Grid */}
            <motion.div
              className="grid grid-cols-3 md:grid-cols-4 gap-3"
              variants={itemVariants}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="px-3 py-2 bg-gradient-to-r from-gray-800/60 to-gray-700/60 rounded-lg text-center text-sm font-medium text-gray-300 border border-gray-600/30 backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    borderColor: 'rgba(59, 130, 246, 0.3)',
                  }}
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              ref={statsRef}
              className="grid grid-cols-3 gap-6"
              variants={itemVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/30"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                    animate={{
                      scale: counterOn ? [1, 1.1, 1] : 1,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {counterOn && (
                      <CountUp
                        start={0}
                        end={stat.number}
                        duration={2}
                        delay={0}
                      />
                    )}
                    +
                  </motion.div>
                  <p className="text-gray-400 text-sm font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div className="flex justify-center" variants={itemVariants}>
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <span id="directContact" className="relative z-10">
                  Let's Work Together!
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
