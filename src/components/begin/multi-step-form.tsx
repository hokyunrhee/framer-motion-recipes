import { useState } from "react"
import { Box, BoxProps, Icon, IconProps, Skeleton, VStack, chakra } from "@chakra-ui/react"

interface MultiStepFormProps {
  steps: number
  initialStep: number
}

export const MultiStepForm = ({ initialStep, steps }: MultiStepFormProps) => {
  const [activeStep, setActiveStep] = useState(initialStep)
  const finished = activeStep > steps - 1

  const handleBack = () => setActiveStep(activeStep < 1 ? 0 : activeStep - 1)
  const handleCountinue = () => setActiveStep(activeStep > steps - 1 ? steps - 1 : activeStep + 1)

  return (
    <Box width="100%" maxWidth="480px" backgroundColor="white" borderRadius="12px">
      <Box display="flex" justifyContent="space-between" padding="32px">
        {Array.from({ length: steps }, (_, step) => {
          const title = (step + 1).toString()
          const status =
            activeStep === step //
              ? "active"
              : activeStep > step
              ? "completed"
              : "inactive"

          return <Step key={step} status={status} title={title} />
        })}
      </Box>

      <Box paddingX="32px">
        <Skeleton height="28px" width="45%" marginTop="8px" marginBottom="16px" />
        <VStack spacing="8px" alignItems="flex-start">
          <Skeleton height="16px" width="100%" />
          <Skeleton height="16px" width="100%" />
          <Skeleton height="16px" width="66%" />
        </VStack>
      </Box>

      <Box marginTop="40px" paddingX="32px" paddingBottom="32px" display="flex" justifyContent="space-between">
        <chakra.button
          display="flex"
          justifyContent="center"
          alignItems="center"
          paddingX="8px"
          color="rgb(148 163 184)"
          _hover={{ color: "rgb(51 65 85)" }}
          onClick={handleBack}
        >
          Back
        </chakra.button>
        <chakra.button
          display="flex"
          justifyContent="center"
          alignItems="center"
          color="white"
          fontWeight="medium"
          paddingX="16px"
          paddingY="6px"
          backgroundColor="rgb(59 130 246)"
          borderRadius="999px"
          _hover={{ backgroundColor: "rgb(37 99 235)" }}
          _active={{ backgroundColor: "rgb(29 78 216)" }}
          disabled={finished}
          opacity={finished ? 0.5 : 1}
          pointerEvents={finished ? "none" : "auto"}
          onClick={handleCountinue}
        >
          Continue
        </chakra.button>
      </Box>
    </Box>
  )
}

interface StepProps {
  status: "active" | "inactive" | "completed"
  title: string
}

const Step = ({ status, title }: StepProps) => {
  const styleMap = {
    active: {
      borderColor: "rgb(59 130 246)",
      backgroundColor: "white",
      color: "rgb(59 130 246)",
    },
    inactive: {
      borderColor: "rgb(226 232 240)",
      backgroundColor: "white",
      color: "rgb(148 163 184)",
    },
    completed: {
      borderColor: "rgb(59 130 246)",
      color: "rgb(59 130 246)",
    },
  } satisfies Record<StepProps["status"], BoxProps>
  const style = styleMap[status]

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="50%"
      boxSize="40px"
      border="2px"
      fontWeight="semibold"
      {...style}
    >
      <Box display="flex" justifyContent="center" alignItems="center">
        {status === "completed" ? <CheckIcon /> : <Box>{title}</Box>}
      </Box>
    </Box>
  )
}

const CheckIcon = (props: IconProps) => {
  return (
    <Icon fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </Icon>
  )
}
