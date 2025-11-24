import React from 'react'
import { Link } from 'react-router-dom'
export default function NewsItem(props){
  return (
    <>
    <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6'>
    <div className="card bg-dark text-light mb-3 d-inline-block">
  <img src={props.pic?props.pic:"/images/No_Image_Available.jpg"}  height={200} className="card-img-top" alt="No_Image_Available"/>
  <div className="card-body">
    <h5 className="card-title truncate-title">{props.title}</h5>
    <hr />
    <div className='d-flex justify-content-between'>
     <div className="source"> {props.source}</div>
     <span className='text-light'>{new Date(props.date).toLocaleDateString()}</span>
    </div>
    <hr />
    <div className="source-text">
    <p className="card-text truncate-title">{props.description}</p>
    <Link to={props.url} target = "_blank" rel='norererrer' className='btn btn-primary w-100'>Go somewhere</Link>
  </div></div>
</div>
</div>
    </>
  )
}
