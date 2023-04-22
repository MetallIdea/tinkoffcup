import { observer } from 'mobx-react-lite';
import styles from './CostsList.module.scss';
import { costsStore } from '../../store/CostsStore';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import { PrimeIcons } from 'primereact/api';

export const CostsList = observer(function CostsList() {
  const handleDelete = (id: string) => () => {
    costsStore.deleteCost(id)
  }

  return (
    <div className={styles.self}>
      <Link to="/costs/new">New</Link>
      {
        costsStore.costs.map((cost) => (
          <div role="row" key={cost.id} className="flex">
            <div className="flex gap-2">
              <Link to={`/costs/${cost.id}`}>{cost.title}</Link>
              <Badge value={cost.category?.title ?? 'uncategorized'} />
            </div>
            <div>
              <Button onClick={handleDelete(cost.id)} icon={PrimeIcons.TRASH} rounded text severity="danger" aria-label="Delete" />
            </div>
          </div>
        ))
      }
    </div>
  )
});
