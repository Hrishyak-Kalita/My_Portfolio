import React, { useState } from "react";

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
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="formBox">
      <form onSubmit={onSubmit}>
        {/* <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" required></textarea>

        <button type="submit">Submit Form</button> */}

        <input className="info" type="text" placeholder="Name" required />
          <input className="info" type="email" placeholder="Email" required />
          <textarea className="info" rows={8} placeholder="Message" required />
          <button className="info" type="submit">Submit</button> 

      </form>
      <span>{result}</span>
    </div>
  );
}
