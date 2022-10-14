import styled, { css } from 'styled-components/macro'
import Style from './Style'

// ----------------------------------------------------------------------

const Grid = styled(Style)`
  width: 100%;
  margin: 0 auto;
  display: grid;
  gap: ${(props) => props.$gap || '16px'};

  ${(props) =>
    props.$columns !== false
      ? css`
          @media (min-width: 768px) {
            grid-template-columns: ${(props) => props.$sm && `repeat(${props.$sm}, 1fr)`};
          }

          @media (min-width: 992px) {
            grid-template-columns: ${(props) => props.$md && `repeat(${props.$md}, 1fr)`};
          }

          @media (min-width: 1200px) {
            grid-template-columns: ${(props) => props.$lg && `repeat(${props.$lg}, 1fr)`};
          }
        `
      : css`
          @media (min-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
          }
        `}

  transition: 0.3s;
`

// ----------------------------------------------------------------------

export default function GridStyle({ children, gap, columns = false, sm, md, lg, sx, ...other }) {
  return (
    <Grid
      $gap={gap && `${gap}px`}
      $columns={columns}
      $sm={columns && sm}
      $md={columns && md}
      $lg={columns && lg}
      $sx={sx}
      {...other}
    >
      {children}
    </Grid>
  )
}
