import React, { useState, useRef, useEffect } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Background from '../components/Background';
import {MainCard, SectionCard, AboutCard} from '../components/SectionCard';

gsap.registerPlugin(ScrollTrigger) 

function Home() {
  const bgColors = {
    color1: "255,160,0",
    color2: "255,64,129",
    color3: "92,107,192",
    color4: "198,255,0",
    color5: "171,71,188",
  }

  const [color, setColor] = useState(
    bgColors.color1
  )

  // const homeContainer = useRef(null)


  //   useEffect(() => {
  //     // Pin the "home" div on scroll using GSAP
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: '#home',
  //         start: 'top top',
  //         end: '+=1000',
  //         pin: true,
  //         scrub: 1, // Smooth scrolling effect
  //         markers: {startColor: "white", endColor: "white", fontSize: "18px", fontWeight: "bold", indent: 20}
  //       },
  //     });
  
  //     // // Additional animations can be added within the timeline
  //     // tl.from('#home', { opacity: 0, duration: 1 });
  
  //     // Cleanup GSAP instances when the component unmounts
  //     return () => {
  //       tl.kill(); // Kill the timeline to avoid memory leaks
  //     };
  //   }, []); // Run the effect only once on mount
  // const [color, setColor] = useState({
  //   color: bgColors.color1
  // })

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#bg',
        start: 'top top',
        endTrigger: '#five',
        end: 'bottom +=100',
        pin: true,
        scrub: 1,
        markers: {startColor: "white", endColor: "red", fontSize: "18px", fontWeight: "bold", indent: 20}
      }
    })
    // .to("#ghibli", {opacity: 0.8, duration: 3})
    //   .to("#ghibli", {
    //     scrollTrigger: {
    //       trigger: '#ghibli',
    //       start: 'top top',
    //       pin: "#ghibli",
    //       endTrigger: '.text-container3',
    //       end: 'bottom bottom',
    //     }
    //   })

    ScrollTrigger.create({
      trigger: '#about',
      start: 'top +=200px',
      
      onUpdate: (self) => {
        if (self.direction > 0 && self.progress < 0.15) {
          setColor(bgColors.color2)
        } else if (self.direction < 0 && self.progress < 0.15) {
          setColor(bgColors.color1)
        }
      },
    })

    ScrollTrigger.create({
      trigger: '#four',
      start: 'top +=200px',
      onUpdate: (self) => {
        if (self.direction > 0 && self.progress < 0.15) {
          setColor(bgColors.color3)
        } else if (self.direction < 0 && self.progress < 0.15) {
          setColor(bgColors.color2)
        }
      }
    })

    ScrollTrigger.create({
      trigger: '#five',
      start: 'top +=200px',
      onUpdate: (self) => {
        if (self.direction > 0 && self.progress < 0.15) {
          setColor(bgColors.color4)
        } else if (self.direction < 0 && self.progress < 0.15) {
          setColor(bgColors.color3)
        }
      }
    })


    

    
    return () => {
      tl.kill()
      };


  }, []);


  return (
    <div className="homeContainer">
      
      <Background color = {color}/>
      <MainCard header=".kane-chang" paragraph="Software Developer" id="home"/>
      {/* <SectionCard header="" paragraph=""/> */}
      <AboutCard header="This is me." paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat ipsam delectus accusantium id nulla tempore odio provident adipisci odit nobis. Corporis
                molestias, illum deleniti animi soluta inventore quaerat architecto saepe?" id="about"/>
      <SectionCard header="let background = {" paragraph="asdsd" id="three"/>
      <SectionCard header="Project 1" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat ipsam delectus accusantium id nulla tempore odio provident adipisci odit nobis. Corporis
                molestias, illum deleniti animi soluta inventore quaerat architecto saepe?" id="four"/>
      <SectionCard header="Project 2" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat ipsam delectus accusantium id nulla tempore odio provident adipisci odit nobis. Corporis
                molestias, illum deleniti animi soluta inventore quaerat architecto saepe?" id="five"/>
    </div>
  );
}

export default Home;
