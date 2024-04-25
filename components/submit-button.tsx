"use client";

import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className=" text-sm group bg-gray-900 h-10 text-white rounded-full outline-none transition-all flex items-center justify-center gap-2 w-28
            pseudoEffects hover:bg-gray-950 disabled:scale-100 disabled:opacity-65 sm:h-12 sm:w-32 sm:text-base
            dark:bg-white/10 dark:hover:border-white/60 dark:border"
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white" />
      ) : (
        <>
          Submit
          <FaPaperPlane className="opacity-70 text-xs group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
}
