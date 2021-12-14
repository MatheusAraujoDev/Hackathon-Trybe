import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('Testa a página Home:', () => {
  it('Renderiza um texto com a palavra `Cidades`', () => {
    const { getByText } = render(<App />);
    const heading = getByText('Cidades');
    expect(heading).toBeInTheDocument();
  });
  it('Renderiza o Header', () => {
    const { getByText } = render(<App />);
    const home = getByText('Home');
    const events = getByText('Eventos');
    const contacts = getByText('Contato');
    expect(home).toBeInTheDocument();
    expect(events).toBeInTheDocument();
    expect(contacts).toBeInTheDocument();
  });
});
