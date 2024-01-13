import React from 'react'
import Card from './Card'

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
        <div className={"px-4 py-5 vh-100 text-start d-flex align-items-center border-0 bg-primary-black"} id={props.id}>
            <div className="col-lg-10 mx-auto">
                <h2 className="display-5 fw-bold text-body-emphasis text-accent-orange header-font-inter">{props.header}</h2>
                <p className="lead mb-4 text-white inconsolata-strong">{props.paragraph}</p>
            </div>
        </div>
    )
}

const AboutCard = (props) => {
    return (
        <div className={"px-4 py-5 vh-100 text-start d-flex align-items-center border-0 bg-primary-black"} id={props.id}>
            <div className="col-lg-10 mx-auto">
                <h2 className="display-5 fw-bold text-body-emphasis text-accent-orange header-font-inter">{props.header}</h2>
                <p className="lead mb-4 text-white inconsolata-strong">{props.paragraph}</p>
                <div className='container-fluid'>
                    <div className='row'>
                        <Card header="Characteristics" content="Very good and short and sweet description of this quality blah blah blah" tagOne="Personality" tagTwo="Strengths" img="public\smile.svg"/>
                        <Card header="Technical Skills" content="Very good and short and sweet description of this quality blah blah blah" tagOne="Hard Skills" tagTwo="Tech" img="public\gear.svg"/>
                        <Card header="Soft Skills" content="Very good and short and sweet description of this quality blah blah blah" tagOne="Soft Skills" tagTwo="People" img="public\entypo_chat.svg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {SectionCard, MainCard, AboutCard}