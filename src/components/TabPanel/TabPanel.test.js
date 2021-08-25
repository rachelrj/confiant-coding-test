import TabPanel from "./TabPanel";
import React from 'react';
import renderer from 'react-test-renderer';
import {Box} from '@material-ui/core';

test('Is hidden if value does not equal key', () => {
  const component = renderer.create(
    <TabPanel
      key={1}
      value={0}
      index={1}>
      <span>Hello</span>
    </TabPanel>
  );
  expect(component.root.findAllByType(Box).length).toEqual(0);
  expect(component.root.findAllByType('span').length).toEqual(0);
});

test('Displays if value does equal key', () => {
  const component = renderer.create(
    <TabPanel
      key={1}
      value={1}
      index={1}>
      <span>Hello</span>
    </TabPanel>
  );
  expect(component.root.findAllByType(Box).length).toEqual(1);
  expect(component.root.findAllByType('span').length).toEqual(1);
});
