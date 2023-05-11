import React from 'react'

export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode === "dark" ? "dark" : "light"} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Textutils</a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                {/* <a className="nav-link" href="/about">About</a> */}
                            </li>


                        </ul>
                        <div className="d-flex">
                            <div className='bg-primary rounded mx-2' onClick={() => { props.toggle("primary") }} style={{ width: "30px", height: "30px" }}></div>
                            <div className='bg-danger rounded mx-2' onClick={() => { props.toggle("danger") }} style={{ width: "30px", height: "30px" }}></div>
                            <div className='bg-success rounded mx-2' onClick={() => { props.toggle("success") }} style={{ width: "30px", height: "30px" }}></div>
                            <div className='bg-warning rounded mx-2' onClick={() => { props.toggle("warning") }} style={{ width: "30px", height: "30px" }}></div>
                        </div>
                        <div className="d-flex form-check form-switch mx-2">
                            <input className="form-check-input" onClick={() => { props.toggle(null) }} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className={`form-check-label mx-1 text-${props.mode === "dark" ? "light" : "dark"}`} htmlFor="flexSwitchCheckDefault">Enable modes</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
