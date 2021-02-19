import React, {Component} from 'react'
import AddUser from './AddUser'
import {Route} from 'react-router-dom'
import Login from "./Login";
import User from './User';
import UserSettings from "./UserSettings"
import  {withRouter} from 'react-router'

class MainPage extends Component {
    constructor() {
        super()
        this.state = {
            users: [{
               userName:"Jp@123",
               lastName:"Jayaprakash",
               firstName:"Meesala",
               Password:"Abcd@1234"

              }],
            currentUser:[{
                userName:"",
            }]
        }
        this.authenticate=this.authenticate.bind(this);
    }
    updateCurrentUser(username){
        this.setState((state)=>{state.currentUser.userName=username})
    }
    updatePassword(password){
        let ps=password
        var st=this.state.users;
        let cu=this.state.currentUser.userName;
        console.log(ps);
        console.log(this.state.users[0].Password);
           for(var i=0;i<st.length;i++){
           if(st[i].userName===cu){
               st[i].Password=ps;
            this.setState({users:st})
           }
        }
    }
    authenticate(username,password){
        let us=username
        let ps=password;
        let st=this.state.users;
        var auth=false;
           for(var i=0;i<st.length;i++){
           if(st[i].userName=== us && st[i].Password=== ps)
           {
            this.props.history.push('/User')
            this.updateCurrentUser(username);
            auth=true;
           }
            }
            if(!auth){
                alert("User Does not exist")
            }
        
            
    }

    addUser(userSubmitted) {
        this.setState(state => ({
            users: state.users.concat([userSubmitted])
        }))
    }



    componentDidMount() {
    }
    
    // componentDidUpdate(prevProps, prevState) {
    //     console.log(prevState.posts)
    //     console.log(this.state)
    // }

    render() {
        return ( 
        
        <div>
            <Route exact path = "/" render={() => (
                 <div>
                     <Login onAuthenticate={(username,password)=>this.authenticate(username,password)}></Login>
                 </div>

            )}/> 

            <Route path= "/AddUser" render = {({history}) => (
                <AddUser onAddUser={(addedUser) => {
                    this.addUser(addedUser)
                    history.push('/')
                }}/>
            )}/>

            <Route path = "/User" render={() => (
                 <div>
                     <User data={this.state}></User>
                 </div>

            )}/> 
              <Route path = "/UserSettings" render={({history}) => (
                 <div>
                     <UserSettings data={this.state} onUpdatePassword={(password)=>{
                         this.updatePassword(password) 
                         history.push('/')}}></UserSettings>
                 </div>
                     
            )}/>
         </div>
        )
    }

}


export default  withRouter(MainPage);