import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: 'What is vibe coding?',
      answer: 'Vibe coding uses AI to turn ideas into working applications through natural language. You describe what you want to build, and the system generates real, functional code.',
    },
    {
      question: 'How is this different from other tools?',
      answer: 'We design the system first — pages, APIs, and architecture — before generating code. This means you get a well-structured application, not just random code snippets.',
    },
    {
      question: 'Do I need to know coding?',
      answer: 'No, but developers benefit the most because the output is real, maintainable code. Non-developers can build and ship, while developers can easily extend and modify.',
    },
    {
      question: 'Can I export my project?',
      answer: 'Yes. Export full source code anytime. You own your code and can deploy it anywhere you want.',
    },
    {
      question: 'Is this production ready?',
      answer: 'Yes. The goal is code you can actually deploy and scale. We generate production-grade patterns, not demo-only snippets.',
    },
  ];

  return (
    <section className="relative py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            All your questions. Answered.
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bento-card border border-border px-6 rounded-xl data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-foreground hover:text-foreground hover:no-underline py-5 text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
