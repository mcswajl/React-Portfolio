// __tests__/Portfolio.test.js
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Portfolio from '..'
const portrait = { name: "projects", description: "Projects that I have worked on" };


afterEach(cleanup)

describe('Portfolio component', () => {

  it('renders', () => {
    render(<Portfolio currentCategory={portrait} />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Portfolio currentCategory={portrait} />)
    expect(asFragment()).toMatchSnapshot()
  })
});

it('displays text', () => {
  const { getByTestId } = render(<Portfolio currentCategory={portrait} />)
  expect(getByTestId('h1tag')).toHaveTextContent('Projects')
})