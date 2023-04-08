import { useState, useEffect, useCallback } from 'react'

export const useMediaQuery = (width) => {
	const [targetReached, setTargetReached] = useState(false)

	const updateTarget = useCallback((e) => {
		if (e.matches) {
			setTargetReached(true)
		} else {
			setTargetReached(false)
		}
	}, [])

	useEffect(() => {
		const media = window.matchMedia(`(max-width: ${width}px)`)
		media.addListener(updateTarget)

		if (media.matches) {
			setTargetReached(true)
		}

		return () => media.removeListener(updateTarget)
	}, [])

	return targetReached
}
