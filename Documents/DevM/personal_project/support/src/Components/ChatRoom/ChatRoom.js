import React, {Component} from "react";
import "./ChatRoom.css"
// import io from "socket.io-client"

// const socketUrl = "http://192.168.0.58:4001/"

export default class ChatRoom extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            socket : null
        };
        
    }
    
    // initSocket = () => {
    //     const socket = io(socketUrl)
    //     socket.on('Connected', () =>{
    //         console.log('connected socket')
    //     })

    //     this.setState({socket})
    // }


    render(){
        const {title} = this.props
        return(
            <div className='chatroom'>
                {title}
        

                <input type='text' />
                <button type='submit'>Submit</button>
            </div>
        )
    }
}