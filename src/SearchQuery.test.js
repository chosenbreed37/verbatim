import { render, fireEvent } from '@testing-library/react';
import SearchQuery from './SearchQuery';

const createSut = ({ onChangeText, onSearch }) => {
    return render(<SearchQuery onChangeText={onChangeText} onSearch={onSearch} />);
}

describe('search query', () => {
    test('renders search box', () => {
        const { getByRole, findByQuery } = createSut({});
        const searchBox = getByRole('textbox', { name: /search-box/i });
        expect(searchBox).toBeInTheDocument();
    });

    test('renders search button', () => {
        const { getByRole } = createSut({});
        const searchButton = getByRole('button', { name: /search-button/i });
        expect(searchButton).toBeInTheDocument();
    });

    test('handles search button click', () => {
        const spy = jest.fn();
        const { getByRole } = createSut({onSearch: spy});
        const searchButton = getByRole('button', { name: /search-button/i });
        fireEvent.click(searchButton);
        expect(spy).toHaveBeenCalled();
    });
});