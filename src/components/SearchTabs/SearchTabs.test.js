import SearchTabs from './SearchTabs';
import SearchTypes from "../../common/SearchTypes";
import React from 'react';
import renderer from 'react-test-renderer';
import {act} from 'react-test-renderer';
import {Tabs, Tab} from '@material-ui/core';

test('Renders exactly as many tabs as in SearchTypes arr', () => {
  const component = renderer.create(
    <SearchTabs />,
  );
  const expectedNumTabLabels = SearchTypes.length;
  expect(component.root.findAllByType(Tabs).length).toEqual(1);
  expect(component.root.findAllByType(Tab).length).toEqual(expectedNumTabLabels);
});

test('Renders tab for each value in SearchTypes arr', () => {
  const component = renderer.create(
    <SearchTabs />,
  );
  SearchTypes.forEach((value, index) => {
    expect(component.root.findByProps({ label: value })).toBeTruthy();
  });
});

test('Renders Javascript tab on initial load', () => {
  const component = renderer.create(
    <SearchTabs />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders CSS tab on click', () => {
  const component = renderer.create(
    <SearchTabs />,
  );

  const button = component.root.findAllByType("button")[1];
  act(button.props.onClick);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Renders HTML tab on click', () => {
  const component = renderer.create(
    <SearchTabs />,
  );

  const button = component.root.findAllByType("button")[2];
  act(button.props.onClick);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});