import React from 'react'

export default ({book}) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="card">
        {book.thumbnail  
          ? <img src={book.thumbnail} className="card-img-top" />
          : <div className="card-img-top"></div>
        }
        <div className="card-body">
          <h5 className="card-title">{book.title}</h5>
          <p className="card-text">Authors: {book.authors.join(', ')}</p>
          <p className="card-text">{book.description}</p>
          <a 
            href={book.previewLink}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >Preview</a>
        </div>
      </div>
    </div>
  )
}
