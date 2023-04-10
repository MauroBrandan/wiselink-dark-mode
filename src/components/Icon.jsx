import Image from 'next/image'
import { Card } from '@nextui-org/react'

const Icon = ({ src, alt }) => {
	return (
		<Card
			variant='bordered'
			css={{
				display: 'flex',
				width: '80px',
				height: '80px',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Card.Body css={{ overflow: 'hidden' }}>
				<Image src={src} alt={alt} width={50} height={50} />
			</Card.Body>
		</Card>
	)
}

export default Icon
