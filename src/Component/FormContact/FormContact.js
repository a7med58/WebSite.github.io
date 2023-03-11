import { useState } from "react";
const FormContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [services, setServices] = useState("");

  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form inputs
    if (!name || !email || !phone || !services || !message) {
      alert("Please fill all fields");
      return;
      
    }
    console.log(name, email, phone, services, message);
    setName("");
    setEmail("");
    setPhone("");
    setServices("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="contactform">
      <div className="form-control">
        <input
          placeholder="Your Name"
          ttype="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <input
          placeholder="Your E-Mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-control">
        <input
          placeholder="Your Phone"
          type="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <select value={services} onChange={(e) => setServices(e.target.value)}>
        <option>Select Service</option>
        <option>Security</option>
        <option>Frontend</option>
        <option>Backend</option>
      </select>
      <div className="form-control">
        <textarea
          placeholder="Your Massege"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button>Submit</button>
    </form>
  );
};

export default FormContact;
