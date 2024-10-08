// import { Table as AntdTable } from 'antd';
// import type { TablePaginationConfig } from 'antd';

// interface CustomTableProps {
//   data: any[];
//   pagination: TablePaginationConfig;
//   onChange: (pagination: TablePaginationConfig) => void;
//   columns: any[]
// }

// const Index = ({ data, pagination, onChange,columns }:CustomTableProps) => {
//   return (
//     <AntdTable
//       columns={columns}
//       dataSource={data}
//       pagination={pagination}
//       onChange={(pagination) => onChange(pagination)}
//       rowKey={(record) => record.id || `${record.name}_${record.someOtherField}`}
//       bordered
//     />
//   );
// };

// export default Index;

import { Table as AntdTable } from 'antd';
import type { TablePaginationConfig } from 'antd';
import { useRef } from 'react';

interface CustomTableProps {
  data: any[];
  pagination: TablePaginationConfig;
  onChange: (pagination: TablePaginationConfig) => void;
  columns: any[];
}

const Index = ({ data, pagination, onChange, columns }: CustomTableProps) => {
  const tableRef = useRef(null);  // Create a ref for the table

  return (
    <AntdTable
      ref={tableRef}  // Attach the ref to the table
      columns={columns}
      dataSource={data}
      pagination={pagination}
      onChange={(pagination) => onChange(pagination)}
      rowKey={(record) => record.id || `${record.name}_${Math.random()}`}  // Ensure a unique key
      bordered
    />
  );
};

export default Index;
