// pages/index.js
import React, { useEffect, useState } from 'react';
import { extend } from '@syncfusion/ej2-base';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";

const generateKanbanData = () => {
  // Generate sample Kanban data
  const data = [
    { Id: 1, Status: "Open", Summary: "Task 1", Type: "Story" },
    { Id: 2, Status: "InProgress", Summary: "Task 2", Type: "Bug" },
    { Id: 3, Status: "Testing", Summary: "Task 3", Type: "Improvement" },
    { Id: 4, Status: "Close", Summary: "Task 4", Type: "Bug" },

  ];

  return extend([], data, true);
};

const Calender = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch or generate Kanban data
    const kanbanData = generateKanbanData();
    setData(kanbanData);
  }, []);

  return (
    <KanbanComponent
      id="kanban"
      keyField="Status"
      dataSource={data}
      cardSettings={{ contentField: "Summary", headerField: "Id" }}
    >
      <ColumnsDirective>
        <ColumnDirective headerText="To Do" keyField="Open" />
        <ColumnDirective headerText="In Progress" keyField="InProgress" />
        <ColumnDirective headerText="Testing" keyField="Testing" />
        <ColumnDirective headerText="Done" keyField="Close" />
      </ColumnsDirective>
    </KanbanComponent>
  );
};

export default Calender;
