import React from 'react';

const Pill = ({image,text,onClick}) => {
  console.log(text);
  return (
    <span className="user-pill" onClick={onClick}>
        <img src={image} alt={text}/>
        <span>{text}</span>
    </span>
  );
};

export default Pill;