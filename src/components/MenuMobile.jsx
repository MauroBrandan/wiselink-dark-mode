import { Navbar, Button, Link } from '@nextui-org/react'

const MenuMobile = () => {
	return (
		<>
			<Navbar.Toggle aria-label='toggle navigation' showIn={'sm'} />

			<Navbar.Collapse showIn={'sm'}>
				<div className='menu-collapse-container'>
					<div>
						<Navbar.CollapseItem>
							<Link color='inherit'>Acerca</Link>
						</Navbar.CollapseItem>
						<Navbar.CollapseItem>
							<Link color='inherit'>Ayuda</Link>
						</Navbar.CollapseItem>
						<Navbar.CollapseItem>
							<Link color='inherit'>Contacto</Link>
						</Navbar.CollapseItem>
					</div>

					<div>
						<Navbar.CollapseItem css={{ width: '100%' }}>
							<Button
								as={Link}
								href='#'
								css={{ minWidth: '100%' }}
								color={'gradient'}
								shadow
								bordered
							>
								Registrarme
							</Button>
						</Navbar.CollapseItem>
						<Navbar.CollapseItem>
							<Link color='inherit'>Iniciar sesión</Link>
						</Navbar.CollapseItem>
					</div>
				</div>
			</Navbar.Collapse>

			<style jsx>{`
				.menu-collapse-container {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: space-evenly;
					height: calc(100vh - 88px);
				}

				.menu-collapse-container div {
					width: 315px;
					display: flex;
					flex-direction: column;
					align-items: center;
				}
			`}</style>
		</>
	)
}

export default MenuMobile
