import React, { Component } from 'react'
import axios from "axios";
export class DummyList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:[]
      }
    }
 async componentDidMount(){
 await  this.handleData();
 
}
handleData=async()=>{
  console.log("wholeData","firstmethod")
 await axios.get("https://jsonplaceholder.typicode.com/posts").then(res=>{
    if(res){
        this.setState({data:[...res.data]})
         this.handlePreload();
    }
}).catch(err=>console.log("error",err))
}
handlePreload=async()=>{
    // console.log("singleData.....")
   console.log(this.state.data,"data..")
   await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.state.data[11].id}`).then(res=>{
        console.log(res.data)
        if(res){
          // console.log(res,"res.............")
        }
    }).catch(err=>console.log("error",err))
}
  render() {
                    // https://jsonplaceholder.typicode.com/
    return (
       <React.Fragment>
           {
               this.state.data.length>0?this.state.data.map(item=>{
               return(<div key={item.id} style={{border:"2px solid blue"}}>
               <span>id:{item.id}</span> <br></br>
               <span>Title:{item.title}</span> <br></br>
               <span>body:{item.body}</span>
                </div>)
               }):""
           }

      </React.Fragment>
    )
  }
}

export default DummyList