import React from 'react'

const MainCard = (props) => {
    return (
        <div className="px-4 py-5 vh-100 text-start d-flex align-items-center bg-primary-black border-0" id={props.id}>
            <div className="col-lg-6 mx-auto">
                <h1 className="display-2 fw-bold text-body-emphasis text-accent-orange header-font-inter">{props.header}</h1>
                <p className="lead mb-4 text-white inconsolata-strong">{props.paragraph}</p>
            </div>
        </div>
    )
}

const SectionCard = (props) => {
    return (
        <div className="px-4 py-5 vh-100 text-start d-flex align-items-center bg-primary-black border-0" id={props.id}>
            <div className="col-lg-6 mx-auto">
                <h2 className="display-5 fw-bold text-body-emphasis text-accent-orange header-font-inter">{props.header}</h2>
                <p className="lead mb-4 text-white inconsolata-strong">{props.paragraph}</p>
            </div>
        </div>
    )
}

export {SectionCard, MainCard}