import { test } from '@playwright/test';
import sortKeys from 'sort-keys';

import { expect } from '.';

test('works', () =>
  expect(
    sortKeys(
      { bar: 'baz', foo: 'bar' },
      { compare: (a, b) => -a.localeCompare(b) },
    ),
  ).toMatchSnapshot());
