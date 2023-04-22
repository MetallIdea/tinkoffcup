import { observer } from 'mobx-react-lite';
import { Dialog } from 'primereact/dialog';
import { categoriesStore } from '../../../store/CategoriesStore';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export const CategoriesModal = observer(function CategoriesModal() {
  if (!categoriesStore.categoriesModalVisible) {
    return null;
  }

  const handleHide = () => {
    categoriesStore.hideCategoriesModal();
  }

  return (
    <Dialog visible onHide={handleHide}>
      <DataTable value={categoriesStore.categories}>
        <Column header="Title" field="title" />
      </DataTable>
    </Dialog>
  )
})
