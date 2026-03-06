
import React, { useRef, useEffect } from 'react';
import individualProduct1Styles from './individualProduct1.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import illustration1 from '../../assets/illustration.png';
import illustration2 from '../../assets/illustration.png';

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    image: illustration1,
    title: 'Title 1',
    description: 'Description for section 1',
  },
  {
    image: illustration2,
    title: 'Title 2',
    description: 'Description for section 2',
  },
];


const IndividualProduct1 = () => {
    const sectionsRef = useRef([]);
  const imageRefs = useRef([]);
  const textRefs = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=1000',
          scrub: true,
          pin: true,
        },
      });

      tl.to(imageRefs.current[index], {
        width: '50vw',
        ease: 'power2.out',
      }).fromTo(textRefs.current[index], {
        opacity: 0,
        x: 100,
      }, {
        opacity: 1,
        x: 0,
        ease: 'power2.out',
      });
    });
  }, []);
  return (
    <div>
      {data.map((item, i) => (
        <div
          key={i}
          ref={(el) => (sectionsRef.current[i] = el)}
          className={individualProduct1Styles.main}
        >
          <div className={individualProduct1Styles.details}>
            <img
              ref={(el) => (imageRefs.current[i] = el)}
              src={item.image}
              alt=""
              className={individualProduct1Styles.image}
            />
            <div
              ref={(el) => (textRefs.current[i] = el)}
              className={individualProduct1Styles.text}
            >
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default IndividualProduct1