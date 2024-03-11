import { ErrorMessage, Field } from "formik";
import ErrorText from "./ErrorText";

const InputControl=(props)=>{
const {lable,name,type,...rest}=props;

return(<>
    <div className="form-control">
    <label htmlFor={lable}>{lable}</label>
    <Field type={type}  name={name}/>
    <ErrorMessage name={name} component={ErrorText} />
    </div>
</>)


}
export default InputControl;