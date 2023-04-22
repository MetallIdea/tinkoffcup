import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';

export const CostsListHeader = observer(function CostsListHeader() {
  return (
    <div>
      <Link to="/costs/new">
        <Button label="New" />
      </Link>
    </div>
  )
});
