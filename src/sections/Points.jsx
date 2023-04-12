import SectionWithList from '@/components/SectionWithList'
import PointsImage from '../../public/images/points.webp'

const points = [
	'Generá leads en 1 minuto',
	'Sacale el máximo provecho a la exposición',
	'Eliminá los costos en folletería',
	'Agregale valor a tus clientes',
	'Optimizá el rendimiento de tu stand',
	'Medí el retorno de inversión en cada exposición que participes',
]

export default function Points() {
	return (
		<SectionWithList
			title='Un CRM pensado para exposiciones'
			list={points}
			image={PointsImage}
			imageAlt='points'
		/>
	)
}
