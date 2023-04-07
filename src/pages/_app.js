import { NextUIProvider, createTheme } from '@nextui-org/react'

const darkTheme = createTheme({
	type: 'dark',
})

export default function App({ Component, pageProps }) {
	return (
		<NextUIProvider theme={darkTheme}>
			<Component {...pageProps} />
		</NextUIProvider>
	)
}
