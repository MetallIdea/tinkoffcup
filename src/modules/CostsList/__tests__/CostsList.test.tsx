import { render, screen } from '@testing-library/react';
import { CostsList } from '../CostsList';
import { BrowserRouter } from 'react-router-dom';

function setup() {
  render((
    <BrowserRouter>
      <CostsList />
    </BrowserRouter>
  ));

  return {
    pageObject: {
      getNoResults: () => screen.queryByText(/No results found/),
    }
  }
}

test('should render 0 rows', () => {
  const {
    pageObject
  } = setup();

  expect(pageObject.getNoResults()).toBeInTheDocument();
});
