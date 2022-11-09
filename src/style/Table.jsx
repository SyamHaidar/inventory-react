import styled, { css } from 'styled-components/macro'
import { Style, theme } from '.'

// ----------------------------------------------------------------------

const Table = styled(Style)`
  display: table;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
`

const TableHead = styled(Style)`
  display: table-header-group;
`

const TableBody = styled(Style)`
  display: table-row-group;
`

const TableRow = styled(Style)`
  display: table-row;

  ${(props) =>
    props.$hover &&
    css`
      :hover {
        background-color: ${theme.color.light}99;
        transition: 0.3s;
      }
    `}
`

const TableCell = styled(Style)`
  display: table-cell;
  font-size: 14px;

  ${(props) => {
    switch (props.$padding) {
      case 'none':
        return css`
          padding: 0;
        `
      case 'checkbox':
        return css`
          padding: 0 0 0 16px;
          width: 48px;
        `
      case 'more':
        return css`
          padding: 0 16px 0 0;
          width: 48px;
        `
      default:
        return css`
          padding: 10px;

          :first-child {
            padding: 10px 10px 10px 16px;
          }

          :last-child {
            padding: 10px 16px 10px 10px;
          }
        `
    }
  }}
`

// ----------------------------------------------------------------------

export function TableStyle({ children }) {
  return <Table as="table">{children}</Table>
}

export function TableHeadStyle({ children, sx }) {
  return (
    <TableHead as="thead" $sx={sx}>
      {children}
    </TableHead>
  )
}

export function TableBodyStyle({ children, sx }) {
  return (
    <TableBody as="tbody" $sx={sx}>
      {children}
    </TableBody>
  )
}

export function TableRowStyle({ children, hover = false, sx, ...other }) {
  return (
    <TableRow as="tr" $hover={hover} $sx={sx} {...other}>
      {children}
    </TableRow>
  )
}

export function TableCellStyle({ children, padding, sx, ...other }) {
  return (
    <TableCell as="td" $padding={padding} $sx={sx} {...other}>
      {children}
    </TableCell>
  )
}
