// import React, { useState } from "react";
// import "./contact.scss";
// import { motion } from "framer-motion";

// export default function Form() {
//   const variants = {
//     initial: {
//       y: 500,
//       opacity: 0,
//     },
//     animate: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const [result, setResult] = useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", "582bbdc9-dd81-4691-b59e-89ed8c8c3310");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData,
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("Form Submitted Successfully");
//       event.target.reset();
//     } else {
//       console.log("Error", data);
//       setResult(data.message);
//     }
//   };

//   return (
//     <motion.div
//       className="formBox"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ delay: 3, duration: 1 }}
//     >
//       <form onSubmit={onSubmit}>
//         {/* <input type="text" name="name" placeholder="Name" required />
//         <input type="email" name="email" placeholder="Email" required />
//         <textarea name="message" placeholder="Message" required></textarea>

//         <button type="submit">Submit Form</button> */}

//         <input type="text" placeholder="Name" required />
//         <input type="email" placeholder="Email" />
//         <textarea rows={8} placeholder="Message" required />
//         <button type="submit">Submit</button>
//       </form>
//       <span>{result}</span>
//     </motion.div>
//   );
// }

import React, { useState } from "react";
import { motion } from "framer-motion";
import "./contact.scss";

export default function Form() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "582bbdc9-dd81-4691-b59e-89ed8c8c3310");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.error("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="formBox">
      <form onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" rows={8} placeholder="Message" required />
        <button type="submit">Submit</button>
      </form>
      <span>{result}</span>
    </div>
  );
}
