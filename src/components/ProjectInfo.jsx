import React from "react";
import "./ProjectInfo.css";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger) 



const ProjectInfoCard = () => {
    return (
    <div className="info-card p-4">
        <div className="text-wrapper inter-semi">Thoughts</div>
        <p className="lead mb-4 text-white inconsolata-strong py-3">
            My very elaborate and insightful thoughts about this project
        </p>
    </div> );
};

const ProjectInfo = () => {

    useGSAP(() => {
        gsap.set('.info-card', {position: 'absolute'})
    
        gsap.from('.info-card', {
            yPercent: 100,
            stagger: 0.5,
            scrollTrigger: {
                trigger: '.info-card-container',
                markers: true,
                start: 'top 20%',
                scrub: 0.5,
                pin: '#four'
            }
        })
    
    }    
    )


    return (
        <div className="info-card-container col-lg-5 p-0">
            <ProjectInfoCard/>
            <ProjectInfoCard/>
            <ProjectInfoCard/>
            <ProjectInfoCard/>
            <ProjectInfoCard/>
        </div>
    );
};


export default ProjectInfo;
