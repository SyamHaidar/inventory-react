// style
import { IconButton, Stack, theme, Typography } from '../../style'
// component
import Search from '../Search'

// ----------------------------------------------------------------------

export default function TableListToolbar({
  isLoading,
  placeholder,
  totalRecords,
  startIndex,
  endIndex,
  keyword,
  setKeyword,
  onSearch,
  onPrevious,
  onNext,
  onRefresh,
  disablePrevious,
  disableNext,
}) {
  return (
    <Stack
      direction="row"
      justify="space-between"
      items="center"
      spacing={8}
      sx={{ height: '64px', padding: '0 8px', borderBottom: `1px solid ${theme.color.border}` }}
    >
      {!isLoading && (
        <>
          <Search
            placeholder={placeholder}
            onSearch={onSearch}
            keyword={keyword}
            setKeyword={setKeyword}
            sx={{
              backgroundColor: `${theme.color.light}!important`,
              border: `1px solid ${theme.color.light}!important`,
            }}
          />
          <Stack direction="row" items="center" spacing={8} sx={{ flexShrink: 0 }}>
            <IconButton onClick={onRefresh} icon="refresh" iconSize={16} />
          </Stack>
          <Stack direction="row" items="center" spacing={8} sx={{ flexShrink: 0 }}>
            <Typography
              text={`${startIndex} - ${endIndex} of ${totalRecords}`}
              size={12}
              variant="primary"
              sx={{ display: 'none', '@media (min-width:576px)': { display: 'block' } }}
            />
            <IconButton
              onClick={onPrevious}
              disabled={disablePrevious}
              icon="arrow-left-2"
              iconSize={16}
            />
            <IconButton
              onClick={onNext}
              disabled={disableNext}
              icon="arrow-right-2"
              iconSize={16}
            />
          </Stack>
        </>
      )}
    </Stack>
  )
}
