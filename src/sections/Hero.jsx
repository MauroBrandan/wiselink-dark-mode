import Section from '@/components/Section'
import HeroImage from '../../public/images/heroimg.webp'

export default function Hero() {
	return (
		<Section
			image={HeroImage}
			imageAlt={'Wiselink en todas las plataformas'}
			title={'Generá leads de calidad'}
			content={
				'Wiselink es un CRM de comunicación bidireccional diseñado para mejorar las relaciones comerciales y revolucionar la experiencia de todas las partes que participan en una exposición.'
			}
			callToAction1={'Registrarme'}
			callToAction2={'Iniciar sesión'}
		/>
	)
}
