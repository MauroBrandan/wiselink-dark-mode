import Section from '@/components/Section'
import SalesImage from '../../public/images/sales.webp'

export default function Sales() {
	return (
		<Section
			image={SalesImage}
			imageAlt={'sales'}
			title={'Aumentá las probabilidades de concretar un negocio'}
			content={
				'Realizá un correcto seguimiento de tus relaciones comerciales, mantenete en contacto con tus clientes en todo momento y no pierdas la oportunidad de cerrar una venta.'
			}
			callToAction1={'Comenzar'}
		/>
	)
}
