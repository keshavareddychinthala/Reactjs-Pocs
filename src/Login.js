import React, { Component } from 'react'
import axios from "axios";
import { Route,Routes } from 'react-router-dom'
export class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userName: "",
      password: ""
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleInput = (event) => {
    const { name, value } = event.target;
    console.log(name, "name", "value", value)
    if (name == "user") {
      this.setState({ userName: value })
    }
    else {
      this.setState({ password: value })
    }
  }
  handleSubmit = () => {
    console.log(this.props,"props.....")
    this.props.history.push("./dashboard")
  }

  render() {
    return (
      <>
        <div className='container'>
          <div className="row h-100 mt-5 ml-5 p-5">

            <div className="card col-6 w-25 my-auto">
              <form >
                <div className="input-group flex-nowrap mt-2" >
                  <span className="input-group-text">@</span>
                  <input type="text" className="form-control" placeholder="Username" name='user' onChange={this.handleInput} />
                </div>
                <div className="input-group flex-nowrap mt-2">
                  <span className="input-group-text">@</span>
                  <input type="text" className="form-control" placeholder="password" name='password' type="password" onChange={this.handleInput} />
                </div>
                <button type='button' className='btn btn-primary text-center mt-2'onClick={this.handleSubmit}>Submit</button>
                {/* <Routes> */}
                {/* <Route render={({ history }) => (
                  <button
                    type='submit' className='btn btn-primary text-center mt-2'
                    onClick={() => { history.push('/dashboard') }}
                  >
                    Click Me!
                  </button>
                )} />
                </Routes> */}
              
              </form>
            </div>

          </div>

        </div>
      </>
    )
  }
}

export default Login;