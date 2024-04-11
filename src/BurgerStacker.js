import React, { Component } from 'react'
import IngList from './IngList'
import BurgerPain from './BurgerPane'

// class components are a little diffrente than fucntion componenets
// they use classs style conventions (properties, and methods)
// we have to do things using class style syntaxts(as opposed to fucntion syntax)
// well have a bunch of key :value pairs and methods
// state in a class component is held within an object.

// to use a class , we haver to extend the component class that we bring in from react.
export default class BurgerStacker extends Component {
  // if you wante to hold state in a class components, you use an object
  // from there , we can update our state with a function called, setState
  // another feature of class components, is the keyword 'this
  // we need to use this when referring to builtin functions, properties, and methods.
  state ={
    // my main list of potential ingredients
    // both of these pieces of state will be passed down to child components
    ingredients: [
      {name: 'Kaiser Bun', color: 'saddlebrown'},
      {name: 'Sesame Bun', color: 'sandybrown'},
      {name: 'Gluten Free Bun', color: 'peru'},
      {name: 'Lettuce Wrap', color: 'olivedrab'},
      {name: 'Beef Patty', color: '#3F250B'},
      {name: 'Soy Patty', color: '#3F250B'},
      {name: 'Black Bean Patty', color: '#3F250B'},
      {name: 'Chicken Patty', color: 'burlywood'},
      {name: 'Lettuce', color: 'lawngreen'},
      {name: 'Tomato', color: 'tomato'},
      {name: 'Bacon', color: 'maroon'},
      {name: 'Onion', color: 'lightyellow'}
    ],
    // going to be the ingredients on the burger that im stacking
    burgerIngredients: []
  }

  // there is one thing that all class componensts need to do
  // they need to call the render method. Just like all fucntion components need to return something.
  render () {
    // whatever we return from the render methodis the jsx we see on the page
    return (
      <>
        <h1>Burger Stacker</h1>
        <div>
          <IngList 
            ingredients={this.state.ingredients}
          />
          <BurgerPain 
            ingredients={this.state.burgerIngredients}
          />
        </div>
      </>
    )
  }
}