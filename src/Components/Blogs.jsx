'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaXmark,
  FaCalendar,
  FaUser,
  FaArrowRight,
  FaEye,
} from 'react-icons/fa6';
import { RichTextDisplay } from '../Utils/RichTextDisplay';
import blogs from '../Data/BlogsData';

// Sample blog data with actual generated images and full content


// Enhanced Blog Card Component with Read More functionality
const BlogCard = ({ blog, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl overflow-hidden shadow-2xl hover:shadow-pink-500/20 transition-all duration-500"
      layout
    >
      {/* Animated gradient border */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

      {/* Image container with overlay */}
      <div className="relative overflow-hidden">
        <motion.img
          src={blog.image}
          alt={blog.title}
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />

        {/* Category badge */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.3 }}
          className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-semibold rounded-full"
        >
          {blog.category}
        </motion.div>

        {/* Views counter */}
        <div className="absolute top-4 right-4 flex items-center gap-1 text-white/80 text-xs">
          <FaEye />
          <span>{blog.views.toLocaleString()}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative z-10">
        <motion.h3
          className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400 transition-all duration-300"
          whileHover={{ scale: 1.02 }}
        >
          {blog.title}
        </motion.h3>

        <AnimatePresence mode="wait">
          {!isExpanded ? (
            <motion.p
              key="excerpt"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed"
            >
              {blog.excerpt}
            </motion.p>
          ) : (
            <motion.div
              key="fullContent"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="text-gray-300 text-sm mb-4 leading-relaxed overflow-hidden"
            >
              {blog.fullContent?.split('\n').map((paragraph, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="mb-3"
                >
                  <RichTextDisplay content={paragraph} />
                </motion.p>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Meta information */}
        <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <FaUser className="text-pink-400" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaCalendar className="text-blue-400" />
              <span>{new Date(blog.date).toLocaleDateString()}</span>
            </div>
          </div>
          <span className="text-purple-400 font-medium">{blog.readTime}</span>
        </div>

        <motion.button
          onClick={toggleExpanded}
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-white font-medium group-hover:text-pink-400 transition-colors duration-300"
        >
          <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
          <motion.div
            animate={{
              x: isHovered ? 5 : 0,
              rotate: isExpanded ? 180 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <FaArrowRight className="text-sm" />
          </motion.div>
        </motion.button>
      </div>

      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-pink-400 rounded-full"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
            }}
            animate={{
              y: [-10, -20, -10],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

// Enhanced Section Title Component
const SectionTitle = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="text-center mb-16"
    >
      <motion.h2
        className="text-6xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-200 to-purple-200 font-Montserrat mb-4"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-300 text-lg max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

// Enhanced Gradient Background Component
const GradientBackground = ({ className }) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.4 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
      className={className}
    />
  );
};

// Main Blogs Component
const Blogs = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(4);
  const [showMoreBlogs, setShowMoreBlogs] = useState(false);

  const toggleBlogs = () => {
    setShowMoreBlogs(!showMoreBlogs);
    if (!showMoreBlogs) {
      setVisibleBlogs(blogs.length);
    } else {
      setVisibleBlogs(4);
    }
  };

  return (
    <div id="blogs" className="paddingX paddingY relative z-30 min-h-screen">
      {/* Header section */}
      <div className="flex items-start justify-between mb-8">
        <SectionTitle
          title="My Blogs"
          subtitle="Insights, tutorials, and thoughts on modern web development"
        />
        <motion.div
          initial={{ rotate: 0, scale: 0 }}
          animate={{ rotate: 180, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ rotate: 360, scale: 1.1 }}
        >
          <FaXmark className="text-6xl lg:text-8xl text-white/20 lg:block hidden" />
        </motion.div>
      </div>

      {/* Animated gradient backgrounds */}
      <GradientBackground className="absolute top-80 left-4 bg-pink-700 blur-[120px] w-96 h-80 opacity-40" />
      <GradientBackground className="absolute top-20 right-4 bg-fuchsia-900 blur-[120px] w-96 h-80 opacity-40" />
      <GradientBackground className="absolute top-96 right-28 bg-blue-800 blur-[120px] w-96 h-80 opacity-40" />
      <GradientBackground className="absolute top-[500px] right-[500px] bg-rose-800 blur-[120px] w-96 h-80 opacity-40" />

      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Blog grid */}
      <motion.div
        className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-10 mt-20 lg:px-0 px-2"
        layout
      >
        <AnimatePresence mode="popLayout">
          {blogs.slice(0, visibleBlogs).map((blog, index) => (
            <BlogCard key={blog.id} blog={blog} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Show more/less button */}
      <motion.div
        className="flex justify-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <motion.button
          onClick={toggleBlogs}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="relative px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-pink-500/25 transition-all duration-300 overflow-hidden group"
        >
          {/* Button background animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Button text */}
          <span className="relative z-10 flex items-center gap-2">
            {showMoreBlogs ? 'Show Less Blogs' : 'Show More Blogs'}
            <motion.div
              animate={{ rotate: showMoreBlogs ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaArrowRight />
            </motion.div>
          </span>

          {/* Ripple effect */}
          <motion.div
            className="absolute inset-0 bg-white/20 rounded-full scale-0"
            whileTap={{ scale: 4, opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Blogs;
