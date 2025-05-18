import { Table, Input } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import type { TableProps } from 'antd/es/table';

interface TableComponentProps<T> extends TableProps<T> {
  search?: boolean;
  searchPlaceholder?: string;
  searchOnChange?: (value: string) => void;
  searchOnSearch?: (value: string) => void;
  searchOnClear?: () => void;
  titleLabel?: string;
  button?: React.ReactNode;
}

export const TableComponent = <T extends object>(props: TableComponentProps<T>) => {
  const { columns, dataSource, ...rest } = props;
  const { Search } = Input;

  return (
    <div>
      {props.titleLabel && (
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{props.titleLabel}</h2>
        </div>
      )}
      <div className="flex justify-between mb-4">
        {props.search && (
          <Search
            placeholder={props.searchPlaceholder}
            onChange={(e) => props.searchOnChange?.(e.target.value)}
            onSearch={(value) => props.searchOnSearch?.(value)}
            onClear={() => props.searchOnClear?.()}
            className="mb-4"
          />
        )}
        {props.button && <div className="ml-4">{props.button}</div>}
      </div>
      <Table
        bordered
        columns={columns}
        dataSource={dataSource}
        locale={{
          emptyText: (
            <div className="flex flex-col items-center justify-center">
              <InboxOutlined className="text-5xl text-gray-500 mb-2" />
              <p className="text-[#4F4F4F] text-lg">No hay datos</p>
            </div>
          ),
        }}
        pagination={{
          position: ['bottomCenter'],
        }}
        {...rest}
        // hacer la tabla responsive
        scroll={{ x: '100%' }}
      />
    </div>
  );
};
