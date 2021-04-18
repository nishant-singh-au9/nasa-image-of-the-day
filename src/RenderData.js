import React from "react";
import Loader from "./Loader.svg";

const renderImage = (imageUrl, videoUrl) => {
  if (imageUrl) {
    return (
      <>
        <img src={imageUrl} alt="nasadataimg" className="hd__image" />
      </>
    );
  } else {
    return (
      <>
        <iframe
          width="100%"
          height="315"
          title={videoUrl}
          src={videoUrl}
        ></iframe>
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
            <div className="col-md-6">
              {renderImage(props.data.hdurl, props.data.url)}
            </div>
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
