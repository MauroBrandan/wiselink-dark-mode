import { Card, Text } from '@nextui-org/react'
import Icon from './Icon'

const FeatureCard = ({ src, alt, label }) => {
	return (
		<Card
			css={{ m: '$5', p: '$6', mw: '235px', bg: 'transparent' }}
			variant='bordered'
		>
			<Card.Header css={{ justifyContent: 'center' }}>
				<Icon src={src} alt={alt} size={50} />
			</Card.Header>
			<Card.Body css={{ py: '$2', textAlign: 'center' }}>
				<Text>{label}</Text>
			</Card.Body>
		</Card>
	)
}

export default FeatureCard
