import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('<InfoSection />', () => {
    it ('Renders without crashing', () => {
        shallow(<InfoSection />;)
    });
})