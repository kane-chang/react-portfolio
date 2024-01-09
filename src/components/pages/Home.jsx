import React from 'react';
import {MainCard, SectionCard} from '../SectionCard';

function Home() {
  return (
    <>
      <MainCard header=".kane-chang" paragraph="Software Developer" id="home"/>
      <SectionCard header="This is me." paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat ipsam delectus accusantium id nulla tempore odio provident adipisci odit nobis. Corporis
                molestias, illum deleniti animi soluta inventore quaerat architecto saepe?" id="intro"/>
      <SectionCard header="let background = {" paragraph="asdsd" id="intro"/>
      <SectionCard header="Project 1" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat ipsam delectus accusantium id nulla tempore odio provident adipisci odit nobis. Corporis
                molestias, illum deleniti animi soluta inventore quaerat architecto saepe?" id="projectOne"/>
      <SectionCard header="Project 2" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat ipsam delectus accusantium id nulla tempore odio provident adipisci odit nobis. Corporis
                molestias, illum deleniti animi soluta inventore quaerat architecto saepe?" id="projectTwo"/>
    </>
  );
}

export default Home;
