import React from 'react';
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Background from '../components/Background';
import {MainCard, SectionCard, AboutCard} from '../components/SectionCard';

gsap.registerPlugin(ScrollTrigger) 

function Home() {

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
  

  return (
    <div className="homeContainer">
      
      <Background/>
      <MainCard header=".kane-chang" paragraph="Software Developer" id="home"/>
      <SectionCard header="" paragraph=""/>
      <AboutCard header="This is me." paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat ipsam delectus accusantium id nulla tempore odio provident adipisci odit nobis. Corporis
                molestias, illum deleniti animi soluta inventore quaerat architecto saepe?" id="about"/>
      <SectionCard header="let background = {" paragraph="asdsd" id="intro"/>
      <SectionCard header="Project 1" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat ipsam delectus accusantium id nulla tempore odio provident adipisci odit nobis. Corporis
                molestias, illum deleniti animi soluta inventore quaerat architecto saepe?" id="projectOne"/>
      <SectionCard header="Project 2" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat ipsam delectus accusantium id nulla tempore odio provident adipisci odit nobis. Corporis
                molestias, illum deleniti animi soluta inventore quaerat architecto saepe?" id="projectTwo"/>
    </div>
  );
}

export default Home;
