import { ErrorMessage, Field } from "formik";
import ErrorText from "./ErrorText";
import {React} from'react'
const Radio=(props)=>{
    const {name,label,options,...rest}=props;

    return(<>
            <div>
            <label htmlFor={label}>{label}</label>
           <Field >{({field})=>{
            console.log(field);
            return <div>

                {
                    options.map((option)=>{ console.log(option)
                        return <input type="radio" />
                    })
                }
            </div>
           }} </Field>

          <ErrorMessage name={name} component={ErrorText} />

            </div>
    </>)
}
export default Radio;