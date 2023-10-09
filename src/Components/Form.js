import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("mbjvpnoz");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <form  onSubmit={handleSubmit}>
      <label htmlFor="email" className="flex justify-center items-center">
       
      </label>
      
      <div className="flex justify-center items-center mt-5"> 
      <input
        className='textemail rounded-md bg-slate-300'
        id="email"
        type="email" 
        name="email"
        placeholder='email'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      
      </div>
      
     <div  className="flex justify-center items-center mt-5">
     <textarea
        className='textarea rounded-md bg-slate-300'
        id="message"
        name="message"
        placeholder='comments'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
     </div>
     
     <div className="flex justify-center items-center mt-5 mb-12 ">
     <button type="submit" className="bg-green-500 p-2 text-white rounded-md font-bold"  disabled={state.submitting}>
        Submit
      </button>
     </div>
      
    </form>
  );
}
function Form() {
  return (
    <>
    <div className="
      text-center mt-10 mb-10 text-xl font-bold flex justify-center items-center">
        <span className=" text-indigo-500">Contact</span>
        <span>Me</span>
      </div>
    
    <ContactForm />
    </>
  );
}
export default Form;