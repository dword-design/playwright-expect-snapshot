import { expect as base } from '@playwright/test';
import sortKeys from 'sort-keys';

export const expect = base.extend({
  toMatchSnapshot: async (
    received: Record<string, unknown> | string | unknown[],
    ...args
  ) => {
    if (typeof received !== 'string') {
      received = sortKeys(received, { deep: true });
      received = JSON.stringify(received, undefined, 2);
    }

    try {
      await base(received).toMatchSnapshot(...args);
      return { message: () => 'Snapshot matched', pass: true };
    } catch (error) {
      return { message: () => error.message, pass: false };
    }
  },
});
