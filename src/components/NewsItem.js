import React from "react";

const NewsItem = (props) => {
  const {title, description, imageUrl, newsUrl, date, source } = props;

  return (
    <div className="card h-100">
      <img src={imageUrl ? imageUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png"}
        className="card-img-top fixed-height" // Added the class 'fixed-height' for fixed height
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <small className="text-muted">By {source ? source : "unknown"} on {new Date(date).toLocaleDateString()}</small>
        </p>
        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-primary btn-sm">Read More</a>
      </div>
    </div>
  );
};

export default NewsItem;
