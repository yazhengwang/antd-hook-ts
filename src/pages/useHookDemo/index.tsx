import React from "react";
// import useBind from "./useBind";

interface IProps{
    initialValue:string;
    onChange:any;

}
interface HocState{
    value:string;
}
const HocBind = (WrapperComponent:any) =>
  class extends React.Component<IProps> {
      state:HocState = {
            value: this.props.initialValue 
          };
    
    onChange = (e:any) => {
      this.setState({ value: e.target.value });
      if (this.props.onChange) {
        this.props.onChange(e.target.value);
      }
    };
    render() {
      const newProps = {
        value: this.state.value,
        onChange: this.onChange
      };
      return <WrapperComponent {...newProps} />;
    }
  };
// 用法
const Input = (props: any) => (
  <>
    <p>HocBind实现 value:{props.value}</p>
    <input placeholder="input" {...props} />
  </>
);
const HocInput = HocBind(Input);

const HOCInputDemo = ()=>{
    // const inputProps = useBind("init");
    return <>
            <HocInput
                initialValue="init"
                onChange={(val:string) => {
                console.log("HocInput", val);
                }}
            />
            {/* <p>
                <p>useBind实现 value:{inputProps.value}</p>
                <input {...inputProps} />
            </p> */}
            </>
}

export default HOCInputDemo