import React, { Component, useState } from 'react';
import { Errors, InputCheck, CheckBoxes, FormElement, SectionTitle, Label, Caption, Input, Select, Header, Order, Button } from './Styles'
import { pizzaType, pizzaSauce } from '../../data/pizza'


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValidated: false,
      errors: [],
      order: {
        pizzaName: '',
        name: '',
        lastName: '',
        street: '',
        houseNumber: '',
        city: '',
        code: '',
        rodo: false
      }
    }
  }

  handleInputChange = (e) => {
    const { type, value, name, checked } = e.target;

    this.setState((prevState) => {
      const newObj = { ...prevState.order, [name]: value }
      if (type === "checkbox") {
        if (checked) {
          newObj[name] = true
        }
      }
      return (
        {
          order: newObj
        }
      )
    })
  }

  validateForm = () => {
    const { pizzaName, name, lastName, street, houseNumber, code, city, rodo } = this.state.order;
    const errors = []
    if (pizzaName.trim() === '') errors.push('Pizza');
    if (name.trim() == '') errors.push('Imię');
    if (lastName.trim() === '') errors.push('Nazwisko');
    if (street.trim() === '') errors.push('Ulica');
    if (houseNumber.trim() === '') errors.push('Nr. domu');
    if (code.trim() === '') errors.push('Kod pocztowy');
    if (city.trim() === '') errors.push('Miasto');
    if (rodo !== true) errors.push('Zgoda na przetwarzanie danych');

    if (errors.length > 0) {
      this.setState({ errors })
    }
  }

  sendOrder = (e) => {
    e.preventDefault();
    this.validateForm();
    if (this.state.errors === 0) {
      console.log("Zamówienie do wysłania:");
      console.log(JSON.stringify(this.state.order));
    }
  }

  pizza = pizzaType.map((item, index) => {
    return (
      <option value={`${item.name} - ${item.price}PLN`} key={index}>{item.name}</option>
    )
  })
  sauce = pizzaSauce.map((item, index) => {
    let checkBoxName = `sos ${item}`;
    return (
      <Label row key={index}>
        <InputCheck type="checkbox" name={checkBoxName} onChange={this.handleInputChange} value={''} />
        {item}
      </Label>
    )
  })
  showErrors = () => {
    if (this.state.errors.length > 0) {
      return <Errors>
        Uzupełnij pola formularza:
        <ul>
          {this.state.errors.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </Errors>
    }

  }

  showSelectedPizza =
    <>
      <SectionTitle>Wybrana Pizza</SectionTitle>
      <Order >
        {this.state}
      </Order>
    </>
  render() {
    const { pizzaName, name, lastName, code, houseNumber, street, city, rodo } = this.state.order;

    return (
      <>
        <Header>Złóż zamówienie</Header>
        <FormElement onSubmit={this.sendOrder}>
          {this.selectedPizza ? this.showSelectedPizza : null}
          <SectionTitle>Pizza</SectionTitle>
          <Label><Caption>Pizza:</Caption>
            <Select type="select" onChange={this.handleInputChange} name='pizzaName'>
              <option value="">-- Wybierz Pizzę --</option>
              {this.pizza}
            </Select>
          </Label >
          <Label><Caption>Sosy:</Caption>
            <CheckBoxes>
              {this.sauce}
            </CheckBoxes>
          </Label>

          <SectionTitle>Adres Dostawy</SectionTitle>
          <Label><Caption>Imię: </Caption><Input onChange={this.handleInputChange} name='name' value={name} /></Label>
          <Label><Caption>Nazwisko:</Caption> <Input onChange={this.handleInputChange} name='lastName' value={lastName} /></Label>
          <Label><Caption>Ulica:</Caption> <Input onChange={this.handleInputChange} name='street' value={street} /></Label>
          <Label><Caption>Nr domu/mieszkania:</Caption> <Input onChange={this.handleInputChange} name='houseNumber' value={houseNumber} /></Label>
          <Label><Caption>Kod Pocztowy:</Caption> <Input onChange={this.handleInputChange} name='code' value={code} /></Label>
          <Label><Caption>Miasto:</Caption> <Input onChange={this.handleInputChange} name='city' value={city} /></Label>

          <Label row><InputCheck type="checkbox" name='rodo' onChange={this.handleInputChange} value='' />{rodo}Zgoda na przetwarzanie danych.</Label>


          <Button type='submit'>Wyślij zamówienie</Button>
          {this.showErrors()}
        </FormElement>
      </>
    );
  }
}

export default Form;