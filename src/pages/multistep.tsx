import { Box } from "@chakra-ui/react"

import { MultiStepForm } from "@/components/begin/multi-step-form"

const Multistep = () => {
  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      pt="40px"
      bgGradient="linear(to-br, rgb(51 65 85), rgb(15 23 42))"
    >
      <MultiStepForm initialStep={1} steps={4} />
    </Box>
  )
}

export default Multistep
