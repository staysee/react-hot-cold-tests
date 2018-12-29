import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
    it ('Renders without crashing', () => {
        shallow(<GuessForm />);
    })

    it('Should trigger the onMakeGuess callback when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessForm onMakeGuess={callback} />);
        const guess = 5;

        wrapper.find('input[type="number"]').instance().value = guess;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(guess.toString());
    })

    it('Should clear the input when the form is submitted', () => {
        const wrapper = mount(<GuessForm />)
        const input = wrapper.find('input[type="number"]');
        
        input.instance().value = 5;
        wrapper.simulate('submit');
        expect(input.instance().value).toEqual('');
    })

})