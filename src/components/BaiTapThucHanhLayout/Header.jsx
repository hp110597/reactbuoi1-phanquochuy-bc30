import React, { Component } from 'react'


export default class Header extends Component {
    render() {
        return (
            <div>
               <div className="bg-dark">
               <div className="container p-1 d-flex justify-content-between align-items-center">
                    <div className="logo fs-4 text-white">Start Bootstrap</div>
                    <div className="navbar fs-5 ">
                        <a href="#" className=' text-white text-decoration-none'>Home</a>
                        <a href="#" className=' ms-3 text-secondary text-decoration-none'>About</a>
                        <a href="#" className=' ms-3 text-secondary text-decoration-none'>Contact</a>
                    </div>
               </div>
                </div>

            </div>
        )
    }   
}
