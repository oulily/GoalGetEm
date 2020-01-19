import React from 'react';
import NavBar from './NavBar';
import '../styles/Forum.scss';
import { Heart } from 'styled-icons/boxicons-regular/Heart';
import { Heart as FillHeart } from 'styled-icons/boxicons-solid/Heart';

class Forum extends React.Component {
    render() {
        return (
            <div className='forum-container'>
                <NavBar
                    currentPage='forum'
                />
                <h1>Chat</h1>
                <p>Exercise Buddies</p>
                <div className='chat-container'>
                <div className="message-container">

                    <img className="avocado" src='https://cleananddelicious.com/wp-content/uploads/2016/03/Avocad0-CD.jpg'/>
                    <div className= 'messagebubble'>
                        message
                    </div>
                    <Heart size='20px' color='#FFFFFF' />
                </div>
                <div className="message-container">
                    
                    <img className="avocado" src='https://www.outtherecolorado.com/wp-content/uploads/2017/03/e9bb2a136a67b3aa4f28fa89ff2e9e1f-1024x897.jpg'/>
                    <div className= 'messagebubble'>
                        message
                    </div>
                    <Heart size='20px' color='#FFFFFF' />

                </div>
                </div>
                <br />
                <br />
                <input 
                    required 
                    type='text'
                    placeholder= 'Send message ...'
                    />
            </div>

        )
    }
}
            
           
           
        
   


export default Forum;