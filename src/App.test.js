// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CryptoT title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CryptoT/i);
    expect(titleElement).toBeInTheDocument();
});
