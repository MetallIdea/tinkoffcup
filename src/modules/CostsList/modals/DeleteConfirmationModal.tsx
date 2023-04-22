import { observer } from 'mobx-react-lite';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { costsStore } from '../../../store/CostsStore';

export const DeleteConfirmationModal = observer(function DeleteConfirmationModal() {
  if (!costsStore.deleteItemId) {
    return null;
  }

  const handleClick = (result: string) => {
    if (result === 'accept' && costsStore.deleteItemId) {
      costsStore.deleteCost(costsStore.deleteItemId);
    }
    costsStore.hideDeleteModal();
  }

  return (
    <ConfirmDialog
      visible
      header={<>Are you sure to delete this cost?</>}
      acceptLabel="Delete"
      onHide={handleClick}
    />
  )
})
