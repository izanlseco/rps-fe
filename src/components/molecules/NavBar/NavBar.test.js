import React from 'react'
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import NavBar from './NavBar';

describe('NavBar component', () => {

  it('renders the NavBar', () => {
    render(<NavBar />, { wrapper: MemoryRouter });

    expect(screen.getByText(/Play/i)).toBeInTheDocument();
    expect(screen.getByText(/Global score/i)).toBeInTheDocument();
  })
})
