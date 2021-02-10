import { useMemo } from 'react'
import { useTable } from 'react-table'
import styled from 'styled-components'

const StyledTable = styled.table`
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.primaryLight};
  display: inline-block;
`

const StyledTheaderCell = styled.th`
  padding: 8px 16px;
  text-align: left;
`

const StyledTableRow = styled.tr`
  background-color: ${(props) => props.theme.colors.pureWhite};
  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.primaryLight};
    color: ${(props) => props.theme.colors.highlight};
  }
`

const StyledTableCell = styled.td`
  border-radius: 6px;
  padding: 8px 16px;
  box-shadow: 0 1px 6px 0 rgb(32 33 36 / 10%);
`

interface InteractiveTableProps {
  columnMapping: Array<any>
  data: Array<any>
  handleRowClick?: (data: any) => void
}

const InteractiveTable = ({
  columnMapping,
  data,
  handleRowClick,
}: InteractiveTableProps) => {
  const columns = useMemo(() => columnMapping, [])
  const tableData = useMemo(() => data, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: tableData })

  return (
    <StyledTable {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <StyledTheaderCell {...column.getHeaderProps()}>
                {column.render('Header')}
              </StyledTheaderCell>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row)
          return (
            <StyledTableRow {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <StyledTableCell
                    {...cell.getCellProps()}
                    onClick={() => handleRowClick(row.original)}
                  >
                    {cell.render('Cell')}
                  </StyledTableCell>
                )
              })}
            </StyledTableRow>
          )
        })}
      </tbody>
    </StyledTable>
  )
}

export default InteractiveTable
