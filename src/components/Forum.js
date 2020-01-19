import React from 'react';
import NavBar from './NavBar';
import '../styles/Forum.scss';
import { Heart } from 'styled-icons/boxicons-regular/Heart';
import { Heart as FillHeart } from 'styled-icons/boxicons-solid/Heart';
import { Send } from 'styled-icons/boxicons-regular/Send';

const forumGroups = [
    'Exercise Pals',
    'Food Friends',
    'Book Nerds',
    'Sudoku Enthusiasts',
    'Social Butterflies',
    'Mental Health Peers',
    'Stressed People'
];

class Forum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedGroup: 'Exercise Pals',
            heartOneClicked: false,
            heartTwoClicked: false,
            heartThreeClicked: false,
            heartFourClicked: false
        };
    }

    render() {
        return (
            <div className='forum-container'>
                <NavBar
                    currentPage='forum'
                />
                <div className='forum-body'>
                    <div className='left-panel-container'>
                        <h1>Your groups</h1>
                        {forumGroups.map((element, i) => {
                            return (
                                <div className='group-card' onClick={() => this.setState({ selectedGroup: element })}>{element}</div>
                            );
                        })}
                    </div>
                    <div className='right-panel-container'>
                        <h1>{this.state.selectedGroup}</h1>

                        <div className='chat-container'>
                            <div className="message-container">
                                <img className="profile-pic" src='https://cleananddelicious.com/wp-content/uploads/2016/03/Avocad0-CD.jpg' />
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
                                    im doing well. how about you? lets get that bread today. jk no more carbs haha
                            </div>
                                <img className="profile-pic" src='https://www.outtherecolorado.com/wp-content/uploads/2017/03/e9bb2a136a67b3aa4f28fa89ff2e9e1f-1024x897.jpg' />
                            </div>
                            <div className="message-container">
                                <img className="profile-pic" src='https://cleananddelicious.com/wp-content/uploads/2016/03/Avocad0-CD.jpg' />
                                <div className='messagebubble'>
                                    yup. im okay. just been chilling and doing hw! wanna hit the gym l8ter?
                                </div>
                                {this.state.heartThreeClicked ?
                                    <FillHeart className='message-heart' onClick={() => this.setState({ heartThreeClicked: false })} size='20px' color='#FFFFFF' />
                                    :
                                    <Heart className='message-heart' onClick={() => this.setState({ heartThreeClicked: true })} size='20px' color='#FFFFFF' />
                                }
                                <div className='message-spacer'></div>
                            </div>
                            <div className="message-container">
                                <div className='message-spacer'></div>

                                {this.state.heartFourClicked ?
                                    <FillHeart className='message-heart' onClick={() => this.setState({ heartFourClicked: false })} size='20px' color='#FFFFFF' />
                                    :
                                    <Heart className='message-heart' onClick={() => this.setState({ heartFourClicked: true })} size='20px' color='#FFFFFF' />
                                }
                                <div className='messagebubble'>
                                    im down! see you soon... :)
                            </div>
                                <img className="profile-pic" src='https://www.outtherecolorado.com/wp-content/uploads/2017/03/e9bb2a136a67b3aa4f28fa89ff2e9e1f-1024x897.jpg' />
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
                    </div>


                </div>
            </div>


        )
    }
}







export default Forum;
