import React, { Component } from "react";
import DatePicker from "react-datepicker";
import AppNav from "./AppNav";
import "./App.css";
import "react-datepicker/dist/react-datepicker.css";
import { Container, FormGroup, Button, Form, Label, Input, Table } from "reactstrap";
import { Link } from "react-router-dom";

export default class Expenses extends Component {



  emptyItem = {


    id:'103',
    expensedate : new Date(),
    description : '',
    location : '',
    categories : [1,'Travel']

  }

  constructor(props){


    super(props);

    this.state = {

      date: new Date(),
      isLoading: true,
      expenses: [],
      categories: [],
      item:this.emptyItem

    }
  }

  async componentDidMount() {
    const response = await fetch("/api/categories");
    const body = await response.json();
    this.setState({
      categories: body,
      isLoading: false,
    });


    const responseExp = await fetch("/api/expenses");
    const bodyExp = await responseExp.json();
    this.setState({
      expenses: bodyExp,
      isLoading: false,
    });
  }

  handleChange = () => {};
  render() {
    const title = <h2>Add Expenses</h2>;
    const { categories } = this.state;

    const {expenses,isLoading} = this.state;

    let optionList =   categories.map((category) => (
      <option id={category.id}>{category.name}</option>
    ));
  

    if (isLoading) return <div>Loadinggg....</div>;

    return (
      <div>
        <AppNav />
        <Container>
          {title}
          <Form>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input
                type="text"
                name="title"
                id="title"
                onChange={this.handleChange}
                autoComplete="name"
              />
            </FormGroup>

            <FormGroup>
              <Label for="category">Category</Label>
              <select>
              {optionList}
              </select>
              <Input
                type="text"
                name="category"
                id="category"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="city">Date</Label>
              <DatePicker
                selected={this.state.date}
                onChange={this.handleDateChange}
              />
            </FormGroup>

            <div className="row">
              <FormGroup className="col-md-4 mb-3">
                <Label for="location">Location</Label>
                <Input
                  type="text"
                  name="location"
                  id="location"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </div>
            <FormGroup>
              <Button color="primary" type="submit">
                Save
              </Button>{" "}
              <Button color="secondary" tag={Link} to="/categories">
                Cancel
              </Button>
            </FormGroup>
          </Form>
        </Container>

        {' '}

        <Container>
        <h2>Expense List</h2>
<Table></Table>
        </Container>
      </div>
    );
  }
}
