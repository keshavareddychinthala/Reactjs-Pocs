import React, { Component } from 'react'
import axios  from 'axios';
export class PhotoList extends Component {
constructor(props) {
  super(props)

  this.state = {
     photos:[]
  }
}
componentDidMount(){
    this.handlePhotoList();
}
handlePhotoList=async()=>{
   await axios.get("https://jsonplaceholder.typicode.com/photos").then(res=>{
    if(res){
       this.setState({photos:res.data})
    }
   }).catch(err=>console.log(err,"error"))
}
  render() {
    return (
    //   <div>PhotoList</div>
       <React.Fragment >
           <div className='container-fluid'>
              <div className='row'>
                   {
                       this.state.photos.length>0?this.state.photos.map((photo)=>{
                       return(
                        <div className="card col-md-3 ml-5 mt-5"  key={photo.id}>
                        <img src={`${photo.url}`} className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">{photo.title}</h5>
                        </div>
                      </div>
                       )
                       }):""
                   }
              </div>
           </div>
       </React.Fragment>
    )
  }
}

export default PhotoList