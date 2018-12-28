import React from 'react';
import {shallow} from 'enzyme';

import Feedback from './feedback';

describe('Feedback', () => {
    it ('Renders without crashing', () => {
        shallow(<Feedback />);
    })

    it('Renders feedback', () => {
        let TEST = 'This is a test feedback';

        let wrapper = shallow(<Feedback feedback={TEST} />);
        expect(wrapper.contains(TEST)).toEqual(true);
    })
})