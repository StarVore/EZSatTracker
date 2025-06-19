import { describe, it, expect, beforeAll, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SerialInput } from './serial-input';
import {} from '@vitest/browser/context';

describe('SerialInput', () => {
  beforeAll(() => {
    render(<SerialInput />);
  });

  it('renders without crashing', () => {
    expect(screen.getByText('Select Serial Device')).toBeInTheDocument();
  });
});
