import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
        <div className="frame col-md" id={props.id}>
            <div className="div">
                <div className="text-wrapper lead text-white inconsolata-strong ">{props.header}</div>
                <p className="p mb-4 text-white inconsolata-strong">{props.content}</p>
            </div>
            <div className="div-2">
                <div className="div-wrapper">
                    <div className="text-wrapper-2 lead text-white header-font-inter">{props.tagOne}</div>
                </div>
                <div className="div-wrapper">
                    <div className="text-wrapper-2 lead text-white header-font-inter">{props.tagTwo}</div>
                </div>
                <img className="icon-smile" alt="Icon smile" src={props.img} />
            </div>
        </div>
    );
};

export default Card