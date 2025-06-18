import { render, fireEvent, screen, waitForElementToBeRemoved } from "@testing-library/react";
import { describe, it, expect, beforeAll, afterAll, vi } from "vitest";
import { GPSInput } from "./gps-input";

describe("GPSInput", () => {
    beforeAll(() => {
        render(<GPSInput />);
    });
    
    it("renders input and button", () => {
        expect(screen.getByLabelText(/GPS Coordinates/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText("-0.0000,0.0000")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /Enter/i })).toBeInTheDocument();
    });

    it("updates input value on change", () => {
        const input = screen.getByPlaceholderText("-0.0000,0.0000") as HTMLInputElement;
        fireEvent.change(input, { target: { value: "12.3456,78.9012" } });
        expect(input.value).toBe("12.3456,78.9012");
    });

    it("shows message after submitting the form", () => {
        const input = screen.getByPlaceholderText("-0.0000,0.0000");
        const button = screen.getByRole("button", { name: /Enter/i });

        fireEvent.change(input, { target: { value: "1.2345,6.7890" } });
        fireEvent.click(button);

        expect(screen.getByText(/It works!/i)).toBeInTheDocument();
    });

    it("toggles message visibility on multiple submits", () => {
        const button = screen.getByRole("button", { name: /Enter/i });
        const spy = vi.spyOn(console, "log");

        // First submit: show message
        fireEvent.click(button);
        expect(spy).toHaveBeenCalledWith('Test gps: true');
        expect(spy).toHaveBeenCalledWith('1.2345,6.7890');
    });
});