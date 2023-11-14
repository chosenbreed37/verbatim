import { createService } from "./quotes-service";

describe('quote search', () => {
    it('matches against quote text', () => {
        const ds = [
            { text: 'Quantity has a quality all of its own', author: 'Josef Stalin' }
        ];

        const sut = createService(ds);
        const actual = sut.search('quantity');
        expect(actual).toEqual(ds);
    });
});