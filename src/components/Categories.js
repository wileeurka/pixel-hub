import React, { Component } from "react";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: "all",
          name: "All",
        },
        {
          key: "keyboards",
          name: "Keyboards",
        },
        {
          key: "mouses",
          name: "Mouses",
        },
        {
          key: "microphones",
          name: "Microphones",
        },
        {
          key: "headphones",
          name: "Headphones",
        },
        {
          key: "soundpads",
          name: "Soundpads",
        },
        {
          key: "mousepads",
          name: "Mousepads",
        },
      ],
    };
  }
  render() {
    return (
      <div className="categories">
        {this.state.categories.map((el) => (
          <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>
            {el.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
