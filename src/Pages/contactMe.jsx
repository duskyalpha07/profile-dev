import React, { useState } from 'react';
import { Link } from 'react-router';

const Contactme = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  

  const [errors, setErrors] = useState({});


  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(form);
  

    if (errors[name]) {
        setErrors((prev) => ({
          ...prev,
          [name]: '',
        }));
      }
  };
  

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) {
      newErrors.name = 'Name is required';
    }


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!form.message.trim()) {
      newErrors.message = 'Message is required';
    }
    setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
  };



  const handleSendEmail = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const data = await fetch('/api/server', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const res = await data.json();
      console.log(res);
      
      setForm({ name: '', email: '', subject: '', message: '' });
      alert("Email sent successfully!");
      
    } catch (error) {
      console.error("Failed to send email", error);
    }
  };


  return (
    <div>
      <h2>Contact me</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '400px' }}>
        
        <div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <input
                name="name"
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={handleOnchange}
              />
              {errors.name && <span style={{ color: '#ff6b6b', fontSize: '12px' }}>{errors.name}</span>}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={handleOnchange}
              />
              {errors.email && <span style={{ color: '#ff6b6b', fontSize: '12px' }}>{errors.email}</span>}
            </div>
          </div>
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Your message..."
            rows="10"
            style={{ width: '100%' }}
            value={form.message}
            onChange={handleOnchange}
          />
          {errors.message && <span style={{ color: '#ff6b6b', fontSize: '12px', display: 'block' }}>{errors.message}</span>}
        </div>

        <button 
          style={{ width: '140px', height: '40px', cursor: 'pointer' }} 
          onClick={handleSendEmail}
        >
          Contact Me
        </button>

        <p>
          <Link to={'/'}>Go Back</Link>
        </p>
      </div>
    </div>
  );
};

export default Contactme;