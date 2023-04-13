import Section from '@/components/Section'
import WorkImage from '../../public/images/work.webp'

export default function Contact() {
	return (
		<Section
			image={WorkImage}
			imageAlt={'work'}
			title={'Integración rápida y sencilla'}
			content={
				'Recibí atención personalizada y capacitaciones en vivo. Te brindamos todas las herramientas para que puedas llevar tu empresa al siguiente nivel.'
			}
			callToAction1={'📅 Agendar una reunión'}
			callToAction2={'Registrarme'}
			blob
			blobRight
		/>
	)
}
