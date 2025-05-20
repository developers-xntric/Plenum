"use client"
import { useState } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"

function Faqs() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs = [
    {
      question: "What is Plenum, and how can it help my business?",
      answer:
        "Plenum Tech is a technology solutions provider specializing in ERP, CRM, and business automation. It can help your business streamline operations, improve efficiency, and drive growth through tailored software solutions.",
    },
    {
      question: "What are the key benefits of using Microsoft Dynamics 365?",
      answer:
        "Microsoft Dynamics 365 offers improved business processes, enhanced customer relationship management, real-time data insights, scalability, and seamless integration with other Microsoft tools, boosting productivity and decision-making.",
    },
    {
      question: "Does Plenum offer customization and support services?",
      answer:
        "Yes, Plenum provides customization to meet specific business needs and offers ongoing support services to ensure smooth implementation and operation.",
    },
    {
      question: "How long does implementation typically take?",
      answer:
        "Implementation time varies depending on the business size and complexity, but it typically ranges from a few weeks to several months, with Plenum tailoring the timeline to your needs.",
    },
    {
      question: "What industries does Plenum specialize in?",
      answer:
        "Plenum specializes in industries such as education (e.g., GEMS Education), finance (e.g., RAKBANK), retail (e.g., Spinnneys), and oil and gas (e.g., Shell), among others, leveraging its expertise for diverse sectors.",
    },
    {
      question: "How can I get a demo or consultation?",
      answer:
        "To get a demo or consultation, please contact Plenum Tech directly through their website or customer support channels to schedule an appointment tailored to your business requirements.",
    },
  ]

  return (
    <div className="flex justify-center items-center w-full px-4 py-8 md:py-12 lg:p-[40px]">
      <div className="w-[90%] max-w-[1440px] mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-start mb-4 md:mb-6 lg:mb-8 font-['Archivo']  text-black  uppercase leading-10">
          FAQS
        </h1>
        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-t border-black">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left py-3 md:py-4 flex justify-between items-start focus:outline-none"
              >
                <h2 className="text-base md:text-lg lg:text-xl font-semibold font-['Archivo'] pr-4">{faq.question}</h2>
                <span className="text-lg md:text-xl flex-shrink-0 mt-1">
                  {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>
              {openIndex === index && (
                <div className="pb-3 md:pb-4 text-md md:text-base font-['Archivo'] text-black font-light leading-loose">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faqs
