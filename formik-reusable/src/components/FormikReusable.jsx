
import {Formik,Form} from 'formik'
import FormikControl from './FormikControl';
import * as Yup from 'yup'
const FormikReusable=()=>{

const options=[
    {key:'select'},
    {key:'option1',value:'option1'},
{key:'option2',value:'option2'},
{key:'option3',value:'option3'}]

const radioOptions=[
{key:'option1',value:'option1'},
{key:'option2',value:'option2'},
{key:'option3',value:'option3'}]

const initialValues={email:'', description:'',radioOption:'',selectOption:[{}]};
const validationSchema=Yup.object({email:Yup.string().email('email format').required('required'),
                                   description: Yup.string().required('required'),  
                                   selectOption: Yup.string().required('required'),
                                   radioOption: Yup.string().required('required')      });
const onSubmit=(values)=>{console.log(values)}

    return(<>
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
         <Form>
            <FormikControl control='input'
                           name='email' 
                           type='email'
                           lable='email' />

            <FormikControl  control="textarea"
                            name="description"
                            label="description"
                            />

            <FormikControl control="select"
                            name="selectOption"
                            label="select any one"
                            type="select"
                            options={options}
                             />


            <FormikControl control="radio"
                            name="radioOption"
                            label="radio selection"
                            type='radio'
                            options={options}
                            />
            <button type='submit'>submit</button>
         </Form>

    </Formik>

    
    </>)
}
export default FormikReusable;