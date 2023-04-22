import { observer } from 'mobx-react-lite';
import styles from './CostsList.module.scss';
import { costsStore } from '../../store/CostsStore';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';

export const CostsList = observer(function CostsList() {
  const handleDelete = (id: string) => () => {
    costsStore.deleteCost(id)
  }

  return (
    <div className={styles.self}>
      <Link to="/costs/new">New</Link>
      {
        costsStore.costs.map((cost) => (
          <div role="row" key={cost.id}>
            <div><Link to={`/costs/${cost.id}`}>{cost.title}</Link></div>
            <div>
              <Button onClick={handleDelete(cost.id)} label="Delete" />
            </div>
          </div>
        ))
      }
    </div>
  )
});
