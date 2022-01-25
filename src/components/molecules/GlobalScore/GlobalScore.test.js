import React from 'react'
import { render, screen } from '@testing-library/react';

import GlobalScore from './GlobalScore';

describe('GlobalScore component', () => {

  it('renders the table', () => {
    render(<GlobalScore />);

    expect(screen.getByText(/Total rounds/i)).toBeInTheDocument();
    expect(screen.getByText(/Total 1st player wins/i)).toBeInTheDocument();
    expect(screen.getByText(/Total 2nd player wins/i)).toBeInTheDocument();
    expect(screen.getByText(/Total draws/i)).toBeInTheDocument();
  })

  it('renders the data when empty', () => {
    render(<GlobalScore />);

    expect(screen.getAllByRole(/cell/i)).toHaveLength(4);
  })
})
