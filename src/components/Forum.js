import React from 'react';
import NavBar from './NavBar';
import '../styles/Forum.scss';
import { Heart } from 'styled-icons/boxicons-regular/Heart';
import { Heart as FillHeart } from 'styled-icons/boxicons-solid/Heart';
import { Send } from 'styled-icons/boxicons-regular/Send';

class Forum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heartOneClicked: false,
            heartTwoClicked: false
        };
    }

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
                        <img className="avocado" src='https://cleananddelicious.com/wp-content/uploads/2016/03/Avocad0-CD.jpg' />
                        <div className='messagebubble'>
                            hello person! how are you doing today?
                    </div>
                        {this.state.heartOneClicked ?
                            <FillHeart className='message-heart' onClick={() => this.setState({ heartOneClicked: false })} size='20px' color='#FFFFFF' />
                            :
                            <Heart className='message-heart' onClick={() => this.setState({ heartOneClicked: true })} size='20px' color='#FFFFFF' />
                        }
                        <div className='message-spacer'></div>
                    </div>
                    <div className="message-container">
                        <div className='message-spacer'></div>

                        {this.state.heartTwoClicked ?
                            <FillHeart className='message-heart' onClick={() => this.setState({ heartTwoClicked: false })} size='20px' color='#FFFFFF' />
                            :
                            <Heart className='message-heart' onClick={() => this.setState({ heartTwoClicked: true })} size='20px' color='#FFFFFF' />
                        }
                        <div className='messagebubble'>
                            im doing well. how about you? let's get that bread today. jk no more carbs haha
                    </div>
                        <img className="avocado" src='https://www.outtherecolorado.com/wp-content/uploads/2017/03/e9bb2a136a67b3aa4f28fa89ff2e9e1f-1024x897.jpg' />
                    </div>
                </div>

                <div className='send-container'>
                    <input
                        required
                        type='text'
                        placeholder='Send message ...'
                    />
                    <Send size='20px' color='#FFFFFF' />
                </div>
            </div>

        )
    }
}







export default Forum;