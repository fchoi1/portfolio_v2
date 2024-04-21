"use client";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import Section from "./section";

export default function Contact() {
  return (
    <Section id="Contact" title="Contact me" wide>
      <motion.div
        className="w-[max(100%,38rem)] flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-700 -mt-6">
          Please contact me directly at{" "}
          <a className="underline" href="mailto:fchoi@outlook.com">
            fchoi@outlook.com
          </a>{" "}
          or through this form
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="mt-10 gap-3 w-full flex flex-col items-center"
        >
          <input
            type="email"
            className="w-full borderBlack rounded-lg h-14 px-4"
            placeholder="Your email"
            required
            maxLength={500}
          ></input>
          <textarea
            required
            className="p-4 w-full h-52 borderBlack rounded-lg"
            placeholder="Your message"
          />
          <button
            type="submit"
            className="group bg-gray-900 h-12 text-white rounded-full outline-none transition-all flex items-center justify-center gap-2 w-32 pseudoEffects hover:bg-gray-950"
          >
            Submit{" "}
            <FaPaperPlane className="opacity-70 text-xs group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </form>
      </motion.div>
    </Section>
  );
}
