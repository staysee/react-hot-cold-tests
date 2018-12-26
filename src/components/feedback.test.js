import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { isMainThread } from 'worker_threads';

Enzyme.configure({adapter: new Adapter()});

describe('Feedback', () => {
    it ('Renders without crashing', () => {
        shallow(<Feedback />);
    });
})