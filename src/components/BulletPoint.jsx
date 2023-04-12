import { Text } from '@nextui-org/react'
import Image from 'next/image'
import checkIcon from '../../public/icons/check-icon.svg'

const BulletPoint = ({ text }) => {
	return (
		<>
			<div className='bullet-point'>
				<Image src={checkIcon} alt='check icon' width={25} height={25} />
				<Text size='inherit'>{text}</Text>
			</div>
			<style jsx>{`
				.bullet-point {
					display: flex;
					align-items: center;
					gap: 12px;
					margin: 12px 0;
				}
			`}</style>
		</>
	)
}

export default BulletPoint
