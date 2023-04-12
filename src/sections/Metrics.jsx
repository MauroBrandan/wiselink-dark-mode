import SectionWithList from '@/components/SectionWithList'
import ChartsImage from '../../public/images/charts.webp'

const points = [
	'Optimizá el rendimiento de tu personal',
	'Conocé a tus clientes',
	'Identificá posibilidades de mejora',
	'Tomá decisiones rápidas y eficientes',
]

export default function Metrics() {
	return (
		<SectionWithList
			title='Consultá métricas de rendimiento en tiempo real'
			list={points}
			image={ChartsImage}
			imageAlt='charts'
		/>
	)
}
