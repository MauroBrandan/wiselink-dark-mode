import Image from 'next/image'
import { Card } from '@nextui-org/react'

const Icon = ({ src, alt, border }) => {
	return (
		<Card
			variant={border ? 'bordered' : 'flat'}
			css={{
				display: 'flex',
				width: '80px',
				height: '80px',
				justifyContent: 'center',
				alignItems: 'center',
				bg: 'transparent',
			}}
		>
			<Card.Body css={{ overflow: 'hidden' }}>
				<Image src={src} alt={alt} width={50} height={50} />
			</Card.Body>
		</Card>
	)
}

export default Icon
