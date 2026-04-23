import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Contactme = () => {
  const apiUrl = import.meta.env.VITE_API_URL ?? '';
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${apiUrl}/api/server`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      const res = await response.json();
      console.log(res);

      if (response.ok) {
        alert('Email sent successfully');
        setForm({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        alert(res.error || 'Error sending email');
      }
    } catch (error) {
      console.error(error);
      alert('Server error');
    }
  };

  return (
    <div>
      <div className='cardbutton'>
        <Link to="/">Go Back</Link>
      </div>

      <form onSubmit={handleSendEmail}>
        <div className='w-[100%] h-[100%]'>
          <div style={{ display: 'flex', gap: '20px' }}>
            <input
              className='bg-white rounded-xl text-black'
              name="name"
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={handleOnchange}
            />
            <input
              className='bg-white rounded-xl text-black'
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleOnchange}
            />
          </div>

          <div style={{ paddingTop: '20px' }}>
            <input
              className='bg-white rounded-xl text-black'
              name="subject"
              type="text"
              placeholder="Subject"
              value={form.subject}
              onChange={handleOnchange}
            />
          </div>

          <div style={{ paddingTop: '20px' }}>
            <textarea
              className='bg-white rounded-xl text-black'
              name="message"
              rows="10"
              cols="50"
              placeholder="Message"
              value={form.message}
              onChange={handleOnchange}
            />
          </div>

          <button
            type="submit"
            className="cardbutton"
            style={{ width: '140px', height: '40px' }}
          >
            Contact Me
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contactme;
