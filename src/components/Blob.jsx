const Blob = ({ right }) => {
	const rightValue = right ? 0 : '55%'

	return (
		<>
			<div className='blob'></div>

			<style jsx>{`
				.blob {
					width: 500px;
					height: 500px;
					position: absolute;
					right: ${rightValue};
					background: linear-gradient(45deg, #ff4ecd -20%, #0072f5 100%);
					border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
					filter: blur(55px);
					opacity: 0.3;
				}
			`}</style>
		</>
	)
}

export default Blob
