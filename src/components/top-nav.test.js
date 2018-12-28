import React from 'react';
import {shallow} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav >', () => {
    it('Renders without crashing', () => {
        shallow(<TopNav />);
    })

    it('Should call onRestartGame when new game is clicked', () => {
        const callback = jest.fn();
        const wrapper = shallow(<TopNav onRestartGame={callback} />);
        
        wrapper.find('.new').simulate('click', {
            preventDefault() {}
        });
        expect(callback).toHaveBeenCalled();
    })

    it('Should call onGenerateAuralUpdate when Hear State of Game link is clicked', () => {
        const callback = jest.fn();
        const wrapper = shallow(<TopNav onGenerateAuralUpdate={callback} />);

        wrapper.find('.status-link').simulate('click', {
            preventDefault() {}
        });
        expect(callback).toHaveBeenCalled();
    })
})