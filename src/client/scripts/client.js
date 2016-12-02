import Debug from 'debug';
import App from '../../app';

var attachElement = document.getElementById('app');

var state = {
  cart: {
    title: 'My Cart',
    items: [
      {
        title: 'Paw Patrol Adventure Kit',
        price: 12,
        age: 'ages 2-6 yrs'
      },
      {
        title: 'Frozen Elsa Doll',
        price: 21,
        age: 'ages 3-9 yrs'
      },
      {
        title: 'Copic Artist Pens',
        price: 33,
        age: 'ages 12 yrs and up'
      },
      {
        title: 'Maroon Twin Bed Set',
        price: 15,
        age: 'everyone'
      }
    ]
  }
};

var app;

Debug.enable('myApp*');

// Create new app and attach to element
app = new App({
  state: state
});

app.renderToDOM(attachElement);
