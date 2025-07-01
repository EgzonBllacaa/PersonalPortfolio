import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Reveal from "../Reveal";

const Form = ({ inputRef, contactRef }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const formRef = useRef(null);

  const isValidEmail = (email) => {
    const emailvalidate = /^[^s@]+@[^s@]+.[^s@]+$/;
    return emailvalidate.test(email);
  };

  const validateForm = () => {
    // Validating name
    // if (name.length === 0) {
    //   setError("Error must be filled in");
    //   return false;
    // } else if (name.trim() === "") {
    //   setError("Error don't leave empty spaces");
    //   return false;
    // }
    // Validating email
    if (email.trim() === "") {
      setError("Error don't leave empty spaces");
      return false;
    } else if (!email.includes("@")) {
      setError("Your Email doesn't include @");
      return false;
    } else if (!isValidEmail(email)) {
      setError("Your email is not valid");
      return false;
    }
    // Validating Subject
    if (subject.trim() === "") {
      setError("Error don't leave empty spaces ");
      return false;
    }

    // Validating Message
    if (message.trim() === "") {
      setError("Message must be filled with other than spaces ");
      return false;
    }
    setError("");
    return true;
  };

  console.log("Service ID: ", import.meta.env.VITE_SERVICE_ID);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_SERVICE_TEMPLETE_ID,
          formRef.current,
          import.meta.env.VITE_SERVICE_PUBLIC_KEY
        )
        .then((result) => {
          console.log(result.text);
          e.target.reset();
        })
        .catch((error) => {
          console.log(error.text);
        });
      setSuccess("Sent successfully 😃");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } else {
      setSuccess("");
    }
  };

  return (
    <>
      <form
        // ref={formRef}
        ref={contactRef}
        className="flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <Reveal overflow="visible" delay={0.1} width="w-full">
          <label
            className="text-[var(--color-neutral_off_white)]"
            htmlFor={name}
          >
            Name
          </label>
          <input
            className="w-full text-[var(--bg-custom-color)] text-lg bg-[var(--bg-input-color)] py-3 px-4"
            type="text"
            name="from_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Reveal>
        <Reveal overflow="visible" delay={0.2} width="w-full">
          <label
            className=" text-[var(--color-neutral_off_white)]"
            htmlFor={email}
          >
            Email
          </label>
          <input
            className="w-full text-lg text-[var(--bg-custom-color)] bg-[var(--bg-input-color)] py-3 px-4"
            type="email"
            name="email"
            ref={inputRef}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Reveal>
        <Reveal overflow="visible" delay={0.3} width="w-full">
          <label
            className=" text-[var(--color-neutral_off_white)]"
            htmlFor={subject}
          >
            Subject
          </label>
          <input
            className="w-full text-[var(--bg-custom-color)] text-lg bg-[var(--bg-input-color)] py-3 px-4"
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </Reveal>
        <Reveal overflow="visible" delay={0.4} width="w-full">
          <label
            className=" text-[var(--color-neutral_off_white)]"
            htmlFor={message}
          >
            Message
          </label>
          <input
            className="w-full text-[var(--bg-custom-color)] text-lg bg-[var(--bg-input-color)]  py-3 px-4"
            type="text"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Reveal>
        <Reveal overflow="visible" delay={0.7}>
          <button
            className="lg:py-5 lg:px-10 py-2 px-5 text-[var(--bg-custom-color)] bg-[var(--color-neutral)] rounded-4xl w-fit lg:text-lg font-bold cursor-pointer custom-scale-btns "
            type="submit"
          >
            Submit
          </button>
        </Reveal>
      </form>
      {error && <p className="text-lg text-red-500">{error}</p>}
      {success && <p className="text-lg text-green-500">{success}</p>}
    </>
  );
};

export default Form;
