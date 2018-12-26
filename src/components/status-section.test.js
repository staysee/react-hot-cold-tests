import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('<StatusSection />', () => {
    it ('Renders without crashing', () => {
        shallow(<StatusSection />);
    });
})