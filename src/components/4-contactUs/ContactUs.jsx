import './contactUs.css';
import { useForm, ValidationError } from '@formspree/react';
import Lottie from 'lottie-react';
import done from '../../animation/done.json';
import contactUs from '../../animation/contactUs.json';

const ContactUs = () => {
  const [state, handleSubmit] = useForm('xqkrlllr');

  return (
    <section className='contact'>
      <h1 className='title'>
        <span className='icon-envelope'> </span>
        Contact Us
      </h1>
      <p className='subtitle'>
        contact us for more informations and get notified when i publish
        something new
      </p>
      <div style={{ justifyContent: 'space-between' }} className='flex'>
        <form onSubmit={handleSubmit} className='form'>
          <div className='flex'>
            <label htmlFor='email'>Email adress:</label>
            <input
              autoComplete='off'
              required
              type='email'
              name='email'
              id='email'
            ></input>
            <ValidationError
              prefix='Email'
              field='email'
              errors={state.errors}
            />
          </div>
          <div className='flex' style={{ marginTop: '1rem' }}>
            <label htmlFor='message'>Your message:</label>
            <textarea required name='message' id='message'></textarea>
            <ValidationError
              prefix='Message'
              field='message'
              errors={state.errors}
            />
          </div>
          <button className='submit' type='submit' disabled={state.submitting}>
            {state.submitting ? 'Submitting' : 'Submit'}
          </button>
          {state.succeeded && (
            <p
              className='flex'
              style={{ fontSize: '16px', marginTop: '1.7rem' }}
            >
              <Lottie
                style={{ height: 40, width: 40 }}
                animationData={done}
                loop={false}
              />{' '}
              Your message has been sent successfully!
            </p>
          )}
        </form>
        <div className='animation '>
          <Lottie
            className='contact-animation'
            style={{ height: 300 }}
            animationData={contactUs}
            loop={true}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
