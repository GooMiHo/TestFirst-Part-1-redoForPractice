describe('helloWorld', () => {
  it('a `hi` variable is in the global scope', () => {
    expect(hi).toBe('hi');
  });

  it('a `world` variable is in the global scope', () => {
    expect(world).toBe('world');
  });

  it('the function helloWorld returns a string', () => {
    expect(helloWorld).toBeDefined();
    expect(helloWorld()).toBe('hi world');
  });

  it('the object `goodbyeWorld` has three keys', () => {
    expect(Object.keys(goodbyeWorld).length).toBe(3);
  });
});
