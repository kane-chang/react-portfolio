import React, {useEffect} from 'react'
import Card from './Card'
import ProjectCard from './ProjectCard';
import ProjectInfo from './ProjectInfo';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger) 

const MainCard = (props) => {
    return (
        <div className="px-4 py-5 vh-100 text-start d-flex align-items-center border-0 front" id={props.id}>
            <div className="col-lg-10 mx-auto">
                <h1 className="display-2 fw-bold text-body-emphasis text-accent-orange header-font-inter">{props.header}</h1>
                <p className="lead mb-4 text-white inconsolata-strong">{props.paragraph}</p>
            </div>
        </div>
    )
}

const SectionCard = (props) => {
    return (
        <div className={"px-4 py-5 vh-100 text-start d-flex align-items-center border-0"} id={props.id}>
            <div className="col-lg-10 mx-auto">
                <h2 className="display-5 fw-bold text-body-emphasis text-accent-orange header-font-inter">{props.header}</h2>
                <p className="lead mb-4 text-white inconsolata-strong">{props.paragraph}</p>
            </div>
        </div>
    )
}

const AboutCard = (props) => {

    useGSAP(() => {
        gsap.from(".frame", {
            scrollTrigger: {
                trigger: '.frame'
            },
            x: 800,
            opacity: 0,
            stagger: 0.8,
            duration: 1, 
            ease: "power4.Out"
        })
      });


    return (
        <div className={"px-4 py-5 vh-100 text-start d-flex align-items-center border-0 front"} id={props.id}>
            <div className="col-lg-10 mx-auto">
                <h2 className="display-2 fw-bold text-body-emphasis text-accent-orange header-font-inter">{props.header}</h2>
                <p className="lead mb-4 text-white inconsolata-strong">{props.paragraph}</p>
                <div className='container-fluid'>
                    <div className='row column-gap-3'>
                        <Card header="Characteristics" content="Very good and short and sweet description of this quality blah blah blah" tagOne="Personality" tagTwo="Story" img="smile.svg" id='a'/>
                        <Card header="Technical Skills" content="Very good and short and sweet description of this quality blah blah blah" tagOne="Hard Skills" tagTwo="Tech" img="gear.svg" id='b'/>
                        <Card header="Soft Skills" content="Very good and short and sweet description of this quality blah blah blah" tagOne="Soft Skills" tagTwo="People" img="entypo_chat.svg" id='c'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ProjectSection = (props) => {
    return (
        <div className={"px-4 py-5 vh-100 text-start d-flex align-items-start border-0"} id={props.id}>
            <div className="col-lg-10 mx-auto">
                <div className='project-container container'>
                    <div className='row'>
                        <ProjectCard id="projectOne" header="Project 1" paragraph="Very captivating and inspiring and effective description of the project"></ProjectCard>
                        <ProjectInfo />
                    </div>
                </div>
            </div>
        </div>
    )
}


export {SectionCard, MainCard, AboutCard, ProjectSection}