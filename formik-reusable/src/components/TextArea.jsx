import { ErrorMessage, Field } from "formik";
import ErrorText from "./ErrorText";

const TextArea=(props)=>{
    const {name,label,...rest}=props;
return<>
<div className="form-control">
    <label htmlFor={label}>{label}</label>
    <Field as="textarea" name={name} label={label}  />
    <ErrorMessage name={name} component={ErrorText}/>
    </div>
</>
}
export default TextArea;