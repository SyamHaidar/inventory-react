// style
import { Card, Stack, SvgIcon, theme, Typography } from '../../style'

// ----------------------------------------------------------------------

export default function WidgetSummary({ name, value, icon, color, iconSx }) {
  return (
    <Card sx={{ padding: '16px 16px 16px 24px', width: '100%' }}>
      <Stack justify="space-between" items="center">
        <Stack direction="column">
          <Typography text={value} size={32} weight="700" variant="primary" />
          <Typography text={name} size={14} weight="500" />
        </Stack>
        <Stack
          justify="center"
          items="center"
          sx={{
            backgroundColor: theme.color.light,
            borderRadius: theme.size.rounded.full,
            height: '72px',
            width: '72px',
            flexShrink: 0,
          }}
        >
          <SvgIcon
            icon={icon ? icon : 'box'}
            size={32}
            color={theme.color[color].main}
            sx={iconSx}
          />
        </Stack>
      </Stack>
    </Card>
  )
}
