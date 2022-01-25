import React from 'react'
import { render, screen } from '@testing-library/react';

import Button from './Button';

describe('Button component', () => {

  it('renders the table', () => {
    render(<Button />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  })
})
