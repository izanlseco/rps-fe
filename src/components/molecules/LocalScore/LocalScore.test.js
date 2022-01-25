import React from 'react'
import { render, screen } from '@testing-library/react';

import LocalScore from './LocalScore';

describe('LocalScore component', () => {

  it('renders the table', () => {
    render(<LocalScore/>);

    expect(screen.getByText(/1st player/i)).toBeInTheDocument();
    expect(screen.getByText(/2nd player/i)).toBeInTheDocument();
    expect(screen.getByText(/Result/i)).toBeInTheDocument();
  })

  it('renders draw', () => {
    const result = 0
    render(<LocalScore result={result}/>);

    expect(screen.getByText(/Draw/i)).toBeInTheDocument();
  })

  it('renders player one wins', () => {
    const result = 1
    render(<LocalScore result={result}/>);

    expect(screen.getByText(/Player one wins/i)).toBeInTheDocument();
  })

  it('renders player two wins', () => {
    const result = 2
    render(<LocalScore result={result}/>);

    expect(screen.getByText(/Player two wins/i)).toBeInTheDocument();
  })
})
