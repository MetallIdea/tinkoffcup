import { render, screen } from '@testing-library/react';
import { Template } from '../Template';

function setup() {
  render(<Template />);

  return {
    pageObject: {
      test: () => screen.getByText(/Test/),
    }
  }
}

test('should render component', () => {
  const { pageObject } = setup();

  expect(pageObject.test()).toBeInTheDocument();
});
