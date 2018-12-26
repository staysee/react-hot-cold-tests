import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('GuessList', () => {
    it ('Renders without crashing', () => {
        shallow(<GuessList />);
    });
})