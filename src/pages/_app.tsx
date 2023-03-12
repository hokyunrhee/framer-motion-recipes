import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"

if (process.env.NODE_ENV === "development") {
  if (typeof window !== "undefined") {
    const { worker } = require("../mocks/browser")
    worker.start()
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
