import React,{Component} from "react";

export default class List extends Component{
    constructor(props){
        super(props);
        console.log(this.props,"props...")
        this.state={
            editButtton:"Edit",
            deleteButton:"Delete",
            editStatus:-1,
            editValue:""
          
        }
        this.onEdit=this.onEdit.bind(this);
        this.handleInput=this.handleInput.bind(this);
    }
    onEdit=(index,item,value)=>{
      if(value=="Edit"){
          this.setState({
              editStatus:index,
              editButtton:"Update",
              deleteButton:"Cancel",
              editValue:item
          })
      }
      else{
        this.setState({
            editButtton:"Edit",
            deleteButton:"Delete",
            editStatus:-1,
        })
        this.props.onEdit(index,value,this.state.editValue);
      }
    }
    handleInput(e){
   console.log(e,"evalue")
   this.setState({ editValue:e.target.value})
    }
    render(){
        console.log(this.props)
        const {item,index}=this.props;
        return(
         <>
          <li className={index%2==0?'list-group-item even':'list-group-item odd'} key={index}>{this.state.editStatus==index?(<input value={this.state.editValue} onChange={(e)=>this.handleInput(e)}/>):item} <span><button className="btn btn-success ml-2" onClick={()=>this.onEdit(index,item,this.state.editButtton)}>{this.state.editButtton}</button></span><span><button className="btn btn-danger ml-2">{this.state.deleteButton}</button></span></li>
           
         </>
        );
    }
}


//   return (
//     <div>List</div>
//   )
// }

// export default List