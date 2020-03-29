import { GenerateUsernamePipe } from './generate-username.pipe';

describe('GenerateUsernamePipe', () => {
  it('create an instance', () => {
    const pipe = new GenerateUsernamePipe();
    expect(pipe).toBeTruthy();
  });
});
