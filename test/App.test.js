/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/components/App';
import Navbar from '../client/components/Navbar';
import Article from '../client/components/Article';


configure({ adapter: new Adapter() });

describe('Test App component', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<App />, { disableLifecycleMethods: true });
    console.log(wrapper.debug());
  });

  it('renders without crashing', () => {
    expect(wrapper.state('searchVal')).toEqual('');
    expect(wrapper.state('allArticles')).toEqual([]);
  });

  it('should not return an error', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should have a child component of type "Navbar" at "index" of 0', () => {
    expect(wrapper.childAt(0).type()).toBe(Navbar);
  });

  it('should have a class of "app"', () => {
    expect(wrapper.hasClass('app')).toBeTruthy();
  });

  it('should be an instance of App', () => {
    expect(wrapper.instance()).toBeInstanceOf(App);
  });

  it('should have a prop of "searchVal" with a value of "news"', () => {
    wrapper.find(Navbar).invoke('handleChange')({ target: { value: 'news' } });
    expect(wrapper.find(Navbar).prop('searchVal')).toBe('news');
  });

  it('should not be falsy because "App" does not return neither null or false', () => {
    expect(wrapper.isEmptyRender()).toBeFalsy();
  });

  it('should return a name with a value of "div"', () => {
    expect(wrapper.name()).toBe('div');
  });

  it('should have a prop "allArticles" with a value of []', () => {
    expect(wrapper.find(Article).props().allArticles).toEqual([]);
  });
});
