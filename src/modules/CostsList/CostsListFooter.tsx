import { observer } from 'mobx-react-lite';
import { costsStore } from '../../store/CostsStore';

export const CostsListFooter = observer(function CostsListFooter() {
  const numberFormat = Intl.NumberFormat();
  return (
    <div>
      <div>
        Total items: {costsStore.costs.length}
      </div>
      <div>
        Total spent: {numberFormat.format(costsStore.costs.reduce((prev, curr) => prev + curr.cost, 0))}
      </div>
    </div>
  )
});
