import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { costsStore } from '../../store/CostsStore';
import { ChangeEventHandler } from 'react';
import { Calendar, CalendarChangeEvent } from 'primereact/calendar';
import { FormField } from '../../core/components/form/FormField';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { categoriesStore } from '../../store/CategoriesStore';
import { chartStore } from '../../store/ChartStore';

export const CostsListHeader = observer(function CostsListHeader() {
  const handleChangeSearch: ChangeEventHandler<HTMLInputElement> = (event) => {
    costsStore.filterCost(event.target.value);
  }

  const handleChangeStartDate = (event: CalendarChangeEvent) => {
    costsStore.filterByStartDate(event.value instanceof Date ? event.value : null);
  }

  const handleChangeEndDate = (event: CalendarChangeEvent) => {
    costsStore.filterByEndDate(event.value instanceof Date ? event.value : null);
  }

  const handleChangeCategory = (event: DropdownChangeEvent) => {
    costsStore.filterByCategories(event.value);
  }

  const handleClickViewChart = () => {
    chartStore.showChartModal();
  }

  return (
    <div className="flex justify-content-between align-items-center">
      <div className="flex justify-content-between align-items-center gap-2">
        <Link to="/costs/new">
          <Button label="New" />
        </Link>

        <Button onClick={handleClickViewChart} label="View chart" />
      </div>

      <div className="flex justify-content-end align-items-center gap-2">
        <FormField name="text" label="Filter by title and cost">
          <InputText onChange={handleChangeSearch} />
        </FormField>
        <FormField name="startDate" label="Start date">
          <Calendar maxDate={costsStore.endDate ?? undefined} showIcon dateFormat="dd.mm.yy" id="startDate" name="startDate" showButtonBar onChange={handleChangeStartDate} />
        </FormField>
        <FormField name="endDate" label="End date">
          <Calendar minDate={costsStore.startDate ?? undefined} showIcon dateFormat="dd.mm.yy" id="endDate" name="endDate" showButtonBar onChange={handleChangeEndDate} />
        </FormField>
        <FormField name="date" label="Filter by category">
          <Dropdown
            value={costsStore.categoriesFilter}
            options={categoriesStore.categories}
            optionLabel="title"
            optionValue="id"
            onChange={handleChangeCategory}
            showClear
          />
        </FormField>
      </div>
    </div>
  )
});
