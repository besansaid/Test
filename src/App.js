import React from 'react';
import { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Search from './components/Search';
import Input from './components/Input';
import Paragraph from './components/Paragraph';
import Link from './components/Link';
import Header from './components/Header';
import Icon from './components/Icon';
import H1 from './components/H1';
import H3 from './components/H3';
import Card from './components/Card';

class App extends Component {
  render(){
    return (
      <div>
        <Button/>
        <Search/>
        <Input/>
        <Paragraph/>
        <Link/>
        <Header/>
        <Icon/>
        <H1/>
        <H3/>
        <Card/>
      </div>
    );
  }
}

export default App;
