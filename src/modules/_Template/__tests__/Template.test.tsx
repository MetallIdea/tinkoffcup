import { render, screen } from '@testing-library/react';
import { Template } from '../Template';
import { templateStore } from '../TemplateStore';

jest.mock('../TemplateStore');

export type Params = {

};

function setup({}: Params) {
  render(<Template />);

  return {
    pageObject: {
      test: () => screen.getByText(/Test2/),
    }
  }
}

test('should render component', () => {
  const { pageObject } = setup({});

  expect(pageObject.test()).toBeInTheDocument();
});
