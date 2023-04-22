import { observer } from 'mobx-react-lite';
import { Dialog } from 'primereact/dialog';
import { costsStore } from '../../../store/CostsStore';
import { Chart } from 'primereact/chart';
import { useEffect } from 'react';
import { chartStore } from '../../../store/ChartStore';

export const ChartModal = observer(function ChartModal() {
  useEffect(() => {
    chartStore.calculateChartData();
  }, []);

  const handleHide = () => {
    chartStore.hideChartModal();
  }

  if (!chartStore.chartModalVisible) {
    return null;
  }

  return (
    <Dialog visible onHide={handleHide}>
      {
        costsStore.filteredCosts.length ? (
          <Chart type="doughnut" data={chartStore.chartData as object} options={{
            cutout: '60%'
          }} className="w-full md:w-30rem" />
        ) : <div className="text-center">No data</div>
      }
    </Dialog>
  )
})
