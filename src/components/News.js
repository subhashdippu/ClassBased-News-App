import React, { Component } from "react";
import NewsItems from "./NewsItems";
class News extends Component {
  render() {
    return (
      <div className="container my-4">
        <h1 className="text-center">New Application</h1>
        <div className="row">
          <div className="col-md-3 my-4">
            <NewsItems title={"FirstNews"} />
          </div>

          <div className="col-md-3 my-4">
            <NewsItems title={"SecondNews"} />
          </div>

          <div className="col-md-3 my-4">
            <NewsItems title={"ThirdNews"} />
          </div>

          <div className="col-md-3 my-4">
            <NewsItems title={"FourthNews"} />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
