import React, { Component } from 'react'

export default class Newsitem extends Component {
    
  render() {
    let {title , description , imageurl ,newsUrl} = this.props
    return (
      <div className='my-3'>
                        <div className="card" style={{width: "18rem"}}>
                <img src={imageurl?imageurl:"https://www.cnet.com/a/img/resize/47680901d471971a623021d72fcc0927a71db7b5/hub/2023/08/23/6b613244-034b-4a10-bb3c-fbf36742b1da/apple-ios-17-iphone-mobile-9935.jpg?auto=webp&fit=crop&height=675&width=1200"} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                </div>
                </div>
      </div>
    )
  }
}
