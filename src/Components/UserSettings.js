import React, {Component} from 'react'

class AddUser extends Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault();
        const Password = event.target.elements.Password.value
        if (Password.length>5 ){
            this.props.onUpdatePassword(Password)
        }
        else 
        {
            alert("Enter valid Password")
        }

    }

    render() {
        return (
    <div>
        <h1> Enter New Password </h1>
        <div className="form">
          <form onSubmit={this.handleSubmit}> 
               <input type ="text" placeholder="Password" name="Password"/>
               <button> Change Password </button>
          </form>
        </div>
    </div>
    )
    }
}



export default AddUser;