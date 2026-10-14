// contact.jsx
// Contact page: direct links plus a controlled form (React Forms pattern
// from COMP229). On Netlify the form is delivered through Netlify Forms.

import { useState } from 'react';

const empty = { firstName: '', lastName: '', phone: '', email: '', message: '' };

export default function Contact() {
  // One object holding all field values, so adding a field means adding one key
  const [formData, setFormData] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear this field's error as soon as the user starts fixing it
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  }

  // Required fields and a simple email pattern
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

  async function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setStatus('sending');

    try {
      // Netlify Forms: POST url-encoded data with the form name
      const body = new URLSearchParams({ 'form-name': 'contact', ...formData }).toString();
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('sent');
      setFormData(empty);
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      <h2 className="page-title">Contact</h2>
      <p className="page-lead">
        I'm looking for a Winter 2027 co-op. Send a message or reach me directly.
      </p>

      <div className="contact-grid">
        <aside className="card contact-info">
          <h4>Reach me directly</h4>
          <ul className="contact-list">
            <li>
              <span>Email</span>
              <a href="mailto:salshafi44@gmail.com">salshafi44@gmail.com</a>
            </li>
            <li>
              <span>LinkedIn</span>
              <a href="https://www.linkedin.com/in/salmanshafi44" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/salmanshafi44
              </a>
            </li>
            <li>
              <span>GitHub</span>
              <a href="https://github.com/salshafi" target="_blank" rel="noopener noreferrer">
                github.com/salshafi
              </a>
            </li>
            <li>
              <span>Location</span>
              Toronto, ON
            </li>
          </ul>
        </aside>

        <form className="card contact-form" onSubmit={handleSubmit} noValidate>
          {status === 'sent' && (
            <p className="form-success" role="status">
              Thanks for reaching out! Your message was sent and I'll reply soon.
            </p>
          )}
          {status === 'error' && (
            <p className="form-error-box" role="alert">
              Sorry, the message could not be sent. Please email me at salshafi44@gmail.com instead.
            </p>
          )}

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="firstName">First name</label>
              <input id="firstName" type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
              {errors.firstName && <p className="form-error">{errors.firstName}</p>}
            </div>
            <div className="form-field">
              <label htmlFor="lastName">Last name</label>
              <input id="lastName" type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
              {errors.lastName && <p className="form-error">{errors.lastName}</p>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} />
              {errors.email && <p className="form-error">{errors.email}</p>}
            </div>
            <div className="form-field">
              <label htmlFor="phone">Phone (optional)</label>
              <input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} />
            {errors.message && <p className="form-error">{errors.message}</p>}
          </div>

          <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>
        </form>
      </div>
    </>
  );
}
