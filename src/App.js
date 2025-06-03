import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./Items";
import Categories from "./components/Categories";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItem: [],
      items: [
        {
          id: 1,
          title: "Mechanical keyboard",
          img: "keyboard.jpg",
          desc: "A durable, high-performance keyboard with tactile and audible feedback, designed for precise typing and gaming.",
          category: "keyboards",
          price: 49.99,
        },
        {
          id: 2,
          title: "Carbon Mouse",
          img: "mouse.png",
          desc: "A sleek, ergonomic mouse with responsive buttons and smooth tracking, perfect for everyday computing tasks.",
          category: "mouses",
          price: 34.99,
        },
        {
          id: 3,
          title: "Microphone on bracket",
          img: "micro.webp",
          desc: "A high-quality microphone with clear sound capture, ideal for streaming, podcasting, and voice communication.",
          category: "microphones",
          price: 89.99,
        },
        {
          id: 4,
          title: "Gaming Headphones",
          img: "earphones.jpg",
          desc: "Comfortable over-ear headphones delivering immersive sound, perfect for gaming, music, and video calls.",
          category: "headphones",
          price: 109.99,
        },
        {
          id: 5,
          title: "Desktop soundpad",
          img: "soundpad.webp",
          desc: "A versatile soundpad for triggering custom sound effects and audio clips, enhancing your streaming and content creation setup",
          category: "soundpads",
          price: 59.99,
        },
        {
          id: 6,
          title: "Mousepad with backlight",
          img: "mousepad.jpg",
          desc: "A smooth, durable surface providing optimal mouse control and precision, enhancing your gaming and work experience.",
          category: "mousepads",
          price: 24.99,
        },
      ],
    };
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteToOrder = this.deleteToOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.state.currentItem = this.state.items;
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteToOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items items={this.state.currentItem} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  addToOrder(item) {
    let isArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isArray = true; // такой предмет уже существует в заказах.
    });
    if (!isArray) {
      this.setState({ orders: [...this.state.orders, item] }); //добавление предмета в корзину
    }
  }

  deleteToOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItem: this.state.items });
      return;
    }
    this.setState({
      currentItem: this.state.items.filter((el) => el.category === category),
    });
  }
}

export default App;
