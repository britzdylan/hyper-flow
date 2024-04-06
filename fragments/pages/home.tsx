import {
  AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Button,
  Alert,
  AlertDescription,
  AlertTitle,
} from '#components'

export default function Home() {
  return (
    <div class="relative  ">
      <div class="flex flex-col items-center py-24 z-10 relative">
        <h2 class="text-lg font-semibold leading-8  ">AlpineJs Example</h2>
        <div class="py-4 inline-flex gap-2 items-center mx-auto" x-data="{ count: 0 }">
          <Button x-on:click="count++">Increment</Button>
          <p>
            Count: <span x-text="count"></span>
          </p>
        </div>
        <div>
          <h1>Accordion Single</h1>
          <AccordionRoot activeAccordion="accordion-2" class="w-[300px]" type="single">
            <AccordionItem>
              <AccordionTrigger>
                <h3 class="accordion-title">Accordion Item 1</h3>
              </AccordionTrigger>

              <AccordionContent>
                <p class="pb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et nulla nec metus
                  sollicitudin tempor. Nullam at eros nec metus sollicitudin tempor. Nullam at eros
                  nec metus sollicitudin tempor.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem>
              <AccordionTrigger>
                <h3 class="accordion-title">Accordion Item 2</h3>
              </AccordionTrigger>

              <AccordionContent>
                <p class="pb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et nulla nec metus
                  sollicitudin tempor. Nullam at eros nec metus sollicitudin tempor. Nullam at eros
                  nec metus sollicitudin tempor.
                </p>
              </AccordionContent>
            </AccordionItem>
          </AccordionRoot>
        </div>
        <div>
          <Alert variant="destructive">
            <svg class="h-4 w-4">
              <use xlink:href="tabler-sprite.svg#tabler-alert-circle" />
            </svg>
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components and dependencies to your app using the cli.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  )
}
