// toThrow

import { divide, ZeroDivisorError } from './divide';

it("0で割るとエラーになる", () => {
    expect(() => divide(10, 0)).toThrow()
});