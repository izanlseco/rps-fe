import React from 'react'
import { render, screen } from '@testing-library/react';

import Home from './Home';

let counter = 3

describe('Home component', () => {

  it('renders the title', () => {
    render(<Home />);

    expect(screen.getByText(/Rock, paper, scissors/i)).toBeInTheDocument();
  })

  it('renders the local score', () => {
    render(<Home />);

    expect(screen.getByText(/1st player/i)).toBeInTheDocument();
    expect(screen.getByText(/2nd player/i)).toBeInTheDocument();
    expect(screen.getByText(/Result/i)).toBeInTheDocument();
  });

  it('renders the counter', () => {
    render(<Home counter={counter}/>);

    expect(screen.getByText('Rounds played: 3')).toBeInTheDocument;
  })

  it('renders the control', () => {
    render(<Home />);

    expect(screen.getByRole(/button/i, { name: 'Play round' })).toBeEnabled();
    expect(screen.getByRole(/button/i, { name: 'Restart game' })).toBeEnabled();
  });
})
