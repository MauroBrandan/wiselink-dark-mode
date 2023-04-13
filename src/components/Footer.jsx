import Image from 'next/image'
import instagramIcon from '../../public/icons/instagram-icon.svg'
import linkedinIcon from '../../public/icons/linkedin-icon.svg'
import mailIcon from '../../public/icons/mail-icon.svg'

const Footer = () => {
	return (
		<>
			<footer>
				<div>© Wiselink 2023</div>
				<div className='social-media'>
					<a href='#' target='_blank' rel='noopener noreferrer'>
						<Image src={instagramIcon} alt='instagram icon' />
					</a>
					<a href='#' target='_blank' rel='noopener noreferrer'>
						<Image src={linkedinIcon} alt='linkedin icon' />
					</a>
					<a href='#' target='_blank' rel='noopener noreferrer'>
						<Image src={mailIcon} alt='mail icon' />
					</a>
				</div>
			</footer>

			<style jsx>{`
				footer {
					display: flex;
					justify-content: space-around;
					align-items: center;
					height: 125px;
					margin-top: 64px;
					font-weight: bold;
				}

				.social-media {
					display: flex;
					gap: 24px;
				}
			`}</style>
		</>
	)
}

export default Footer
