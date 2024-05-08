import { AppBar, Link } from '@mui/material'

export default function NavBar() {
  return (
    <AppBar position="static" sx={{ padding: '.25rem' }}>
      <Link href="/" variant="h3" sx={{ color: '#fff' }} underline="none">
        Task App
      </Link>
    </AppBar>
  )
}
