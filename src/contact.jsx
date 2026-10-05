// contact.jsx
// This component renders the "Contact" page of the portfolio site.
// It collects visitor info through a controlled form, following the
// React Forms pattern from the COMP229 Week 2 lecture, and redirects
// to Home on submit (no backend yet — that comes in Assignment 2+).

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();

  // Controlled form state — one object holding all field values,
  // so adding a new field later only means adding one key here
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });

  // Tracks validation error messages per field
  const [errors, setErrors] = useState({});

  // Updates formData whenever any input changes
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear this specific field's error the moment the user starts fixing it,
  // instead of making them wait until they resubmit the whole form
  if (errors[name]) {
    setErrors((prev) => {
      const updated = { ...prev };
      delete updated[name];
      return updated;
    });
  }
}
 

  // Basic validation — checks required fields and a simple email pattern
  function validate() {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email format is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  }
    function handleSubmit(e) {
  e.preventDefault();
  const validationErrors = validate();

  if (Object.keys(validationErrors).length > 0) {
    // Stop here and show errors instead of submitting
    setErrors(validationErrors);
    return;
  }

  // Clear any leftover errors from a previous failed attempt
  setErrors({});

  // No backend yet, so we just confirm and redirect to Home —
  // this will be replaced with a real API call in Assignment 2
  alert('Thanks for reaching out! Redirecting you to Home.');
  navigate('/');
}
 

  return (
  
    <div className="contact-page">
      <h2>Contact</h2>

      {/* Contact info panel (rubric 1i) */}
      <div className="contact-info">
        <p>
          Email: <a href="mailto:salshafi44@gmail.com">salshafi44@gmail.com</a>
        </p>
        <p>
          LinkedIn:{' '}
          <a
            href="https://linkedin.com/in/salmanshafi44"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/salmanshafi44
          </a>
        </p>
      </div>

      {/* noValidate lets our own error messages show instead of the browser's */}
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-field">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <p className="form-error">{errors.firstName}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p className="form-error">{errors.lastName}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="form-error">{errors.email}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="form-error">{errors.message}</p>}
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}