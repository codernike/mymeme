import React, { Component } from 'react'


export default class navbar extends Component {
  render() {
   
    return (
      <>
      <nav className="navbar navbar-expand-md  sticky-top navbar-light bg-light">
          <div className="container "> 
            <a className="navbar-brand d-flex" href="/"><img src='https://freepngimg.com/save/97579-meme-doge-free-png-hq/728x724' id='imgstyle' style={{height:'36px'}} alt='logo'/> Memepie</a>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="visually-hidden">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/quiz">Quiz</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"  href="/moregames">Meme's</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"  href="/mememaker">Mememaker</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a href='/' className="nav-link dropdown-toggle" id="dropdownId" data-bs-toggle="dropdown"  aria-expanded="false">More</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <a className="dropdown-item" href="/form">Signup </a>
                            <a className="dropdown-item" href="/login">Login</a>
                        </div>
                    </li>
                </ul>
                <form className="d-flex my-2 my-lg-0">
                    <input className="form-control me-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" >Search</button>
                </form>
            </div>
        </div>
      </nav>
      
      </>
    )
  }
}
