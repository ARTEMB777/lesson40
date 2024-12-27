import React, { useRef } from 'react';

const UncontrolledComponent = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault(); // Додано дужки

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log('Form data:', { name, email, password });
  };

  return (
    <div>
      <h1>Uncontrolled Component</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" ref={nameRef} />
        <label>Email</label>
        <input type="text" ref={emailRef} />
        <label>Password</label>
        <input type="password" ref={passwordRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UncontrolledComponent;
