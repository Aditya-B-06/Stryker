import React from 'react'
import {useFormik} from 'formik';
import basicSchema from "./loginSchema.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase.js';
import {useNavigate} from "react-router";
import loginImg from "./loginImg.jpg"
import './forms.css'
import {motion} from "framer-motion";



function LogInForm(){
    const fieldVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };
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
        <motion.div className="flex flex-row items-center m-10">
            <motion.img src={loginImg} alt="logo" className="w-2/5 h-2/5 "
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.8, ease: "easeOut",delay: 0.8 }}
            />
            <motion.form onSubmit={handleSubmit} className=" p-2 flex flex-col items-center gap-8"
                         initial="hidden"
                         animate="visible"
                         variants={{
                             hidden: { opacity: 0 },
                             visible: {
                                 opacity: 1,
                                 transition: {
                                     staggerChildren: 0.12,
                                 },
                             },
                         }}
            >
                <h2 className="text-6xl">Login</h2>
                <div className="w-full">
                <div className="flex items-center gap-4">
                    <label htmlFor="email" className="text-lg w-28 text-right">Email:</label>
                    <motion.input variants={fieldVariant} className="border-2 border-blue-300 focus:border-blue-600 focus:outline-none p-1 rounded-md  bg-transparent text-white placeholder-gray-400" type="email" name="email" placeholder="Enter you email" onChange={handleChange} onBlur={handleBlur} value={values.email} autoComplete="off"/>
                </div>
                    {errors.email && touched.email && <p className="text-red-400 text-sm mt-2 ml-32">{errors.email}</p>}
                </div>
                <div className="w-full">
                <div className="flex items-center gap-4" >
                    <label htmlFor="password" className="text-lg w-28 text-right">Password:</label>
                    <motion.input className="flex-1 border-2 border-blue-300 focus:border-blue-600 focus:outline-none p-2 rounded-md bg-transparent text-white placeholder-gray-400"  id="password" type="password" name="password" placeholder="Password" onChange={handleChange} onBlur={handleBlur} value={values.password}  autoComplete="off" variants={fieldVariant}/>
                </div>
                    {errors.password && touched.password && <p className="text-red-400 text-sm mt-2 ml-32">{errors.password}</p>}
                </div>
                {firebaseError && <p>{firebaseError}</p>}
                <button disabled={isSubmitting} type="submit" className=" border border-blue-600 w-32 h-16 hover:border hover:cursor-pointer hover:border-white hover:bg-blue-600 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_12px_rgba(59,130,246,0.6)]">
                    {isSubmitting?'Submit':'Login'}
                </button>
            </motion.form>
        </motion.div>
    )
}

export default LogInForm;