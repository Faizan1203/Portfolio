import { useEffect, useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import './Contact.css';
import { Container } from 'react-bootstrap';
import Loader from '../Loader/Loader';

const Contact = () => {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="contactbackground">
      <Loader load={load} />
      <Container className="contactpage">
        <h2 className="contacthead text-center">Get In Touch</h2>
        <p className="contactpara">
          I am currently searching for coop opportunities as a Software
          developer.
          <br />
          If there is any vacancy my inbox is always open. Whether you have any
          further questions or just want to say hi.
          <br /> I will try my best to get back to you!
        </p>
        <ContactForm />
        <span></span>
      </Container>
    </div>
  );
};

export default Contact;
