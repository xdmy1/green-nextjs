import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const Faq = () => {
  return (
    <div className='pb-32 px-5 lg:px-32 2xl:px-96 flex flex-col gap-10'>
      <div>
        <h1 className='text-center font-bold text-4xl'>FAQs</h1>
      </div>
      <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
      <AccordionItem value="item-2">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
      <AccordionItem value="item-3">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
      </Accordion>

    </div>
  )
}

export default Faq
