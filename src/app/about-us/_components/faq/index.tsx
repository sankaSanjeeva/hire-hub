import { SectionHeader } from '@/components';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQ() {
  return (
    <section>
      <SectionHeader
        main="Frequently Asked Questions"
        sub="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        className="text-center"
      />

      <Accordion type="single" collapsible className="mt-10">
        <AccordionItem value="item-1">
          <AccordionTrigger className="[&[data-state=open]>div>#number]:text-theme">
            <div className="inline-flex items-center gap-2">
              <div id="number" className="min-w-8 text-gray-500">
                01
              </div>
              <div>Can I upload a CV?</div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pl-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
            natus aperiam sapiente non! Harum, quidem quasi hic corrupti tenetur
            dignissimos, earum praesentium ducimus velit, saepe sapiente nulla
            ea ex iste!
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="[&[data-state=open]>div>#number]:text-theme">
            <div className="inline-flex items-center gap-2">
              <div id="number" className="min-w-8 text-gray-500">
                02
              </div>
              <div>How long will the recruitment process take?</div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pl-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            fugiat cupiditate officia error delectus facere, voluptas velit
            voluptatibus perferendis possimus eius neque eligendi recusandae
            tenetur ea libero repellendus quam maiores?
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="[&[data-state=open]>div>#number]:text-theme">
            <div className="inline-flex items-center gap-2">
              <div id="number" className="min-w-8 text-gray-500">
                03
              </div>
              <div>Do you recruit for Graduates, Apprentices and Students?</div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pl-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            fugiat cupiditate officia error delectus facere, voluptas velit
            voluptatibus perferendis possimus eius neque eligendi recusandae
            tenetur ea libero repellendus quam maiores?
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="[&[data-state=open]>div>#number]:text-theme">
            <div className="inline-flex items-center gap-2">
              <div id="number" className="min-w-8 text-gray-500">
                04
              </div>
              <div>
                What does the recruitment and selection process involve?
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pl-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            fugiat cupiditate officia error delectus facere, voluptas velit
            voluptatibus perferendis possimus eius neque eligendi recusandae
            tenetur ea libero repellendus quam maiores?
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="[&[data-state=open]>div>#number]:text-theme">
            <div className="inline-flex items-center gap-2">
              <div id="number" className="min-w-8 text-gray-500">
                05
              </div>
              <div>
                {' '}
                Can I receive notifications for any future jobs that may
                interest me?
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pl-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            fugiat cupiditate officia error delectus facere, voluptas velit
            voluptatibus perferendis possimus eius neque eligendi recusandae
            tenetur ea libero repellendus quam maiores?
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
