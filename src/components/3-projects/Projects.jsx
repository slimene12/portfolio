import './projects.css';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
const myProjects = [
  {
    title: 'react mui project1',
    category: ['react', 'mui'],
    imgPath: './1.jpg',
  },
  {
    title: 'html css javascript project',
    category: ['html', 'css', 'javascript'],
    imgPath: './2.jpg',
  },
  {
    title: 'react mui bootstrap project2',
    category: ['react', 'mui', 'bootstrap'],
    imgPath: './3.jpg',
  },
  {
    title: 'node express project',
    category: ['node', 'express'],
    imgPath: './4.jpg',
  },
  { title: 'javascript project', category: ['javascript'], imgPath: './5.jpg' },
  {
    title: 'javascript bootstrap project',
    category: ['javascript', 'bootstrap'],
    imgPath: './6.jpg',
  },
  { title: 'html css project', category: ['html', 'css'], imgPath: './7.jpg' },
  {
    title: 'html express project',
    category: ['express', 'html'],
    imgPath: './8.jpg',
  },
];

const Projects = () => {
  const [isActive, setIsActive] = useState('all');
  const [arr, setArr] = useState(myProjects);
  const handleClick = (category1, category2) => {
    const newArr = myProjects.filter((item) => {
      const hasCategory1 = item.category.includes(category1);
      const hasCategory2 = item.category.includes(category2);
      return hasCategory1 || hasCategory2;
    });
    setArr(newArr);
  };
  return (
    <main className='flex'>
      <section className='left-section  flex'>
        <button
          className={isActive === 'all' ? 'active' : null}
          onClick={() => {
            setIsActive('all');
            setArr(myProjects);
          }}
        >
          All Projects
        </button>
        <button
          className={isActive === 'css' ? 'active' : null}
          onClick={() => {
            setIsActive('css');
            handleClick('css', 'html');
          }}
        >
          Html & Css
        </button>
        <button
          className={isActive === 'javascript' ? 'active' : null}
          onClick={() => {
            setIsActive('javascript');
            handleClick('javascript', '');
          }}
        >
          Javascript
        </button>
        <button
          className={isActive === 'react' ? 'active' : null}
          onClick={() => {
            setIsActive('react');
            handleClick('mui', 'react');
          }}
        >
          React & MUI
        </button>
        <button
          className={isActive === 'node' ? 'active' : null}
          onClick={() => {
            setIsActive('node');
            handleClick('node', 'express');
          }}
        >
          Node & Express
        </button>
      </section>
      <section className='right-section flex'>
        {arr.map((item) => {
          return (
            <AnimatePresence key={item.imgPath}>
              <motion.article
                layout
                initial={{ transform: 'scale(0)' }}
                animate={{ transform: 'scale(1)' }}
                transition={{ type: 'spring', damping: 8, stiffness: 20 }}
                className='card '
              >
                <img src={item.imgPath} alt='' width='270' height='170' />
                <div style={{ width: 270 }} className='box '>
                  <h1 className='title'>{item.title} </h1>
                  <p className='subtitle'>
                    dhsjfgdf dfkjdgdsk fkjdskjfklkl dksjfkjdf sfkjdskfjhkjd
                    fjkfksjdgfsd sdfkjsdfsdjkj fskjdlkjh fjsdfjks
                  </p>
                  <div className='icons flex'>
                    <div className='flex' style={{ gap: 11 }}>
                      <div className='icon-external-link'></div>
                      <div className='icon-github'></div>
                    </div>
                    <a className='more flex' href=''>
                      more <span className='icon-long-arrow-right'></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          );
        })}
      </section>
    </main>
  );
};

export default Projects;
