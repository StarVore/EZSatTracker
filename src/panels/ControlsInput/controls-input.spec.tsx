import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ControlsInput } from "./controls-input";

describe("ControlsInput", () => {
    it("renders without crashing", () => {
        render(<ControlsInput />);
        expect(screen.getByText("Controls Input")).toBeInTheDocument();
    });
});