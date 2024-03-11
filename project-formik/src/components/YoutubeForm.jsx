import {Formik, useFormik} from 'formik'
import * as Yup from 'yup'


const YoutubeForm=()=>{  
    const  validate=(values)=>{
        let errors={}
        
        if(!values.name)
        errors.name='required'
        
        if(!values.email)
        errors.email='required'
        else if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(values.email))
        errors.email='format wrong'

        if(!values.channel)
        errors.channel='required'

        return errors;
    } 




    const validationSchema=Yup.object({name:Yup.string().required('must not be empty'),
                                        email:Yup.string().email('wrong format').required('must not be empty'),
                                    channel:Yup.string().required('must not be empty')})
    const formik=useFormik({
        initialValues:{name:'',email:'',channel:''},
        handleSubmit:(valus)=>{console.log(valus)},
        validationSchema});
      
    return(<>
    <h4>youtube form</h4>
    <form onSubmit={formik.handleSubmit}>
        name<input type="text" name="name" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} /><br />
        {formik.errors.name && formik.touched.name ? <div>{formik.errors.name}</div> : null}
        email<input type="text" name="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} /><br />
        {formik.errors.email && formik.touched.email ? <div>{formik.errors.email}</div> : null}

        channel<input type="text" name="channel" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.channel}/><br />
        {formik.errors.channel && formik.touched.channel ? <div>{formik.errors.channel}</div> : null}

        <button>submit</button>
    </form>
    </>)
}
export default YoutubeForm;