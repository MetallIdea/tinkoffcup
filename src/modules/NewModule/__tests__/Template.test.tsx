import { render, screen } from '@testing-library/react';
import { Template } from '../Template';

jest.mock('../TemplateStore');

function setup() {
  render(<Template />);

  return {
    pageObject: {
      test: () => screen.getByText(/Test2/),
    }
  }
}

test('should render component', () => {
  const { pageObject } = setup();

  expect(pageObject.test()).toBeInTheDocument();
});
