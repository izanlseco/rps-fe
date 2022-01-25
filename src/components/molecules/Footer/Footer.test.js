import React from 'react'
import { render, screen } from '@testing-library/react';

import Footer from './Footer';

describe('Footer component', () => {

  it('renders the name', () => {
    render(<Footer />);

    expect(screen.getByText(/by Izan López Seco @ 2022/i)).toBeInTheDocument();
  })
})
