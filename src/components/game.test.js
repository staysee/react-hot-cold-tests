import React from 'react';
import {shallow} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
    it ('Renders without crashing', () => {
        shallow(<Game />);
    })

    it('Can restart a new game', () => {
        const wrapper = shallow(<Game />);

        wrapper.setState({
            guesses: [10, 20, 30, 40],
            feedback: 'Very Hot',
            auralStatus: 'Test',
            correctAnswer: 0
        })

        wrapper.instance().restartGame();
        expect(wrapper.state('guesses')).toEqual([]);
        expect(wrapper.state('feedback')).toEqual('Make your guess!');
        expect(wrapper.state('auralStatus')).toEqual('');
        expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(1);
        expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
    })

    it('Can get an aural status update', () => {
        const wrapper = shallow(<Game />);

        wrapper.setState({
            correctAnswer: 100
        });

        wrapper.instance().makeGuess(3);
        wrapper.instance().makeGuess(50);
        wrapper.instance().makeGuess(60);
        wrapper.instance().makeGuess(99);
        
        wrapper.instance().generateAuralUpdate();

        expect(wrapper.state('auralStatus')).toEqual('Here\'s the status of the game right now: You\'re Hot! You\'ve made 4 guesses. In order of most- to least-recent, they are: 99, 60, 50, 3');
    })

    it('Can make guesses', () => {
        const wrapper = shallow(<Game />);

        wrapper.setState({
            correctAnswer: 100
        })

        wrapper.instance().makeGuess(3);
        expect(wrapper.state('guesses')).toEqual([3]);
        expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');
        
        wrapper.instance().makeGuess(60);
        expect(wrapper.state('guesses')).toEqual([3, 60]);
        expect(wrapper.state('feedback')).toEqual('You\'re Cold...');

        wrapper.instance().makeGuess(80);
        expect(wrapper.state('guesses')).toEqual([3, 60, 80]);
        expect(wrapper.state('feedback')).toEqual('You\'re Warm.');

        wrapper.instance().makeGuess(99);
        expect(wrapper.state('guesses')).toEqual([3, 60, 80, 99]);
        expect(wrapper.state('feedback')).toEqual('You\'re Hot!');

        wrapper.instance().makeGuess(100);
        expect(wrapper.state('guesses')).toEqual([3, 60, 80, 99, 100]);
        expect(wrapper.state('feedback')).toEqual('You got it!');
    })
})