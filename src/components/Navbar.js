import React from 'react'

export default function Navbar(props) {
    return (
        <>

            <div className="jumbotron">

                <a className="navbar-brand ms-5" href="/" style={{ fontSize: "50px" }}> <strong> UserBook </strong></a>
                <p style={{ color: "rgb(0,0,255)", fontSize: "25px" }}>TASKS 2: CREATE A WEB APPLICATION USING CREATE-REACT-APP</p>
            
                <button className="btn btn-primary btn-lg" onClick={props.handleRequest}>Get Users</button>
            </div>
        </>
    )
}