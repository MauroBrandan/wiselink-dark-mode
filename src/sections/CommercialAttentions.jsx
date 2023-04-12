import Section from '@/components/Section'
import LeadsImage from '../../public/images/leads.webp'

export default function CommercialAttentions() {
	return (
		<section className='commercial-attentions'>
			<Section
				className='CommercialAttentions'
				image={LeadsImage}
				imageAlt={'Leads'}
				title={'Atenciones comerciales rápidas y eficientes'}
				content={
					'Atendé las necesidades de cada cliente mediante Atenciones Comerciales respaldadas por nuestro poderoso CRM que te permitirá compartir cualquier producto o servicio del catálogo de tu empresa en tiempo real.'
				}
				callToAction1={'Registrarme'}
			/>
		</section>
	)
}
