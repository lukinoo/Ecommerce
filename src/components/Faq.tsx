import { ConfigFaq } from "../interfaces";

interface Props {
  faq: ConfigFaq[];
  faqActiveHandler: (idx: number) => void;
}

const Faq: React.FC<Props> = ({ faq, faqActiveHandler }) => {
  return (
    <div className="frequently-asked-questions-container">
      <h2>Frequently asked questions</h2>
      <div className="accordion-wrap-box">
        {faq.map((item: ConfigFaq) => {
          // accordion active class
          const isActive: string = item.active ? "accordion-answer-show" : "";
          return (
            <div key={item.id} className="accordion-item">
              <div
                className="accordion-link"
                onClick={() => faqActiveHandler(item.id)}
              >
                <h5>{item.question}</h5>
                <span>{item.active ? "-" : "+"}</span>
              </div>
              <div className={`answer ${isActive}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
