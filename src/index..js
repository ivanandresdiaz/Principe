import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/index';
import App from './routes/App';
import './styles/Global.scss';

const initialState = {
  'carrito': [],
  'purchase': [],
  'tienda': [
    {
      'id': 1,
      'imagen': {
        'vista1': 'https://cdn.koaj.co/42874-big_default/buzo-pato-donald-amarillo.jpg',
        'vista2': 'https://cdn.koaj.co/42875-big_default/buzo-pato-donald-amarillo.jpg',
        'vista3': 'https://cdn.koaj.co/42876-thickbox_default/buzo-pato-donald-amarillo.jpg',
        'vista4': 'https://cdn.koaj.co/42877-big_default/buzo-pato-donald-amarillo.jpg',
      },
      'nombre': 'Buzo Pato Donald Amarillo',
      'descripcion': 'Buzo para mujer, en tela de cuerpo unicolor, estampado frontal en contraste, cuello redondo, ajuste holgado y acabados en rib.',
      'talla': {
        'talla1': 'S',
        'talla2': 'M',
        'talla3': 'L',
        'talla4': 'XL',
        'talla5': 'XXL',
      },
      'precio': '60.000',
      'cantidad': '1',
    },
    {
      'id': 2,
      'imagen': {
        'vista1': 'https://cdn.koaj.co/42870-thickbox_default/buzo-cuello-redondo-estampado-mickey-mouse.jpg',
        'vista2': 'https://cdn.koaj.co/42871-thickbox_default/buzo-cuello-redondo-estampado-mickey-mouse.jpg',
        'vista3': 'https://cdn.koaj.co/42872-thickbox_default/buzo-cuello-redondo-estampado-mickey-mouse.jpg',
        'vista4': 'https://cdn.koaj.co/42873-thickbox_default/buzo-cuello-redondo-estampado-mickey-mouse.jpg',
      },
      'nombre': 'Buzo cuello redondo estampado mickey mouse',
      'descripcion': 'Buzo para mujer, en tela de cuerpo unicolor, estampado frontal de Mickey Mouse en contraste, cuello redondo, ajuste holgado y acabados en rib.',
      'talla': {
        'talla1': 'S',
        'talla2': 'M',
        'talla3': 'L',
        'talla4': 'XL',
        'talla5': 'XXL',
      },
      'precio': '70.000',
      'cantidad': '1',
    },
    {
      'id': 3,
      'imagen': {
        'vista1': 'https://cdn.koaj.co/63051-thickbox_default/camisa-estampada.jpg',
        'vista2': 'https://cdn.koaj.co/63052-thickbox_default/camisa-estampada.jpg',
        'vista3': 'https://cdn.koaj.co/63053-thickbox_default/camisa-estampada.jpg',
        'vista4': 'https://cdn.koaj.co/63055-thickbox_default/camisa-estampada.jpg',
      },
      'nombre': 'Camisa estampada',
      'descripcion': 'Camisa cuello sport collar en tela fluida, con estampaci??n de Jurassic park, manga corta con botonadura en el frente.',
      'talla': {
        'talla1': 'S',
        'talla2': 'M',
        'talla3': 'L',
        'talla4': 'XL',
        'talla5': 'XXL',
      },
      'precio': '89.900',
      'cantidad': '1',
    },
    {
      'id': 4,
      'imagen': {
        'vista1': 'https://cdn.koaj.co/64507-thickbox_default/camiseta-cuello-redondo.jpg',
        'vista2': 'https://cdn.koaj.co/64509-thickbox_default/camiseta-cuello-redondo.jpg',
        'vista3': 'https://cdn.koaj.co/64508-thickbox_default/camiseta-cuello-redondo.jpg',
        'vista4': 'https://cdn.koaj.co/64510-thickbox_default/camiseta-cuello-redondo.jpg',
      },
      'nombre': 'Camiseta manga corta estampada',
      'descripcion': 'Camiseta para hombre, en tela de cuerpo unicolor, estampado frontal en contraste, cuello redondo y manga corta.',
      'talla': {
        'talla1': 'S',
        'talla2': 'M',
        'talla3': 'L',
        'talla4': 'XL',
        'talla5': 'XXL',
      },
      'precio': '65.900',
      'cantidad': '1',
    },
    {
      'id': 5,
      'imagen': {
        'vista1': 'https://cdn.koaj.co/66711-thickbox_default/chaqueta-bomber-acolchada.jpg',
        'vista2': 'https://cdn.koaj.co/66712-thickbox_default/chaqueta-bomber-acolchada.jpg',
        'vista3': 'https://cdn.koaj.co/66714-thickbox_default/chaqueta-bomber-acolchada.jpg',
        'vista4': 'https://cdn.koaj.co/66715-thickbox_default/chaqueta-bomber-acolchada.jpg',
      },
      'nombre': 'Chaqueta bomber acolchada',
      'descripcion': 'Chaqueta para hombre bomber acolchada, tela cuerpo unicolor, bolsillos con broche y cierre en cremallera.',
      'talla': {
        'talla1': 'S',
        'talla2': 'M',
        'talla3': 'L',
        'talla4': 'XL',
        'talla5': 'XXL',
      },
      'precio': '109.900',
      'cantidad': '1',
    },
    {
      'id': 6,
      'imagen': {
        'vista1': 'https://cdn.koaj.co/36352-thickbox_default/blusa-cuello-mao.jpg',
        'vista2': 'https://cdn.koaj.co/36353-thickbox_default/blusa-cuello-mao.jpg',
        'vista3': 'https://cdn.koaj.co/36354-thickbox_default/blusa-cuello-mao.jpg',
        'vista4': 'https://cdn.koaj.co/36355-thickbox_default/blusa-cuello-mao.jpg',
      },
      'nombre': 'Blusa cuello mao',
      'descripcion': 'Blusa para mujer, en tela de cuerpo unicolor, cuello mao, manga corta y ajuste holgado.',
      'talla': {
        'talla1': 'S',
        'talla2': 'M',
        'talla3': 'L',
        'talla4': 'XL',
        'talla5': 'XXL',
      },
      'precio': '30.000',
      'cantidad': '1',
    },
  ],
};
const store = createStore(reducer, initialState);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app'),
);
