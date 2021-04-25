import React, { Component } from "react";

class Accordion extends Component {
  state = {};
  render() {
    return (
      <div>
        <details>
          <summary>
            <strong>Accordion 1</strong>
          </summary>

          <p>inside accordion</p>
        </details>
        <details>
          <summary>
            <strong>Accordion 2</strong>
          </summary>

          <p>inside accordion</p>
        </details>
        <details>
          <summary>
            <strong>Accordion 3</strong>
          </summary>

          <p>inside accordion</p>
        </details>
      </div>
    );
  }
}

export default Accordion;
