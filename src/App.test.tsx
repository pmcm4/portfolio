import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

test('renders the portfolio and resume download', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1, name: /Paolo Miguel.*Morato/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Download CV/i })).toHaveAttribute(
        'href',
        '/Morato%20-%20Resume%202026.pdf'
    );
    expect(screen.getByRole('button', { name: /Send message/i })).toBeInTheDocument();
});
