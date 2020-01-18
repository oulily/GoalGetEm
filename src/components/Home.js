import React from 'react';
import NavBar from './NavBar';
import '../styles/Home.scss';

const hobbies = [
    {
        label: 'Exercise',
        goals: [
            'Hit the gym 3 times a week',
            'Stretch every morning',
        ]
    },
    {
        label: 'Improve diet',
        goals: [
            'Eat less processed food',
            'Drink a cup of water before every meal'
        ]
    },
    {
        label: 'Reading',
        goals: [
            'Read a new book every month'
        ]
    },
    {
        label: 'Sudoku',
        goals: [
            'Do 30 minutes of Sudoku puzzles a day'
        ]
    },
    {
        label: 'Improving relationships',
        goals: [
            'Reach out to a friend',
            'Send a text of appreciation to a friend'
        ]
    },
    {
        label: 'Meet new people',
        goals: [
            'Go to a social event this week',
            'Say hi to a random person',
            'Ask someone how their day is'
        ]
    },
    {
        label: 'Improve grades',
        goals: [
            'Set aside a certain amount of time for studying',
        ]
    },
    {
        label: 'Better mental health',
        goals: [
            'Say a positive affirmation each day',
            'Allow yourself an hour of relaxation',
            'Spend less time on social media'
        ]
    },
    {
        label: 'Reduce stress',
        goals: [
            'Take frequent breaks when working'
        ]
    }
];

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCard: ''
        }
    }

    render() {
        return (
            <div className='home-container'>
                <NavBar
                    currentPage='home'
                />
                <h1 className='home-quote'>"Inspirational quote..."</h1>
                <div className='home-body'>
                    <section className='hobby-list'>
                        {hobbies.map((element, i) => {
                            return (
                                <div className='hobby-card' onClick={() => this.setState({ selectedCard: element.label })}>
                                    {element.label}
                                </div>
                            );
                        })}
                    </section>
                    <section className='hobby-info'>
                        {this.state.selectedCard ?
                            <h2>Goal: {hobbies.find((hobby, i) => hobby.label === this.state.selectedCard).label}</h2>
                            : ''
                        }
                        {this.state.selectedCard ? <h4>Weekly challenges</h4> : ''}
                        {this.state.selectedCard ? <hr /> : ''}
                        <ul>
                            {this.state.selectedCard ?
                                hobbies.find((hobby, i) => hobby.label === this.state.selectedCard).goals.map((goalElement, i) => {
                                    return (
                                        <li>{goalElement}</li>
                                    );
                                }) :
                                <h2> Select a goal to learn more about it</h2>
                            }
                        </ul>
                    </section>
                </div>
            </div >
        );
    }
}

export default Home;