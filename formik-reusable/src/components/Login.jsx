import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from 'yup'
import FormikControl from "./FormikControl";
import ErrorText from "./ErrorText";
import { useState } from "react";

const Login=()=>{
    const [emaivalid,setEmailvalid]=useState('')
    const initialValues={email:'',password:'',address:''}
    const onsubmit=(values)=>{console.log(values);}
    const validationSchema=Yup.object({email:Yup.string().email('setEmailvalid').required('required'),
                    password:Yup.string().required('required'),
                    address:Yup.string().required('required')})
return(<>

    <Formik initialValues={initialValues} onSubmit={onsubmit} validationSchema={validationSchema} >
        <Form>
    <FormikControl control="input" name="email" label="enter email"  type='email' />
    
    <FormikControl control="input" name="password"  label="enter password" type="password" />
    
    <FormikControl control="textarea" name="address"  label="address"  />


    <button type="submit" >login</button>
    </Form>
    </Formik>
</>)
}
export default Login;