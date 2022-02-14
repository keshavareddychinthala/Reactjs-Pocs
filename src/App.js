import logo from './logo.svg';
import './App.css';
import Todolist from './Todolist';
import DummyList from './DummyList';
import PhotoList from './PhotoList';
import {BrowserRouter as Router,Route, Routes,} from "react-router-dom";
import React, { Component } from 'react'
import Dashboard from './Dashboard';

export class App extends Component {
  render() {
    return (
    // <React.Fragment>
    <Router>
    <Routes>
    <Route path="/" element={<PhotoList />} />   
    <Route path="/todoList" element={<Todolist />} />
    <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
    </Router>
    // </React.Fragment>
    )
  }
}

export default App