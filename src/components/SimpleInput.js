import { useEffect, useState, useRef } from 'react'

import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const { 
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError, 
    valueChangeHandler: nameChangeHandler, 
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');
  const nameInputRef = useRef();
  /*const [enteredName, setEnteredName] = useState('');
  /*const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);*/
  /*const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  /*const [formIsValid, setFormIsValid] = useState(false);*/

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  
  /*const enteredNameIsValid = enteredName.trim() !== '';*/
  /*const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;*/
  /*console.log(nameInputIsInvalid);*/

  const enteredEmailIsValid = enteredEmail.includes('@');
  const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
  

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsInvalid) {
    formIsValid = true;
  }
  /*useEffect(() => {
    if (enteredNameIsValid) {
      setFormIsValid(true)
    } else {
      setFormIsValid(false);
    }
  
  }, [enteredNameIsValid])*/


  /*const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);

    /*if( event.target.value.trim() !== '') {
      setEnteredNameIsValid(true);
    }
  };*/
  const emailInputChangeHandler = event => {
    setEnteredEmail(event.target.value);
  };

  /*const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);
    console.log('desEnfocado');
    /*if( enteredName.trim() === '') {
      setEnteredNameIsValid(false);
    }
  }*/

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    /*setEnteredNameTouched(true);*/

    if( !enteredNameIsValid) {/*enteredName.trim() === ''*/
      /*setEnteredNameIsValid(false);*/
      return;
    }

    /*setEnteredNameIsValid(true);*/

    /*console.log(enteredName);
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);*/

    //nameInputRef.current.value = '' no es ideal porque no debemos manipular el DOM
    /*setEnteredName('');
    setEnteredNameTouched(false);*/
    resetNameInput();

    setEnteredEmail('');
    setEnteredEmailTouched(false);
  }

  /*const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  console.log('nameInputIsInvalid', nameInputIsInvalid)*/

  const nameInputClasses = nameInputHasError
    ? 'form-control invalid' 
    : 'form-control ';
  
  const emailInputClasses = enteredEmailIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          ref={nameInputRef} 
          type='text' 
          id='name' 
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
          />
          {nameInputHasError && (
            <p className='error-text'>Name must not be empty.</p>
          )}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-Mail</label>
        <input 
          ref={nameInputRef} 
          type='email' 
          id='email' 
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
          />
          {enteredEmailIsInvalid && (
            <p className='error-text'>Please enter a valid email.</p>
          )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
