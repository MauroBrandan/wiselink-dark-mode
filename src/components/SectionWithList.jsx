import Image from 'next/image'
import { Container, Row, Text, Col, Spacer } from '@nextui-org/react'
import { useMediaQuery } from '@/utils/useMediaQuery'
import BulletPoint from './BulletPoint'

const SectionWithList = ({ title, list, image, imageAlt }) => {
	const isMd = useMediaQuery(960)
	const isS = useMediaQuery(650)
	return (
		<Container
			gap={0}
			lg
			css={isS ? { mt: '64px' } : { mt: '$52', mb: '$52' }}
			as='section'
		>
			<Row gap={2} wrap={isMd ? 'wrap' : 'nowrap'}>
				<Col gap={2}>
					<Row>
						<Text
							h2
							size={isS ? '$2xl' : '$6xl'}
							css={{
								textGradient: '45deg, $blue600 -20%, $pink600 50%',
							}}
							weight='bold'
						>
							{title}
						</Text>
					</Row>
					<Spacer y={1} />
					<Row>
						<Text as={'ul'} size={isS ? '$xl' : '$2xl'} css={{ m: 0 }}>
							{list.map((point) => (
								<BulletPoint key={point} text={point} />
							))}
						</Text>
					</Row>
					<Spacer y={1} />
				</Col>
				<Spacer y={1} />
				<Col css={isS ? { display: 'none' } : ''}>
					<Image src={image} alt={imageAlt} style={{ objectFit: 'contain' }} />
				</Col>
			</Row>
		</Container>
	)
}

export default SectionWithList
