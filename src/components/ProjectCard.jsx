import React from 'react'
import "./ProjectCard.css"

const ProjectCard = (props) => {
  return (
    <div id={props.id} className='project-card col-lg-7 py-5 border-1'>
        <h2 className="display-4 fw-bold text-body-emphasis header-font-inter text-white">{props.header}</h2>
        <p className="lead mb-4 text-white inconsolata-strong">{props.paragraph}</p>
        <div className='tags my-5 py-5 d-inline-flex gap-2'>
            <div className='tag-frame' id="view-frame">
            <div className="display-5 text-wrapper-2 lead text-white header-font-inter px-2">View</div>
            </div>
            
            <div className='tag-frame'>
                <img className="icon-up-arrow" alt="Icon up arrow" src="up-arrow.svg"/>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard