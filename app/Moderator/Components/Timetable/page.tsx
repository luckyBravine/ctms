// pages/timetable.js
import React, { useState } from 'react';
import {
  ColumnDirective,
  ColumnsDirective,
  Filter,
  GridComponent,
  Group,
  Inject,
  Page,
  Sort,
  Edit,
  CommandModel,
} from '@syncfusion/ej2-react-grids';
// import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
// import { data } from './datasource';

const Timetable = () => {
  const [searchText, setSearchText] = useState('');
  const [gridInstance, setGridInstance] = useState(null);

  const pageSettings = { pageSize: 6 };
  const sortSettings = {
    columns: [{ field: 'EmployeeID', direction: 'Ascending' }],
  };
  const filterSettings = {
    columns: [{ field: 'EmployeeID', operator: 'greaterthan', value: 2 }],
  };
  const groupSettings = { columns: ['EmployeeID'] };

  const commandOptions: CommandModel = {
    commands: [
      { type: 'Edit', buttonOption: { content: 'Edit' } },
      { type: 'Delete', buttonOption: { content: 'Delete' } },
    ],
  };

  const toolbarOptions = ['Search'];

  const searchOptions = {
    fields: ['OrderID', 'CustomerID', 'EmployeeID', 'Freight', 'ShipCountry'],
  };

  const searchHandler = (args) => {
    setSearchText(args.target.value);
    gridInstance.search(searchText);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={searchHandler}
        value={searchText}
      />
      <GridComponent
        dataSource={data}
        allowPaging={true}
        pageSettings={pageSettings}
        filterSettings={filterSettings}
        allowGrouping={true}
        groupSettings={groupSettings}
        allowSorting={true}
        sortSettings={sortSettings}
        allowFiltering={true}
        height={400}
        toolbar={toolbarOptions}
        searchSettings={searchOptions}
        ref={(grid) => setGridInstance(grid)}
      >
        <ColumnsDirective>
          <ColumnDirective field="OrderID" width="100" textAlign="Right" />
          <ColumnDirective field="CustomerID" width="100" />
          <ColumnDirective field="EmployeeID" width="100" textAlign="Right" />
          <ColumnDirective
            field="Freight"
            width="100"
            format="C2"
            textAlign="Right"
          />
          <ColumnDirective field="ShipCountry" width="100" />
          <ColumnDirective
            headerText="Actions"
            width="150"
            commands={commandOptions.commands}
          />
        </ColumnsDirective>
        <Inject
          services={[Page, Sort, Filter, Group, Edit]}
        />
      </GridComponent>
    </div>
  );
};

export default Timetable;
