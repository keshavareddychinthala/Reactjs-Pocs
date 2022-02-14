import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import "./Dashboard.css";
import {Routes,Route} from "react-router-dom"
import PhotoList from './PhotoList';
export class Dashboard extends Component {
  render() {
    return (
    <>
     <div className="no-gutters">
       <Header/>
        <Routes>
            <Route path="/" element={<PhotoList />} />
        </Routes>
       <Footer />
      </div>
    </>
     
    )
  }
}

export default Dashboard