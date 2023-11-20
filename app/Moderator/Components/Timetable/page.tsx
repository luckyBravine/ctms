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
import table from "./data"

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

  const commandOptions = {
    commands: [
      { type: 'Edit', buttonOption: { content: 'Edit' } },
      { type: 'Delete', buttonOption: { content: 'Delete' } },
    ],
  } as CommandModel;
  const toolbarOptions = ['Search'];

  const searchOptions = {
    fields: ['Morning', 'Mid-Morning', 'Afternoon', 'Time', 'Lectures'],
  };

  // const searchHandler = (args: any ) => {
  //   setSearchText(args.target.value);
  //   gridInstance.search(searchText);
  // };

  return (
    <div>
      {/* <input
        type="text"
        placeholder="Search..."
        onChange={searchHandler}
        value={searchText}
      /> */}
      <GridComponent
        dataSource={table}
        allowPaging={true}
        pageSettings={pageSettings}
        filterSettings={filterSettings}
        allowGrouping={true}
        groupSettings={groupSettings}
        allowSorting={true}
        allowFiltering={true}
        height={400}
        toolbar={toolbarOptions}
        searchSettings={searchOptions}
        
      >
        <ColumnsDirective>
          <ColumnDirective field="Morning" width="100" textAlign="Right" />
          <ColumnDirective field="Mid-Morning" width="100" />
          <ColumnDirective field="Evening" width="100" textAlign="Right" />
          <ColumnDirective
            field="Time"
            width="100"
            format="C2"
            textAlign="Right"
          />
          <ColumnDirective field="Lecturer" width="100" />
          <ColumnDirective
            headerText="Venue"
            width="150"
            
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
