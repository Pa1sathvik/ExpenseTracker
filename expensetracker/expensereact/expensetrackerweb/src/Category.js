import React, { Component } from "react";
import AppNav from './AppNav';


class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      categories: [],
    };
  }

  async componentDidMount() {
    const response = await fetch("/api/categories");
    const body = await response.json();
    this.setState({
      categories: body,
      isLoading: false,
    });
  }
  render() {
    const { categories, isLoading } = this.state;

    if (isLoading) {
      return <diV>Still loading...</diV>;
    }

    return (
      <div>
      <AppNav />
        <h2>Categories</h2>
        {categories.map((category) => (
          <div id={category.id}>{category.name}</div>
        ))}
      </div>
    );
  }
}

export default Category;
