import React from "react"

const NewsItem = (props)=> {
    const {title, description, imageUrl, newsUrl, date, source} = props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={imageUrl?imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png"} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {source?source:"unknown"} on {new Date(date).toGMTString()} </small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
}

export default NewsItem
