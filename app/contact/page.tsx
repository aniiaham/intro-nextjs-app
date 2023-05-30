"use client";
import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState(' ');
  const submitHandler = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()

    await fetch('/api/contact', {
        method: "POST",
        body: JSON.stringify({email}), 
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    console.log("hello")
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
