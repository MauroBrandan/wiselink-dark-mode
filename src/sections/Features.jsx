import { Grid, Text } from '@nextui-org/react'
import { useMediaQuery } from '@/utils/useMediaQuery'
import FeatureCard from '@/components/FeatureCard'
import clientIcon from '../../public/icons/client-icon.svg'
import exchangeIcon from '../../public/icons/exchange-icon.svg'
import noteIcon from '../../public/icons/note-icon.svg'
import prospectIcon from '../../public/icons/prospect-icon.svg'

const features = [
	{
		icon: clientIcon,
		alt: 'client icon',
		label: 'Todos tus clientes y proveedores en una sola agenda de contactos.',
	},
	{
		icon: exchangeIcon,
		alt: 'exchange icon',
		label:
			'Intercambiá información de productos y servicios con tus socios comerciales.',
	},
	{
		icon: noteIcon,
		alt: 'note icon',
		label: 'Creá notas compartidas o privadas para estar en cada detalle.',
	},
	{
		icon: prospectIcon,
		alt: 'prospect icon',
		label: 'Desarrollá prospectos de tus clientes para entenderlos mejor.',
	},
]

export default function Features() {
	const isS = useMediaQuery(650)

	return (
		<section style={{ marginTop: '64px' }}>
			<Text h2 size={isS ? '$2xl' : '$5xl'} css={{ textAlign: 'center' }}>
				La solución integral para tu empresa
			</Text>
			<Text size={isS ? '$xl' : '$2xl'} css={{ textAlign: 'center' }}>
				Wiselink es un CRM de comunicación bidireccional que permite que ambas partes
				aporten al proceso. Llevá tus negocios al siguiente nivel.
			</Text>
			<Grid.Container justify='center' css={{ marginTop: '32px' }}>
				{features.map(({ icon, alt, label }, index) => (
					<FeatureCard key={index} src={icon} alt={alt} label={label} />
				))}
			</Grid.Container>
		</section>
	)
}
