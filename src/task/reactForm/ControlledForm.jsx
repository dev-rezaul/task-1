import React, { useState } from 'react';
import Style from '../control.module.css';

const ControlledForm = () => {


    //* for input fields
    let [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        gender: "",
        degree: "",
    });

    //* for checkboxes
    let [hobby, setHobby] = useState([]);

    //* Destructred the state variables
    let { firstName, lastName, email, password, gender, degree } = state;


    let handleinput = (event) => {
        let { name, value } = event.target;

        setState({ ...state, [name]: value });
    };

    let handlehobby = (event) => {
        setHobby([...hobby, event.target.value]);
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
        console.log(hobby);
    };
    return (
        <>
            <div id={Style.container}>
                <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                    <div className={Style.input}>
                        <input
                            type="text"
                            id='fname'
                            placeholder='Enter first name'
                            value={firstName}
                            name='firstName'
                            onChange={handleinput}
                        />
                    </div>
                    <div className={Style.input}>
                        <input
                            type="text"
                            id='lname'
                            placeholder='Enter last name'
                            value={lastName}
                            name='lastName'
                            onChange={handleinput}
                        />
                    </div>
                    <div className={Style.input}>
                        <input
                            type="email"
                            id='mail'
                            placeholder='Enter email address'
                            value={email}
                            name='email'
                            onChange={handleinput}
                        />
                    </div>
                    <div className={Style.input}>
                        <input
                            type="password"
                            id='pass'
                            placeholder='Enter password'
                            value={password}
                            name='password'
                            onChange={handleinput}
                        />
                    </div>
                    <br />
                    <div className={Style.check} value={hobby} onChange={handlehobby}>
                        <div>Hobby </div>
                        <br />
                        <input type="checkbox" value='Coding' />Coding
                        <input type="checkbox" value='Drawing' />Drawing
                        <input type="checkbox" value='Cricket' />Cricket
                        <input type="checkbox" value='Singing' />Singing
                        <input type="checkbox" value='Reading' />Reading
                        <input type="checkbox" value='Dancing' />Dancing
                    </div>
                    <br />
                    <div value={gender} onChange={handleinput}>
                        <label htmlFor="">Gender : </label>
                        <input
                            type="radio"
                            name='gender'
                            value='Male'
                        />Male
                        <input
                            type="radio"
                            name='gender'
                            value='Female'
                        />Female
                        <input
                            type="radio"
                            name='gender'
                            value='Others'
                        />Others
                    </div>
                    <br />
                    <div>
                        <label htmlFor="">Degree </label>
                        <select
                            name='degree'
                            value={degree}
                            onChange={handleinput}>
                            <option value="">--SELECT--</option>
                            <option value="B.E">B.E</option>
                            <option value="BSC">BSC</option>
                            <option value="MSC">MSC</option>
                            <option value="M.Tech">M.Tech</option>
                            <option value="MBA">MBA</option>
                            <option value="MCA">MCA</option>
                            <option value="BCA">BCA</option>
                            <option value="B.Com">B.Com</option>
                            <option value="M.Com">M.Com</option>
                        </select>
                    </div>
                    <div>
                        <button>SUBMIT</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ControlledForm



