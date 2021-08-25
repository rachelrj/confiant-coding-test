import SearchBar from "./SearchBar";
import {TextField, Button} from '@material-ui/core';
import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';

test('Renders Text Field and Enabled Button', () => {
  const component = renderer.create(
    <SearchBar value='Javascript'/>
  );
  expect(component.root.findAllByType('form').length).toEqual(1);
  expect(component.root.findAllByType(TextField).length).toEqual(1);
  expect(component.root.findAllByType(Button).length).toEqual(1);
});

test('Button Enabled and No Error Message on Initial Load', () => {
  const component = render(
    <SearchBar/>
  );
  const errorElem = component.container.querySelector('#outlined-basic-helper-text');
  expect(errorElem).toBeNull();
  expect(screen.getByRole('button')).toBeEnabled();
});

test('Button Disabled and Error Message if Empty Content Entered', () => {
  const component = render(
    <SearchBar/>
  );
  const textElement = screen.getByTestId("content-input");
  fireEvent.change(textElement, {target: {value: '   '}});
  const errorMessage = screen
    .getByText(/You must include at least one search term./i);
  expect(errorMessage).toBeInTheDocument();
  expect(screen.getByRole('button')).toBeDisabled();
});

test('Button Disabled and Error Message if Too Much Content Entered', () => {
  const component = render(
    <SearchBar/>
  );
  const textElement = screen.getByTestId("content-input");
  fireEvent.change(textElement, {target: {value: contentOver256characters}});
  const errorMessage = screen
    .getByText(/Searches must be no longer than 256 characters./i);
  expect(errorMessage).toBeInTheDocument();
  expect(screen.getByRole('button')).toBeDisabled();
});

const contentOver256characters = '...........................' +
  '..........................................................' +
  '..........................................................' +
  '..........................................................' +
  '..........................................................' +
  '..........................................................' +
  '..........................................................';
