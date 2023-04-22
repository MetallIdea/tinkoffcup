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

export const CostsListHeader = observer(function CostsListHeader() {
  const handleChangeSearch: ChangeEventHandler<HTMLInputElement> = (event) => {
    costsStore.filterCost(event.target.value);
  }
  const handleChangeDate = (event: CalendarChangeEvent) => {
    costsStore.filterByDate(event.value instanceof Date ? event.value : null);
  }

  const handleChangeCategory = (event: DropdownChangeEvent) => {
    costsStore.filterByCategories(event.value);
  }

  const handleClickViewChart = () => {
    costsStore.showChartModal();
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
        <FormField name="date" label="Filter by date">
          <Calendar showIcon dateFormat="dd.mm.yy" id="date" name="date" showButtonBar onChange={handleChangeDate} />
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
