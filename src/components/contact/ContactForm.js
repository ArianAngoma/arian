import styled from 'styled-components';
import Axios from 'axios';

/* Importaciones propias */
import {useForm} from '../../hooks/useForm';
import {useState} from 'react';

const FormStyle = styled.form`
  width: 100%;

  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }

  label {
    font-size: 1.8rem;
  }

  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }

  textarea {
    min-height: 250px;
    resize: vertical;
  }

  button[type='submit'] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export const ContactForm = () => {
    const [disabled, setDisabled] = useState(false);

    const [formValues, handleInputChange, reset] = useForm({
        name: '',
        email: '',
        message: ''
    });
    const {name, email, message} = formValues;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        try {
            await Axios.post(`${process.env.REACT_APP_API_URL}/email`, formValues);
            // console.log(resp);
            setDisabled(false);
            reset({
                name: '',
                email: '',
                message: ''
            });
        } catch (e) {
            console.log(e);
            setDisabled(false);
        }
    }

    return (
        <>
            <FormStyle onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">
                        Su nombre
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="email">
                        Su correo electrónico
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="message">
                        Su mensaje
                        <textarea
                            type="text"
                            id="message"
                            name="message"
                            value={message}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
                <button disabled={disabled} type="submit">Enviar</button>
            </FormStyle>
        </>
    )
}