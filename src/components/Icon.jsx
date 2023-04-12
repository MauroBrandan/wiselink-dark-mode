import Image from 'next/image'
import { Card } from '@nextui-org/react'

const Icon = ({ src, alt, border, size }) => {
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
				<Image src={src} alt={alt} width={size ?? 'auto'} height={size ?? 'auto'} />
			</Card.Body>
		</Card>
	)
}

export default Icon
