'use client';

import { ToastContext } from '../../../../components/ToastProvider';
import { useRouter } from 'next/navigation';
import React from 'react';

function ContactPage() {
  const router = useRouter();

  const { createToast } = React.useContext(ToastContext);

  function handleSubmit() {
    event.preventDefault();

    // send data to the server

    router.push('/exercises/02-flash-messages');

    createToast(
      "Your message was received. We'll get back to you shortly!",
      'success'
    );
  }
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" required={true} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" />

        <button>Submit</button>
      </form>
    </main>
  );
}

export default ContactPage;
