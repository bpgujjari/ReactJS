import {Form,Field,Formik,ErrorMessage,useFormik, FieldArray, insert } from "formik";
import * as Yup from 'yup'

const ErrorText=()=>{
    return <div style={{color:'red'}}>required</div>
} 

const YoutubeForm1=()=>{
    const onSubmit=values=>{}
    const initialValues={name:'',email:'',channel:'',social:{fb:'',insta:''},address:'',phoneNumbers:['','']}
    const validationSchema=Yup.object({name:Yup.string().required('empty'),
                                        email:Yup.string().email().required('required'),
                                        channel:Yup.string().required('shold be 10 digits') ,
                                        address:Yup.string().required('required')
                                    })
    return(<>
    
<h6>hi</h6>  
<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>  
<Form>
    <Field type="text" name="name"/>
    <ErrorMessage name="name"/>
    <br />
    <Field  type="text"  name="email"/> 
    <ErrorMessage name="email"/>
    <br />
    <Field  type="text"  name="channel"/> 
    <ErrorMessage name="channel"/>
    <br />
    fb<Field name="social.fb"/>
    <br />
    insta <Field name="social.insta"/><br />
   address <Field name="address" as="textarea" /><br />
   <ErrorMessage name="address" component={ErrorText}  />
   {/* phono 1 <Field name="phoneNumbers[0]" /><br />
   phono 2 <Field name="phoneNumbers[1]"/> */}

   <FieldArray name="phoneNumbers" >
   {
    (fieldArrayProps)=>{
       // console.log(fieldArrayProps)

        const {push,remove,form}= fieldArrayProps;
        const {values}=form;
        const {phoneNumbers}=values;

        return <div>
            {
                phoneNumbers.map((phno,index)=>{
                    return <div key={index}>
                        <Field name={`phoneNumbers[${index}]`} />
                        {
                            index>0 &&(
                                <button onClick={()=>{remove(index)}}>remove</button>
                            )
                }
                <button onClick={()=>{push(index)}} >add</button>
                    </div>
                })
            }

        </div>

    }
   }
   </FieldArray>




    
   <br /> <input type="submit" name="submit"/><br />
</Form>
</Formik>
    
    </>)
}
export default YoutubeForm1;