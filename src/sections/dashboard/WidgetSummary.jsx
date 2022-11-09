// style
import { Box, Stack, SvgIcon, theme, Typography } from '../../style'

// ----------------------------------------------------------------------

export default function WidgetSummary({ name, value, icon, color, iconSx }) {
  return (
    <Stack justify="center" items="center" sx={{ width: '100%', minWidth: '200px' }}>
      <Stack direction="row" items="center" spacing={16}>
        <Stack
          justify="center"
          items="center"
          sx={{
            position: 'relative',
            backgroundColor: `${theme.color[color].main}29`,
            borderRadius: theme.size.rounded.full,
            height: '64px',
            width: '64px',
            flexShrink: 0,
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              backgroundColor: theme.color.paper,
              borderRadius: theme.size.rounded.full,
              height: '52px',
              width: '52px',
            }}
          />
          <SvgIcon
            icon={icon ? icon : 'box'}
            size={29}
            color={theme.color[color].main}
            sx={iconSx}
          />
        </Stack>
        <Stack direction="column">
          <Typography text={value} size={28} weight="700" variant="primary" />
          <Typography text={name} size={14} weight="500" />
        </Stack>
      </Stack>
    </Stack>
  )
}
