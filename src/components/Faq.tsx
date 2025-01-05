import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-4 ">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-white">{question}</h3>
        <button className="text-white text-xl">
          {isOpen ? "-" : "+"}
        </button>
      </div>
      {isOpen && (
        <p className="mt-2 text-white/80">
          {answer}
        </p>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs: FAQItemProps[] = [
    {
      question: "What is Next.js?",
      answer:
        "Next.js is a React-based framework for building server-rendered or statically exported web applications.",
    },
    {
      question: "What is Tailwind CSS?",
      answer:
        "Tailwind CSS is a utility-first CSS framework that allows you to style your HTML elements quickly and efficiently.",
    },
    {
      question: "How do I integrate Tailwind with Next.js?",
      answer:
        "You can install Tailwind CSS in a Next.js project by running 'npm install tailwindcss postcss autoprefixer' and configuring it in your project.",
    },
  ];

  return (
    <div className="pb-32 px-5 lg:px-32 2xl:px-96">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">FAQs</h1>
      {faqs.map((faq, index) => (
        <FAQItem key={index} {...faq} />
      ))}
    </div>
  );
};

export default FAQ;