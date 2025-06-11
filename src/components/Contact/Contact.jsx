import { MdVerified } from "react-icons/md";

function Contact() {
  return (
    <>
      <h1 className="text-2xl items-center mt-4">
        <span className="italic md:not-italic text-sky-500 ml-8 glow-text">
          thangthugian
        </span>
        <MdVerified className="inline-block text-sky-400 ml-1" />
        <span className="text-orange-200 mr-3">:~$</span>
        <span className="text-slate-700 glow-text">contact</span>
      </h1>
      <ul className="ml-8 mt-4 text-2xl">
        {/* <span className="rounded-xl  p-1 m-2 bg-violet-500 text-white">
          contact with me
        </span> */}
        <li className="list-disc ml-8 mt-4">Email: dizzfeed@gmail.com</li>
        <li className="list-disc ml-8">And the stuff linked above.</li>
      </ul>
    </>
  );
}

export default Contact;
