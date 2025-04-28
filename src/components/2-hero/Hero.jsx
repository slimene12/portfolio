import './hero.css';
import developer from '../../animation/developer.json';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className='hero flex'>
      <div className='left-section'>
        <div className='parent-avator flex'>
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ damping: 8, type: 'spring', stiffness: 100 }}
            src='./khames.jpg'
            className='avator'
          />
          <span className='icon-verified'></span>
        </div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5 }}
          className='title'
        >
          From teaching math to building apps — I love solving problems and
          creating awesome web projects!
        </motion.h1>
        <p className='subtitle'>
          Hi, I’m khames, a full-stack developer with a passion for building
          modern, user-friendly web applications.
          <br /> Before diving into tech, I spent over 25 years teaching
          mathematics, which shaped my love for problem-solving and clear
          communication-skills I now bring into every project.
          <br /> I work mainly with React, Next.js, Tailwind CSS, Node.js, and
          databases like MongoDB and PostgreSQL using tools like Prisma ,Express
          and mongoose, Express and Sequelize, writing clean code in both
          JavaScript and TypeScript.
          <br /> Today, I’m excited to grow as a freelance developer, helping
          businesses and individuals bring their ideas to life through clean,
          efficient code.
        </p>
        <div className='icons flex'>
          <div className='icon icon-twitter'></div>
          <div className='icon icon-facebook'></div>
          <div className='icon icon-linkedin'></div>
          <div className='icon icon-instagram'></div>
        </div>
      </div>
      <div className='right-section animation '>
        <Lottie
          className='developer-animation'
          style={{ height: 400 }}
          animationData={developer}
          loop={true}
        />
      </div>
    </section>
  );
};

export default Hero;
