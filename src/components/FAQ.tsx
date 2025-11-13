import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

export function FAQ() {
  const faqs = [
    {
      question: 'How fast can I get my first project?',
      answer: 'Usually within 24-72 hours after completing your profile & KYC verification. Our smart matching algorithm starts showing you relevant projects as soon as your profile is complete.'
    },
    {
      question: 'When do I get paid?',
      answer: 'Weekly by default. Payments are processed every week automatically. Pro and Enterprise users also have access to instant payout options for completed milestones.'
    },
    {
      question: 'How does escrow work?',
      answer: 'Client funds are held securely in escrow when they accept your proposal. Funds are released to you once the client approves each milestone. This protects both parties and ensures fair payment.'
    },
    {
      question: 'What are the fees?',
      answer: 'Free plan: 0% to join with limited features. Pro plan: 5% platform fee per project. Enterprise: Custom pricing. All fees are shown transparently on each job offer before you accept.'
    },
    {
      question: 'Can I decline jobs?',
      answer: 'Yes, absolutely! You have complete control over which projects you accept. You only work on jobs you want and that match your skills and availability.'
    },
    {
      question: 'How do I renew my license?',
      answer: 'Go to Profile → License → Renew. You will receive automatic reminders 30 days before expiry. You can upload new documents directly through the platform.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-white to-[#f8fafc]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about Orvion
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white border border-gray-100 rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left text-gray-900 hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <a 
            href="mailto:support@orvion.io" 
            className="text-[#06b6d4] hover:text-[#0ea5a4] transition-colors"
          >
            Contact our support team →
          </a>
        </div>
      </div>
    </section>
  );
}
