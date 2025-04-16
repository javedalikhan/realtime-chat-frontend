import '@testing-library/jest-dom';
import { vi } from 'vitest';
Object.defineProperty(HTMLElement.prototype, 'scrollTo', {
  configurable: true,
  value: vi.fn(),
});
