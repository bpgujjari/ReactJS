import { ErrorMessage, Form, Formik } from "formik";
import FormikControl from "./FormikControl";
import * as Yup from 'yup'

const Registration=()=>{
    const initialValues={email:'',password:'',confirmPassword:'' ,address:'',modeOfContact:''}
    const onSubmit=(values)=>{console.log(values)}
    const options =[{key:'mobile',value:'mobile'},{key:'email',value:'email'}]
    const validationSchema=Yup.object({email:Yup.string().email('email format').required('required'),
                    password:Yup.string().required('required'),
                    confirmPassword:Yup.string()
                    .oneOf([Yup.ref('password'),''],'password must watch')
                    ,address:Yup.string().required('required'),
                    modeOfContact:Yup.string().required('req')})

return(<>

<Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema} >{
    (formik)=>{
        console.log(formik.isValid);
       return <Form>

        <FormikControl control="input" type="email" lable="email" name="email" />
        <FormikControl control="input" type="password" lable="password" name="password" />
        <FormikControl control="input" type="password" lable="password" name="confirmPassword" />
        <FormikControl control="textarea" lable="address" name="address"/>
        <FormikControl control="radio"  name="modeOfContact" lable="MODE OF CONTACT" options={options} />
        <button  >register</button>

       </Form>

    }
    }</Formik>


</>)
}
export default Registration;