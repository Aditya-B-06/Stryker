import React from 'react'
import {useFormik} from 'formik';
import basicSchema from "./loginSchema.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase.js';
import {useNavigate} from "react-router";
import loginImg from "./loginImg.jpg"
import './forms.css'
import tailwindcss from "@tailwindcss/vite";
function LogInForm(){
    const navigate = useNavigate();
    const [firebaseError, setFirebaseError] = React.useState("");

    const onSubmit = async (values, actions) => {
        setFirebaseError("");
        console.log("submitted");
        try {
            await signInWithEmailAndPassword(
                auth,
                values.email,
                values.password
            );
            navigate("/home");
        } catch (error) {
            setFirebaseError(error.message);
        } finally {
            actions.setSubmitting(false);
        }
    };

    const {values,touched,errors,handleSubmit,handleBlur,handleChange,isSubmitting} = useFormik({
        initialValues:{
            email: '',
            password: '',
        },
        validationSchema: basicSchema,
        onSubmit,
    })
    return(
        <div>
            <img src={loginImg} alt="logo" className="bgi"/>
            <form onSubmit={handleSubmit}>
                <h2 className="">Login</h2>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" placeholder="Email" onChange={handleChange} onBlur={handleBlur} value={values.email}/>
                    {errors.email && touched.email && <p>{errors.email}</p>}
                </div>
                <div className="b" >
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" name="password" placeholder="Password" onChange={handleChange} onBlur={handleBlur} value={values.password}/>
                    {errors.password && touched.password && <p>{errors.password}</p>}
                </div>
                {firebaseError && <p>{firebaseError}</p>}
                <button disabled={isSubmitting} type="submit">
                    {isSubmitting?'Submit':'Login'}
                </button>
            </form>
        </div>
    )
}

export default LogInForm;