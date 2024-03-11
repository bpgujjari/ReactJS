const ErrorText=(props)=>{
    const {text}=props;
 return <div className="error" >

{text?<p>{text}</p> : <p>required</p>}

 </div>
}
export default ErrorText;