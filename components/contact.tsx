"use client";

import { sendEmail } from "@/actions/sendEmail";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import Section from "./section";
import SubmitButton from "./submit-button";

export default function Contact() {
  async function onSubmit(formData: FormData) {
    const { error } = await sendEmail(formData);
    if (error) {
      console.log("some err", error);
      toast.error(error);
      return;
    }
    toast.success("Email sent successfully");
  }

  return (
    <Section id="Contact" title="Contact me" wide>
      <motion.div
        className="flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-700 -mt-6 text-sm sm:text-base  dark:text-white/60">
          Please contact me directly at{" "}
          <a className="underline" href="mailto:fchoi@outlook.com">
            fchoi@outlook.com
          </a>{" "}
          or through this form
        </p>
        <form
          action={onSubmit}
          className="mt-10 gap-3 w-full flex flex-col items-start sm:items-center dark:text-black"
        >
          <input
            name="senderEmail"
            type="email"
            className="text-sm w-full borderBlack rounded-lg h-10 px-4 sm:h-14 sm:text-base
            dark:bg-white/80 dark:focus:bg-white dark:outline-none transition-all"
            placeholder="Your email"
            required
            maxLength={5000}
          ></input>
          <textarea
            name="message"
            required
            className="text-sm px-4 py-2 w-full h-52 borderBlack rounded-lg  sm:p-4 sm:text-base
            dark:bg-white/80 dark:focus:bg-white dark:outline-none transition-all"
            placeholder="Your message"
          />
          <SubmitButton />
        </form>
      </motion.div>
    </Section>
  );
}
