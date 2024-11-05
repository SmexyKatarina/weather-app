import React, { act } from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

afterEach(cleanup);

test('renders header component', () => {
	// Pre-Req
	act(() => { render(<App />); });

	// Vars
	const headerComponent = screen.getByTestId("header-component");
	const latInput = document.querySelector("label[for='Latitude']");
	const longInput = document.querySelector("label[for='Longitude']");
	const submitButton = screen.getByTestId("submit-weather");

	// Results

	expect(headerComponent).toBeInTheDocument();
	expect(latInput?.closest("div")?.className).toStrictEqual("location-inputs");
	expect(longInput?.closest("div")?.className).toStrictEqual("location-inputs");
	expect(headerComponent).toContainElement(submitButton);   

});