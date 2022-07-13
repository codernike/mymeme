import React, { Component } from 'react'

export default class login extends Component {
  render() {
    return (
      <>
      <center>
      <div className=' p-4 mt-5 border border-1 border-secondary w-25  '>
        <img  src='https://freepngimg.com/save/97579-meme-doge-free-png-hq/728x724' alt='logo' style={{height:'200px'}}/>
         <h5 >Welcome back</h5>
        <input type='text' className='form-control mt-3' placeholder='Name'/>
        <input type='Email' placeholder='Email' className='form-control mt-3'/>
        <input type='password' placeholder='password ' className='form-control mt-3'/>
        <button className='btn btn-primary form-control mt-3'>Login</button>
      </div></center>
      </>
    )
  }
}
