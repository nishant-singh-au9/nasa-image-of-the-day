import React from "react";
import "./styles.css";
import RenderData from "./RenderData";
const url = `https://api.nasa.gov/planetary/apod?api_key=5KfKZwfQX4jSM0mUN2mG82a9t0H0YpAtbUJRdwvv`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "",
      err: ""
    };
  }

  dateChangeHandler = (e) => {
    this.setState({ err: "" });
    this.setState({ data: "" });
    fetch(`${url}&date=${e.target.value}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        if (data.code) {
          this.setState({ err: data.msg });
        } else {
          this.setState({ data });
        }
      });
  };

  render() {
    return (
      <>
        <center>
          <h1 className="title">NASA IMAGE OF THE DAY</h1>
        </center>
        <center>
          <div>
            <div className="search__div">
              <p className="err">{this.state.err}</p>
              <p className="date__search__p">Search by date: </p>
              <input
                type="date"
                value={this.state.date}
                onChange={this.dateChangeHandler}
              />
            </div>
          </div>
        </center>
        <RenderData data={this.state.data} />
      </>
    );
  }

  componentDidMount() {
    fetch(url, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ data });
      });
  }
}

export default App;
