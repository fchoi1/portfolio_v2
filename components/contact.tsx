"use client";

import { sendEmail } from "@/actions/sendEmail";
import { motion } from "framer-motion";
import { FormEvent } from "react";
import Section from "./section";
import SubmitButton from "./submit-button";

export default function Contact() {
  async function onSubmit(formData: FormData) {
    const data = await sendEmail(formData);

    console.log("res", data);
  }

  return (
    <Section id="Contact" title="Contact me" wide>
      <motion.div
        className="w-[max(100%,38rem)] flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-700 -mt-6">
          Please contact me directly at{" "}
          <a className="underline" href="mailto:fchoi@outlook.com">
            fchoi@outlook.com
          </a>{" "}
          or through this form
        </p>
        <form action={onSubmit} className="mt-10 gap-3 w-full flex flex-col items-center">
          <input
            name="senderEmail"
            type="email"
            className="w-full borderBlack rounded-lg h-14 px-4"
            placeholder="Your email"
            required
            maxLength={5000}
          ></input>
          <textarea
            name="message"
            required
            className="p-4 w-full h-52 borderBlack rounded-lg"
            placeholder="Your message"
          />
          <SubmitButton />
        </form>
      </motion.div>
    </Section>
  );
}
