import InputControl from "./InputControl";
import Radio from "./Radio";
import Select from "./Select";
import TextArea from "./TextArea";

const FormikControl=(props)=>{
const {control,...rest}=props;

switch(control){
    case 'input': return <InputControl  {...rest}/>
    case 'textarea': return <TextArea {...rest}/>
    case 'select': return <Select {...rest}/>
    case 'radio': return <Radio   {...rest} />
    case 'checkbox':
    case 'date':
        default :
    
}

    return(<>
        
    </>)
}
export default FormikControl;