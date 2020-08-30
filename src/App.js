import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Profile from './components/Profile';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
        <Header/>
          <Route path="/" exact={true} component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/profile" component={Profile} />
          <Route path="/products" component={Products} />
        <Footer/>
    </div>
  );
}
export default App;
