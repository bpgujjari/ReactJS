import { ErrorMessage, Field } from "formik";
import ErrorText from "./ErrorText";

const Select=(props)=>{

    const {name,label,options,...rest}=props

    return(<>
    <div className="form-control">
        <label htmlFor={label}>{label}</label>
        <Field as="select" name={name} {...rest}>
            
            {
                options.map((option)=>{
                    return <option key={option.key} value={option.value} >{option.key}</option>
                })

            }
        </Field>
        
        <ErrorMessage name={name} component={ErrorText}/>
    </div>

    </>)
}
export default Select;