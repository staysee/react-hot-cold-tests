import React from 'react';
import {shallow} from 'enzyme';

import GuessList from './guess-list';

describe('GuessList', () => {
    it ('Renders without crashing', () => {
        shallow(<GuessList guesses={[]}/>);
    })

    it('Renders a list of guesses', () => {
        const numbers = [4, 90, 25];
        const wrapper = shallow(<GuessList guesses={numbers} />);
        const guesses = wrapper.find('li');

        expect(guesses.length).toEqual(numbers.length);
        numbers.forEach((number, index) => {
            expect(guesses.at(index).text()).toEqual(number.toString());
        })
    })
})