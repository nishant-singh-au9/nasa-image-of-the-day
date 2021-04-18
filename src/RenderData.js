import React from "react";
import Loader from "./Loader.svg";

const renderImage = (imageUrl) => {
  if (imageUrl) {
    return (
      <>
        <img src={imageUrl} alt="nasadataimg" className="hd__image" />
      </>
    );
  } else {
    return (
      <>
        <center>
          <h2>
            <span role="img">&#128553;</span>
            Image not Available for this day, Try searching for another date
            <hr />
            <span role="img">&#128558;</span>
            You can read the description though
          </h2>
        </center>
        ;
      </>
    );
  }
};

const RenderData = (props) => {
  if (props.data) {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-6">{renderImage(props.data.hdurl)}</div>
            <div className="col-md-6 details">
              <center>
                <h3 className="data__title">{props.data.title}</h3>
              </center>
              <center>
                <h3 className="title">Explanation</h3>
              </center>
              <p>{props.data.explanation}</p>
              <hr />
              <center className="data__title">
                <h4 className="data__title">{props.data.date}</h4>
                <p className="data__title">Copyright: {props.data.copyright}</p>
              </center>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <center>
          <img src={Loader} className="loader__svg" alt="Loader" />
        </center>
      </>
    );
  }
};

export default RenderData;
