import Head from 'next/head'
import Header from '@/components/Header/Header'
import Section from '@/components/Section'
import { font } from '@/utils/font'
import HeroImage from '../../public/images/heroimg.webp'

export default function Home() {
	return (
		<>
			<Head>
				<title>Wiselink - Dark mode</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />
			<main className={font.className}>
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
			</main>
		</>
	)
}
