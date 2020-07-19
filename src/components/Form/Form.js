import React, { Component, useState } from 'react';
import { InputCheck, CheckBoxes, FormElement, SectionTitle, Label, Caption, Input, Select, Header, Order } from './Styles'
import { pizzaType, pizzaSauce } from '../../data/pizza'


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: {
        pizzaName: '',
        sauces: '',
        name: '',
        lastName: '',
        street: '',
        houseNumber: '',
        city: '',
        code: '',
      }
    }
  }

  handleInputChange = (e) => {
    const { type, value, name } = e.target;
    console.log(e.target.checked);
    let sauces = {};
    if (type === 'checkbox') {
      sauces = {
        ...sauces, [name]: value
      }
    }
    console.log(sauces);
    this.setState((prevState) => {
      return (
        {
          order: {
            ...prevState.order, [name]: value
          }
        }
      )
    })



    console.log(type);
    console.log(value);
  }

  pizza = pizzaType.map((item, index) => {
    return (
      <option value={`${item.name} - ${item.price}PLN`} key={index}>{item.name}</option>
    )
  })
  sauce = pizzaSauce.map((item, index) => {
    let checkBoxName = `sauce_${index}`;
    return (
      <Label row>
        <InputCheck type="checkbox" name={checkBoxName} value={item} onChange={this.handleInputChange} />
        {item}
      </Label>
    )
  })

  showSelectedPizza =
    <>
      <SectionTitle>Wybrana Pizza</SectionTitle>
      <Order >
        {this.state}
      </Order>
    </>
  render() {
    const { pizzaName, name, lastName, code, houseNumber, street, city } = this.state.order;

    return (
      <>
        <Header>Złóż zamówienie</Header>
        <FormElement>
          {this.selectedPizza ? this.showSelectedPizza : null}
          <SectionTitle>Pizza</SectionTitle>
          <Label><Caption>Pizza:</Caption>
            <Select type="select" onChange={this.handleInputChange} name='pizzaName'>
              <option value="">-- Wybierz Pizzę --</option>
              {this.pizza}
            </Select>
          </Label>
          <Label><Caption>Sosy:</Caption>
            <CheckBoxes>
              {this.sauce}
            </CheckBoxes>

          </Label>

          <SectionTitle>Adres Dostawy</SectionTitle>
          <Label><Caption>Imię: </Caption><Input onChange={this.handleInputChange} name='name' value={name} /></Label>
          <Label><Caption>Nazwisko:</Caption> <Input onChange={this.handleInputChange} name='lastname' value={lastName} /></Label>
          <Label><Caption>Ulica:</Caption> <Input onChange={this.handleInputChange} name='street' value={street} /></Label>
          <Label><Caption>Nr domu/mieszkania:</Caption> <Input onChange={this.handleInputChange} name='houseNumber' value={houseNumber} /></Label>
          <Label><Caption>Kod Pocztowy:</Caption> <Input onChange={this.handleInputChange} name='code' value={code} /></Label>
          <Label><Caption>Miasto:</Caption> <Input onChange={this.handleInputChange} name='city' value={city} /></Label>
        </FormElement>
      </>
    );
  }
}

export default Form;