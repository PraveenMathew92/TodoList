import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Form from './components/Form';
import { shallow } from 'enzyme';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App component', () => {
	it('should render form component', () => {
		const component = shallow(<App />);
		const childComponent = component.find(Form);
		expect(childComponent).toHaveLength(1);
	});
});