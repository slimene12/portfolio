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
          Software,designer,founder,and amateur astronaut
        </motion.h1>
        <p className='subtitle'>
          Do voluptate Lorem ullamco ullamco pariatur culpa voluptate occaecat
          sunt culpa commodo pariatur mollit. Duis nostrud et do anim proident
          reprehenderit aliqua.
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
