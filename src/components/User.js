import React from 'react'
import './User.css';

export default function User(props) {
  let name = props.Fname + " " + props.Lname;
  return (
    <div className="box">

        <div className="card-body">
          <div className="card-img-top">
          <img src={props.avatar} alt="avatar" />
          </div>
          <div className="details">
          {/* <h4 className="card-title">{name}</h4>
          <p className="card-text">{props.email}</p> */}
          <h2>{name}<span>{props.email}</span></h2>
          </div>
        </div>
    </div>
  )
}
