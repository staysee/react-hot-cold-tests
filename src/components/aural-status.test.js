import React from 'react';
import {shallow} from 'enzyme';

import AuralStatus from './aural-status';

describe('AuralStatus />', () => {
    it('Renders without crashing', () => {
        shallow(<AuralStatus />);
    })

    it('Renders an aural status update', () => {
        let TEST = 'This is a test update';

        let wrapper = shallow(<AuralStatus auralStatus={TEST} />);
        expect(wrapper.contains(TEST)).toEqual(true);
    })
})