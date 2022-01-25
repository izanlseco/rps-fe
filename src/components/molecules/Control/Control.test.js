import React from 'react'
import { render, screen } from '@testing-library/react';

import Control from './Control';

describe('Control component', () => {
  it('renders the buttons', () => {
    render(<Control />);

    expect(screen.getByRole(/button/i, { name: 'Play round' })).toBeEnabled();
    expect(screen.getByRole(/button/i, { name: 'Restart game' })).toBeEnabled();
  })
})
