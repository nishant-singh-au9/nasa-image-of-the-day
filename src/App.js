import React from "react";
import "./styles.css";
import RenderData from "./RenderData";
const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      date: "",
      data: "",
      err: ""
    };
  }

  dateChangeHandler = (e) => {
    this.setState({ date: e.target.value, err: "" });
    console.log(this.state.date);
  };

  submitHandler = () => {
    if (!this.state.date) {
      this.setState({ err: "Select a Valid date" });
    } else {
      this.setState({ data: "" });
      fetch(`${url}&date=${this.state.date}`, { method: "GET" })
        .then((res) => res.json())
        .then((data) => {
          if (data.code) {
            this.setState({ err: data.msg });
          } else {
            this.setState({ data });
          }
        });
    }
  };

  render() {
    return (
      <>
        <center>
          <h1 className="title">NASA Image of the DAY</h1>
        </center>
        <center>
          <div>
            <div className="search__div">
              <p className="date__search__p">Search by date: </p>
              <p className="err">{this.state.err}</p>
              <input
                type="date"
                value={this.state.date}
                onChange={this.dateChangeHandler}
              />
              <button className="btn btn-primary" onClick={this.submitHandler}>
                Search
              </button>
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
