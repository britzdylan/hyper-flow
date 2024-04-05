import {
  AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Button,
  Switch,
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
          <h1>Accordion Multiple</h1>
          <AccordionRoot class="w-[300px]" type="multiple">
            <AccordionItem self active>
              <AccordionTrigger self>
                <h3 class="accordion-title">Accordion Item 3</h3>
              </AccordionTrigger>

              <AccordionContent self>
                <p class="pb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et nulla nec metus
                  sollicitudin tempor. Nullam at eros nec metus sollicitudin tempor. Nullam at eros
                  nec metus sollicitudin tempor.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem self>
              <AccordionTrigger self>
                <h3 class="accordion-title">Accordion Item 4</h3>
              </AccordionTrigger>

              <AccordionContent self>
                <p class="pb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et nulla nec metus
                  sollicitudin tempor. Nullam at eros nec metus sollicitudin tempor. Nullam at eros
                  nec metus sollicitudin tempor.
                </p>
              </AccordionContent>
            </AccordionItem>
          </AccordionRoot>
        </div>
      </div>
    </div>
  )
}
