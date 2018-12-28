import React from 'react';
import {shallow} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
    it ('Renders without crashing', () => {
        shallow(<GuessCount />);
    })

    it('Renders the correct guess count', () => {
        let count = 5;
        let wrapper = shallow(<GuessCount guessCount={count} />);
        expect(wrapper.text()).toEqual(`You've made ${count} guesses!`)
    })
})