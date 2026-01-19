import * as yup from 'yup';

const basicSchema = yup.object().shape({
    email: yup.string().email("Enter your email").required(),
    password: yup.string().required("Enter your password").required(),
})

export default basicSchema

