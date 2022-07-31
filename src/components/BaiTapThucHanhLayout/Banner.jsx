import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
            <div>
                <div className="container mt-5 p-5 bg-light">
                    <h1 className='fw-bolder'>A warm welcome!</h1>
                    <p  className='px-5 fs-4'>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                    <button className='btn btn-primary px-3 py-2 fs-5'>Call to action</button>
                </div>
            </div>
        )
    }
}
