import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { costsStore } from '../../store/CostsStore';
import { ChangeEventHandler } from 'react';
import { Calendar, CalendarChangeEvent } from 'primereact/calendar';
import { FormField } from '../../core/components/form/FormField';

export const CostsListHeader = observer(function CostsListHeader() {
  const handleChangeSearch: ChangeEventHandler<HTMLInputElement> = (event) => {
    costsStore.filterCost(event.target.value);
  }
  const handleChangeDate = (event: CalendarChangeEvent) => {
    costsStore.filterByDate(event.value instanceof Date ? event.value : null);
  }

  return (
    <div className="flex justify-content-between align-items-center">
      <div className="flex justify-content-between align-items-center">
        <Link to="/costs/new">
          <Button label="New" />
        </Link>
      </div>

      <div className="flex justify-content-end align-items-center">
        <FormField name="text" label="Filter by title and cost">
          <InputText onChange={handleChangeSearch} />
        </FormField>
        <FormField name="date" label="Filter by date">
          <Calendar showIcon dateFormat="dd.mm.yy" id="date" name="date" showButtonBar onChange={handleChangeDate} />
        </FormField>
      </div>
    </div>
  )
});
