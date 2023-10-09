import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import Aboutme from './Components/Aboutme';
import Skills from './Components/Skills';
import Education from './Components/Education';
import { useSpring, animated } from '@react-spring/web';
import { InView } from 'react-intersection-observer';
import Footer from './Components/Footer';
import Form from './Components/Form';

const App = () => {
  return (
    <div>
      <Navbar />
      <InView triggerOnce>
        {({ inView, ref }) => (
          <animated.div
            ref={ref}
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 2s, transform 2s',
              delay: 1000, // Custom delay in milliseconds
            }}
          >
            <Landing />
          </animated.div>
        )}
      </InView>
      <InView triggerOnce>
        {({ inView, ref }) => (
          <animated.div
            ref={ref}
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 2s, transform 2s',
              delay: 2000, // Custom delay in milliseconds
            }}
          >
            <Aboutme />
          </animated.div>
        )}
      </InView>
      <InView triggerOnce>
        {({ inView, ref }) => (
          <animated.div
            ref={ref}
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 2s, transform 2s',
              delay: 3000, // Custom delay in milliseconds
            }}
          >
            <Skills />
          </animated.div>
        )}
      </InView>
      <InView triggerOnce>
        {({ inView, ref }) => (
          <animated.div
            ref={ref}
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 3.5s, transform 3.5s',
              delay: 4000, // Custom delay in milliseconds
            }}
          >
            <Education />
          </animated.div>
        )}
      </InView>
      
      
      <InView triggerOnce>
        {({ inView, ref }) => (
          <animated.div
            ref={ref}
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 3.5s, transform 3.5s',
              delay: 4000, // Custom delay in milliseconds
            }}
          >
            <Form/>
          </animated.div>
        )}
      </InView>
      
      <InView triggerOnce>
        {({ inView, ref }) => (
          <animated.div
            ref={ref}
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 3.5s, transform 3.5s',
              delay: 4000, // Custom delay in milliseconds
            }}
          >
            <Footer/>
          </animated.div>
        )}
      </InView>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
