import { Navbar, Button, Link } from '@nextui-org/react'
import { font } from '@/utils/font'
import Logo from '../Logo'
import MenuMobile from './MenuMobile'

const Header = () => {
	return (
		<Navbar isCompact isBordered variant={'sticky'} className={font.className}>
			<Navbar.Brand>
				<Logo />
			</Navbar.Brand>

			<Navbar.Content hideIn='sm'>
				<Navbar.Link href='#'>Acerca</Navbar.Link>
				<Navbar.Link href='#'>Ayuda</Navbar.Link>
				<Navbar.Link href='#'>Contacto</Navbar.Link>
			</Navbar.Content>

			<Navbar.Content hideIn='sm'>
				<Navbar.Item>
					<Button auto as={Link} href='#'>
						Registrarme
					</Button>
				</Navbar.Item>
				<Navbar.Link color='inherit' href='#'>
					Iniciar sesión
				</Navbar.Link>
			</Navbar.Content>

			<MenuMobile />
		</Navbar>
	)
}

export default Header
