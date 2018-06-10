import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Form from './containers/Form';
import { shallow } from 'enzyme';
import store from './store';
import { Provider } from 'react-redux';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}>
		<App />
	</Provider>
	, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App component', () => {
	it('should render form component', () => {
		const component = shallow(<App />);
		const childComponent = component.find(Form);
		expect(childComponent).toHaveLength(1);
	});
});