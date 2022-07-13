import React, { Component } from 'react'

export default class form extends Component {
  render() {
    return (
      <>
      <center>
      <div className=' mt-5 mb-5 border p-3 border-1 border-secondary w-25'>
      <img  src='https://freepngimg.com/save/97579-meme-doge-free-png-hq/728x724' alt='logo' style={{height:'200px'}}/>
         <h5 >Register here</h5>
        <input type='text' placeholder='Name ' className='form-control mt-4'/>
        <input type='email' placeholder='Email ' className='form-control mt-4'/>
        <input type='password' placeholder='Password ' className='form-control mt-4'/>
        <input type='password' placeholder='Password ' className='form-control mt-4'/>
        <button className=' btn btn-primary mt-4 form-control'>Submit</button>
      </div>
      </center>
      </>
    )
  }
}
