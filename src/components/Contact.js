import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    yourName: "",
    companyName: "",
    mobileNo: "",
    email: "",
    interestedIn: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, mobileNo: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validate email
    const emailValidator = require("email-validator");
    if (!emailValidator.validate(formData.email)) {
      setError("Invalid email address.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      alert("Message sent successfully!");
    } catch (error) {
      setError("Failed to send message. Please try again.");
    }
  };

  return (
    <div id="contact"  className="contact-form-container" style={{ maxWidth: "600px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form" style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <div className="form-group" style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="yourName" style={{ marginBottom: "5px" }}>Your Name</label>
          <input
            type="text"
            id="yourName"
            name="yourName"
            value={formData.yourName}
            onChange={handleChange}
            required
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
        </div>

        <div className="form-group" style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="companyName" style={{ marginBottom: "5px" }}>Company Name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
        </div>

        <div className="form-group" style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="mobileNo" style={{ marginBottom: "5px" }}>Mobile Number</label>
          <PhoneInput
            country={"us"}
            value={formData.mobileNo}
            onChange={handlePhoneChange}
            inputStyle={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
            required
          />
        </div>

        <div className="form-group" style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="email" style={{ marginBottom: "5px" }}>Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
        </div>

        <div className="form-group" style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="interestedIn" style={{ marginBottom: "5px" }}>Interested In</label>
          <input
            type="text"
            id="interestedIn"
            name="interestedIn"
            value={formData.interestedIn}
            onChange={handleChange}
            required
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
        </div>

        <div className="form-group" style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="message" style={{ marginBottom: "5px" }}>Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc", resize: "vertical", minHeight: "100px" }}
          />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button
          type="submit"
          style={{ padding: "10px 20px", backgroundColor: "black", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
