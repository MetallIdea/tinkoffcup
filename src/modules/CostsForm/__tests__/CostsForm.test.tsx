import { render, screen } from '@testing-library/react';
import { CostsForm } from '../CostsForm';
import { BrowserRouter } from 'react-router-dom';

function setup() {
  render((
    <BrowserRouter>
      <CostsForm />
    </BrowserRouter>
  ));

  return {
    pageObject: {
      getTitleField: () => screen.getByLabelText(/Title/),
    }
  }
}

test('should render form', () => {
  const { pageObject } = setup();

  expect(pageObject.getTitleField()).toBeInTheDocument();
})
