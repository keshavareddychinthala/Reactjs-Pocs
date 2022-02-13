import React, { Component } from 'react';
import List from './List';
import './todolist.css';
export class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            todoList: [],
            btnType:"Edit",
            btnDelete:"Delete",
            editStatus:-1,
            editValue:""
        }
        this.onChangeInput = this.onChangeInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onFilter=this.onFilter.bind(this);
        this.onDelete=this.onDelete.bind(this);
        this.onEdit=this.onEdit.bind(this);
        this.handleUpdatePArticular=this.handleUpdatePArticular.bind(this);
        
        
    }
    onChangeInput = (event) => {
        // console.log(event.target.value,"value....")
        this.setState({ name: event.target.value })
    }
    handleSubmit = () => {
        this.setState({ todoList: [...this.state.todoList, this.state.name] })
        this.setState({ name: "" })
        console.log(this.state.todoList, "todoList.....")

    }
    onFilter=(event)=>{

    }
    onEdit=(index,value,editValue)=>{

console.log("index",index,value,"value..")
//    if(value=="Edit"){
//     // this.setState({editValue:item})
//     // this.setState({editStatus:index})
//     // this.setState({btnType:"Update"})
//     // this.setState({btnDelete:"Cancel"}) 
//    }
//    else{
    let array=[...this.state.todoList];
    array[index]=editValue
    this.setState({todoList:[...array]})
    // this.setState({editStatus:-2})  
    // this.setState({btnType:"Edit"})  
    // this.setState({btnDelete:"Delete"})
   
//    }

    }
    onDelete=(item,index,value)=>{
   
     if(value=='Cancel'){
        this.setState({btnType:"Edit"})  
        this.setState({btnDelete:"Delete"}) 
        this.setState({editStatus:-1}) 
     }
     else{
        console.log(item,index,"onDeleteClick")
        console.log(this.state.todoList,"todoLidt.....")
        let array=[...this.state.todoList];
        array.splice(index,1)
        this.setState({todoList:[...array]})
     }

    }
    handleUpdatePArticular=(event,index)=>{
        console.log(event.target.value,"value...",index)
        this.setState({editValue:event.target.value})
    }
    render() {
        return (
            <div className='container-fluid'>

                <div className='row mt-3'>
                    <div className='col-md-6'>
                        <input className='form-control' onChange={this.onChangeInput} value={this.state.name} />
                    </div>
                    <div className='col-md-6'>
                        <button className='btn btn-primary' onClick={()=>this.handleSubmit()}>Submit</button>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        {
                            this.state.todoList.length > 0 ?
                                <ul className='list-group col-md-8 mt-3'>
                                    {this.state.todoList.map(
                                        ((item,index) =>
                               
                                    //  <li key={index}  className={index%2==0?'list-group-item even':'list-group-item odd'}>{this.state.editStatus==index?(<input value={this.state.editValue} onChange={(e)=>this.handleUpdatePArticular(e,index)} />):(item)} <span><button className='btn btn-warning ml-5' onClick={()=>this.onEdit(item,index,this.state.btnType)}>{this.state.btnType} </button>
                                    //  <button className='btn  btn-info ml-5' onClick={()=>this.onDelete(item,index,this.state.btnDelete)}>{this.state.btnDelete}</button></span></li>
                                    <List item={item} index={index} onEdit={this.onEdit}/>
                                    )) 
                                
                                     }
                                </ul>
                                :
                                <div className="card mt-2 col-md-5">
                                    <div className="card-body">
                                       No Todo List Found
                                    </div>
                                </div>

                        }
                           
                    </div>

                </div>

            </div>
        )
    }
}

export default Todolist