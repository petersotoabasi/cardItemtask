import React, { Component } from "react";
import CounterApp from "./CounterApp";
export default class Card extends Component {
  render() {
    return (
        <div className="card text-center">
          <div className="card-body ">
            <h5 className="card-title"> TASK ON INCREMENT USING CLASS COMPONENT OF REACT STATE </h5>
             {/* <h6 className="card-subtitle mb-2 text-body-secondary">
              Card subtitle 
            </h6>  */}
            <p className="card-text text-align">
            This task is meant to increment numbers from one-1 to five-5 and also update the title of the page. Clicking on the button Cart item changes to Cart Items once the number increments to two-2.
            </p>
            <CounterApp/>
          </div>
        </div>
    );
  }
}
