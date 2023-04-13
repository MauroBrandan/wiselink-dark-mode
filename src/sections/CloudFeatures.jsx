import { Grid, Text } from '@nextui-org/react'
import { useMediaQuery } from '@/utils/useMediaQuery'
import FeatureCard from '@/components/FeatureCard'
import Blob from '@/components/Blob'
import teamIcon from '../../public/icons/team-icon.svg'
import lightIcon from '../../public/icons/light-icon.svg'
import leadIcon from '../../public/icons/lead-icon.svg'
import thumbIcon from '../../public/icons/thumb-icon.svg'
import broadcastIcon from '../../public/icons/broadcast-icon.svg'
import cloudIcon from '../../public/icons/cloud-icon.svg'
import valueIcon from '../../public/icons/value-icon.svg'
import bellIcon from '../../public/icons/bell-icon.svg'

const features = [
	{
		icon: teamIcon,
		alt: 'team icon',
		label: 'Optimizá el trabajo de tu equipo.',
	},
	{
		icon: lightIcon,
		alt: 'light icon',
		label: 'Mejorá la toma de decisiones.',
	},
	{
		icon: leadIcon,
		alt: 'lead icon',
		label: 'Generá leads en un minuto.',
	},
	{
		icon: thumbIcon,
		alt: 'thumb icon',
		label: 'Reducí costos de IT.',
	},
	{
		icon: broadcastIcon,
		alt: 'broadcast icon',
		label: 'Accedé desde cualquier parte.',
	},
	{
		icon: cloudIcon,
		alt: 'cloud icon',
		label: 'Tu catálogo digital en la nube.',
	},
	{
		icon: valueIcon,
		alt: 'value icon',
		label: 'Aportá valor a tus clientes.',
	},
	{
		icon: bellIcon,
		alt: 'bell icon',
		label: 'Mantenete al tanto de todo.',
	},
]

export default function CloudFeatures() {
	const isS = useMediaQuery(650)

	return (
		<>
			<Blob />

			<section style={{ marginTop: '64px' }}>
				<Text h2 size={isS ? '$2xl' : '$5xl'} css={{ textAlign: 'center' }}>
					El poder de un CRM en la nube
				</Text>
				<Grid.Container css={{ marginTop: '32px' }}>
					{features.map(({ icon, alt, label }, index) => (
						<Grid sm={3} xs={6} justify='center' key={index}>
							<FeatureCard src={icon} alt={alt} label={label} />
						</Grid>
					))}
				</Grid.Container>
			</section>
		</>
	)
}
