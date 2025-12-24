import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);

  const frequentQuestions = [
        {
            id: 1,
            question: "What is Otaku Den?",
            answer:
            "Otaku Den is an anime discovery platform where you can explore top-ranking, airing anime and manage your personal watchlist."
        },
        {
            id: 2,
            question: "How do I add anime to my watchlist?",
            answer:
            "Simply click on the 'Add to Watchlist' button on any anime card. It will be saved locally in your browser."
        },
        {
            id: 3,
            question: "Is my watchlist saved permanently?",
            answer:
            "Your watchlist is stored in localStorage, so it will persist unless you clear your browser data."
        },
        {
            id: 4,
            question: "Where does the anime data come from?",
            answer:
            "All anime data is fetched from the Jikan API, which is an unofficial MyAnimeList API."
        }
    ];


  const toggle = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-[7rem]">
      {/* Box */}
      <div className=" border-4 border-black relative bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        
        <h2 className="text-3xl font-clickUper uppercase mb-8 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {frequentQuestions.map((item) => (
            <div
              key={item.id}
              className="border-2 border-black"
            >
              {/* Accordion Button */}
              <button
                onClick={() => toggle(item.id)}
                className="w-full flex justify-between items-center p-4 font-bold uppercase text-left"
              >
                <span className="uppercase">{item.question}</span>
                <span className="text-xl">
                  {activeId === item.id ? "−" : "+"}
                </span>
              </button>

              {/* Animated Answer */}
              <AnimatePresence initial={false}>
                {activeId === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 pt-0 leading-relaxed uppercase">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
