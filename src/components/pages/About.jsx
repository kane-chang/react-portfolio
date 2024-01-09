import React from 'react';
import {MainCard, SectionCard} from '../SectionCard';

function About() {
  return (
    <>
    <MainCard header="About(Me)" paragraph="Philosophy graduate turned web developer addict" id="aboutMe"/>
    <SectionCard header="This is me." paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Placeat ipsam delectus accusantium id nulla tempore odio provident adipisci odit nobis. Corporis
              molestias, illum deleniti animi soluta inventore quaerat architecto saepe?" id="aboutIntro"/>
    </>
  );
}

export default About; 
