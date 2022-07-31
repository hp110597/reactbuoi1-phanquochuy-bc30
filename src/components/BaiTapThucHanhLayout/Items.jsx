import React, { Component } from 'react'
import '../style.css/reactbuoi1.css'

export default class Items extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row my-5">
                        <div className="col1  position-relative rounded ">
                            <div className="icon position-absolute top-0 start-50 translate-middle">
                                <i className='bi bi-collection fs-2 px-3 py-2 rounded text-white bg-primary'></i>
                            </div>
                            <div className="title bg-light p-5">
                                <h2 className='fw-bolder fs-4'>Fresh new layout</h2>
                                <p>With Bootstrap 5, we've created a fresh new layout for this template!</p>
                            </div>
                        </div>
                        <div className="col1  position-relative rounded ">
                            <div className="icon position-absolute top-0 start-50 translate-middle">
                                <i className='bi bi-cloud-download fs-2 px-3 py-2 rounded text-white bg-primary'></i>
                            </div>
                            <div className="title bg-light p-5">
                                <h2 className='fw-bolder fs-4'> Free to download</h2>
                                <p>As always, Start Bootstrap has a powerful collectin of free templates.</p>
                            </div>
                        </div>
                        <div className="col1  position-relative rounded ">
                            <div className="icon position-absolute top-0 start-50 translate-middle">
                                <i className='bi bi-card-heading fs-2 px-3 py-2 rounded text-white bg-primary'></i>
                            </div>
                            <div className="title bg-light p-5">
                                <h2 className='fw-bolder fs-4'>Jumbotron hero header</h2>
                                <p>The heroic part of this template is the jumbotron hero header!</p>
                            </div>
                        </div>
                        <div className="col1  position-relative rounded ">
                            <div className="icon position-absolute top-0 start-50 translate-middle">
                                <i className='bi bi-bootstrap fs-2 px-3 py-2 rounded text-white bg-primary'></i>
                            </div>
                            <div className="title bg-light p-5">
                                <h2 className='fw-bolder fs-4'>Feature boxes</h2>
                                <p>We've created some custom feature boxes using Bootstrap icons!</p>
                            </div>
                        </div>
                        <div className="col1  position-relative rounded ">
                            <div className="icon position-absolute top-0 start-50 translate-middle">
                                <i className='bi bi-code fs-2 px-3 py-2 rounded text-white bg-primary'></i>
                            </div>
                            <div className="title bg-light p-5">
                                <h2 className='fw-bolder fs-4'>Simple clean code</h2>
                                <p>We keep our dependencies up to date and squash bugs as they come!</p>
                            </div>
                        </div>
                        <div className="col1  position-relative rounded ">
                            <div className="icon position-absolute top-0 start-50 translate-middle">
                                <i className='bi bi-patch-check fs-2 px-3 py-2 rounded text-white bg-primary'></i>
                            </div>
                            <div className="title bg-light p-5">
                                <h2 className='fw-bolder fs-4'>A name you trust</h2>
                                <p>Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
