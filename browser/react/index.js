'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main.js';
import Sidebar from './sidebar.js';
import Footer from './footer.js';


// const element = (<h1> Hello, React </h1>);

const element =
<div>
  <Sidebar/>
  <Main/>
  <Footer/>
</div>;



ReactDOM.render(element, document.getElementById('app'));
