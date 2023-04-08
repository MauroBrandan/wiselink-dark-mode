import Image from 'next/image'
import { Container, Row, Text, Col, Spacer, Button, Link } from '@nextui-org/react'
import { useMediaQuery } from '@/utils/useMediaQuery'

const Section = ({ image, imageAlt, title, content, callToAction1, callToAction2 }) => {
	const isMd = useMediaQuery(960)
	const isS = useMediaQuery(650)

	return (
		<Container gap={0} lg css={isS ? '' : { marginTop: '64px' }}>
			<Row gap={2} wrap={isMd ? 'wrap' : 'nowrap'}>
				<Col>
					<Image src={image} alt={imageAlt} style={{ objectFit: 'contain' }} />
				</Col>
				<Spacer y={1} />
				<Col gap={2}>
					<Row>
						<Text h2 size={isS ? '$2xl' : '$5xl'} css={{ m: 0 }}>
							{title}
						</Text>
					</Row>
					<Spacer y={1} />
					<Row>
						<Text size={isS ? '$xl' : '$2xl'} css={{ m: 0 }}>
							{content}
						</Text>
					</Row>
					<Spacer y={1} />
					<Row>
						<Button auto as={Link} href='#'>
							{callToAction1}
						</Button>
						<Button auto light as={Link} href='#'>
							{callToAction2}
						</Button>
					</Row>
				</Col>
			</Row>
		</Container>
	)
}

export default Section
