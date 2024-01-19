import React from "react";
import "./ProjectInfo.css";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ProjectInfoCard = (props) => {
    return (
        <div className="info-card p-4">
            <div className="text-wrapper inter-semi">{props.header}</div>
            <p className="lead mb-4 text-white inconsolata-strong py-3">
                {props.p}
            </p>
        </div>
    );
};

const ProjectInfo = () => {
    useGSAP(() => {
        gsap.set(".info-card", { position: "absolute" });

        gsap.from(".info-card", {
            yPercent: 100,
            stagger: 0.5,
            scrollTrigger: {
                trigger: ".info-card-container",
                // markers: true,
                start: "top 20%",
                scrub: 0.5,
                pin: "#three",
                pinSpacing: false,
            },
        });
    });

    return (
        <div className="info-card-container col-lg-5 p-0">
            <ProjectInfoCard
                header="My Role"
                p="Project Lead & Javascript Developer"
            />
            <ProjectInfoCard
                header="Background"
                p="This project was because reason 1 reason 2 reason 3 and we thought we should 12345 and we did so it was great"
            />
            <ProjectInfoCard header="Tech Stack" p="<insert tech list>" />
            <ProjectInfoCard header="Sneak Peek" p="Insert image here" />
            <ProjectInfoCard
                header="Closing Thoughts"
                p="My very elaborate and insightful thoughts about this project"
            />
        </div>
    );
};

export default ProjectInfo;
