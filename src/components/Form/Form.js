import React, { Component, useState } from 'react';
import { CheckBoxes, FormElement, SectionTitle, Label, Caption, Input, Select, Header, Order } from './Styles'
import { pizzaType, pizzaSauce } from '../../data/pizza'


const Form = () => {
  const [selectedPizza, setPizza] = useState('');
  const [SelectedSauce, setSauce] = useState('pomidorowy');

  const pizza = pizzaType.map((item, index) => {
    return (
      <option value={`${item.name} - ${item.price}PLN`} key={index}>{item.name}</option>
    )
  })

  const handleCheck = (e) => {
    setSauce(e.target.value)
    console.log('====================================');
    console.log(e.target);
    console.log('====================================');
  }
  const sauce = pizzaSauce.map((item, index) => {
    return (
      <Label row>
        <input type="checkbox" name='sauce' value={item} onChange={handleCheck} />
        {item}
      </Label>
    )
  })

  const showSelectedPizza =
    <>
      <SectionTitle>Wybrana Pizza</SectionTitle>
      <Order >
        <div>
          {selectedPizza}
        </div>
        <div>
          sos: {SelectedSauce}
        </div>
      </Order>
    </>


  return (
    <>
      <Header>Złóż zamówienie</Header>
      <FormElement>
        {selectedPizza ? showSelectedPizza : null}
        <SectionTitle>Pizza</SectionTitle>
        <Label><Caption>Pizza:</Caption>
          <Select type="select" onChange={(e) => setPizza(e.target.value)}>
            <option value="">-- Wybierz Pizzę --</option>
            {pizza}
          </Select>
        </Label>
        <Label><Caption>Sosy:</Caption>
          <CheckBoxes>
            {sauce}
          </CheckBoxes>

        </Label>

        <SectionTitle>Adres Dostawy</SectionTitle>
        <Label><Caption>Imię: </Caption><Input /></Label>
        <Label><Caption>Nazwisko:</Caption> <Input /></Label>
        <Label><Caption>Ulica:</Caption> <Input /></Label>
        <Label><Caption>Nr domu/mieszkania:</Caption> <Input /></Label>
        <Label><Caption>Kod Pocztowy:</Caption> <Input /></Label>
        <Label><Caption>Miasto:</Caption> <Input /></Label>
      </FormElement>
    </>
  );
}

export default Form;