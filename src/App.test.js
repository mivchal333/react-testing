import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

it('renders', () => {
  const appScreen = shallow(<App/>);
  expect(appScreen.exists()).toBe(true);
});
