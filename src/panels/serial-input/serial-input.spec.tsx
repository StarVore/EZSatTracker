import { describe, it, expect, beforeAll, vi, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SerialInput } from './serial-input';
import { } from '@vitest/browser/context'
import { show } from '@tauri-apps/api/app';

describe('SerialInput', () => {
    beforeAll(() => {
        render(<SerialInput />);
    });

    it('renders without crashing', () => {
        expect(screen.getByText('Select Serial Device')).toBeInTheDocument();
    });

    it('should update serial state on select change', () => {
        const select = screen.getByLabelText('Select Serial Device') as HTMLSelectElement;
        expect(select.value).toBe('/dev/ttyUSB0');
        select.value = '/dev/ttyAMC0';
        select.dispatchEvent(new Event('change', { bubbles: true }));
        expect(select.value).toBe('/dev/ttyAMC0');
    });

    it('testSerial toggles showMsg and logs serial', () => {
        // Since testSerial is not exported, we test its effect via UI
        const spy = vi.spyOn(console, 'log');
        const button = screen.getByTestId('serialBtn');
        // Initially, message is not shown
        expect(screen.queryByText('It works!')).not.toBeInTheDocument();
        // Click to show message
        button.click();
        expect(spy).toHaveBeenCalledWith('Test serial: false');
        expect(spy).toHaveBeenCalledWith('/dev/ttyAMC0');
    });
});