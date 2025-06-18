import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SatelliteInput } from './satellite-input';
import { } from '@vitest/browser/context'

describe('SatelliteInput', () => {
    it('renders without crashing', () => {
        render(<SatelliteInput />)
        expect(screen.getByText('Satellite Input')).toBeInTheDocument();
    });
});