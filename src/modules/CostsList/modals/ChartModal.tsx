import { observer } from 'mobx-react-lite';
import { Dialog } from 'primereact/dialog';
import { costsStore } from '../../../store/CostsStore';
import { Chart } from 'primereact/chart';
import { useEffect } from 'react';

export const ChartModal = observer(function ChartModal() {
  useEffect(() => {
    costsStore.calculateChartData();
  }, []);

  const handleHide = () => {
    costsStore.hideChartModal();
  }

  if (!costsStore.chartModalVisible) {
    return null;
  }

  return (
    <Dialog visible onHide={handleHide}>
      <Chart type="doughnut" data={costsStore.chartData as object} options={{
        cutout: '60%'
      }} className="w-full md:w-30rem" />
    </Dialog>
  )
})
