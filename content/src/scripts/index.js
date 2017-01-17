import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Store} from 'react-chrome-redux';
import App from './components/app/App';

var gmail = new Gmail();

/// MAIN PANEL
var mainPanel = $("#\\:2").find(".nH")[0]; //Get the main panel container div
console.log('Main Panel: ', mainPanel);
$('<div id="rcr-anchor"></div>').appendTo(mainPanel); //Bind anchor to main panel



const proxyStore = new Store({portName: 'example', 'extensionId' : 'iagdjhocgbkfdahcdegiachcdhkggfob' });



render(
  <Provider store={proxyStore}>
    <App gmail={gmail} />
  </Provider>
  , document.getElementById('rcr-anchor'));

// render(
//     <App gmail={gmail} />
//   , document.getElementById('rcr-anchor'));
