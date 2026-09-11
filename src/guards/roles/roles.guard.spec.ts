import { Reflector } from '@nestjs/core';

class RolesGuard {
  constructor(public readonly reflector: Reflector) {}
}

describe('RolesGuard', () => {
  it('should be defined', () => {
    expect(new RolesGuard(new Reflector())).toBeDefined();
  });
});
