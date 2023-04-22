import { observer } from 'mobx-react-lite';
import styles from './CostsList.module.scss';
import { costsStore } from '../../store/CostsStore';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import { PrimeIcons } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { CostsListHeader } from './CostsListHeader';
import { CostsListFooter } from './CostsListFooter';
import { Column } from 'primereact/column';
import { Cost } from '../../core/types/costs';
import { useEffect } from 'react';
import { ChartModal } from './modals/ChartModal';
import { DeleteConfirmationModal } from './modals/DeleteConfirmationModal';
import { CategoriesModal } from './modals/CategoriesModal';

export const CostsList = observer(function CostsList() {
  const numberFormat = Intl.NumberFormat();
  const dateFormat = Intl.DateTimeFormat();

  useEffect(() => {
    costsStore.filter();

    return () => costsStore.resetFilter();
  }, []);

  const handleDelete = (id: string) => () => {
    costsStore.showDeleteModal(id)
  }

  return (
    <div className={styles.self}>
      <DataTable<Cost[]>
        value={costsStore.filteredCosts}
        tableStyle={{ minWidth: '50rem' }}
        header={<CostsListHeader />}
        footer={<CostsListFooter />}>
        <Column header="Title" field="title" body={(row: Cost) => <Link to={`/costs/${row.id}`}>{row.title}</Link>} />
        <Column header="Category" field="category" body={(row: Cost) => <Badge value={row.category?.title ?? 'uncategorized'} />} />
        <Column header="Cost" field="cost" body={(row: Cost) => numberFormat.format(row.cost)} />
        <Column header="Date" field="date" body={(row: Cost) => dateFormat.format(row.date)} />
        <Column
          body={
          (row: Cost) =>
            <Button onClick={handleDelete(row.id)} icon={PrimeIcons.TRASH} rounded text severity="danger" aria-label="Delete" />
          }
        />
      </DataTable>

      <ChartModal />
      <DeleteConfirmationModal />
      <CategoriesModal />
    </div>
  )
});
