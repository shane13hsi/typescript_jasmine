declare var describe, it, expect;

import { Store } from '../../src/Store';

describe('test suite', () => {
  it('test', function () {
    var store = new Store();
    expect(store.calc(1, 2)).toBe(3);
  });
});
