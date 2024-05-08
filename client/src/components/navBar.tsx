import { AppBar, Link } from '@mui/material'

export default function NavBar() {
  return (
    <AppBar position="static" sx={{ padding: '.25rem .5rem' }}>
      <Link
        href="/"
        variant="h3"
        sx={{ color: '#fff' }}
        underline="none"
        width={'max-content'}
      >
        Task App
      </Link>
    </AppBar>
  )
}
