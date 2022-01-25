import React from 'react'
import { render, screen } from '@testing-library/react';

import Title from './Title';

describe('Title component', () => {

  it('renders the title', () => {
    render(<Title />);

    expect(screen.getByText(/Rock, paper, scissors/i)).toBeInTheDocument();
  })
})
