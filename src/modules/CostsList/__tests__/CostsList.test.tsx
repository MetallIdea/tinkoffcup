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
      getRows: () => screen.queryAllByRole('row'),
    }
  }
}

test('should render 0 rows', () => {
  const {
    pageObject
  } = setup();

  expect(pageObject.getRows()).toHaveLength(0)
});
