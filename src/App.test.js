import React from 'react';
import {render, cleanup, fireEvent, getByTestId, screen} from '@testing-library/react';
import App from './App'

afterEach(cleanup);

test('counter starts at zero', () => {
  render(<App/>)
  const counter = screen.getByText(0)
  expect(counter).toHaveTextContent(0)
})

test('counter increases when button is pressed', () => {
  render(<App/>)
  const button = screen.getByText(/Click me!/i)
  const counter = screen.getByText(0)
  fireEvent.click(button)
  expect(counter).toHaveTextContent(1);
})

test('counter increases twice when button is pressed twice', () => {
  render(<App/>)
  const button = screen.getByText(/Click me!/i)
  const counter = screen.getByText(0)
  fireEvent.click(button)
  fireEvent.click(button)
  expect(counter).toHaveTextContent(2);
})

test('counter restarts when reaching 10', () => {
  render(<App/>)
  const button = screen.getByText(/Click me!/i)
  const counter = screen.getByText(0)
  for (let i = 0; i < 10; i++) {
    fireEvent.click(button)
  }
  expect(counter).toHaveTextContent(0)
})
