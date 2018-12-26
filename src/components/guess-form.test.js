import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('<GuessForm />', () => {
    it ('Renders without crashing', () => {
        shallow(<GuessForm />;)
    });
})