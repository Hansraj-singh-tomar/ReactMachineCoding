import { Children } from 'react'
const CustomSwitch = ({ children, value }) => {
    // so this children props either can be a single value or an array of value
    // so we have to do conditional check and decide if it is single value you have to return it as it is, if it is array of value you have to iterate 
    // so this react Children method which we are getting from react this help us to do processing bypass that logic and simply we can
    // iterate the children so if it is single element then also this for each function will run once and if it is array of element 
    // so this will be run as long as the element items are there
    const cases = [];
    const defaults = [];
    Children.forEach(children, (e) => {
        // this(<CustomCase value="20">Hello 20</CustomCase> ) jsx is a functional representation.
        // with the help of babel this jsx is converted to a function 
        // let's see how this function look like that, if we write console.log(e); // react.createElement() function will be there and this function is represented by the object
    
        console.log(e); // check it in console // {$$typeof: Symbol(react.element), key: null, ref: null, props: {…}, type: ƒ..}
        // console.log(e.type); 
        // console.log(e.type.name); // it will return the name of the children // 4 time customCase and one is defaultCase
        
        if (e.type.name == "CustomCase") {
            // here we have to do two validations here for function and for a primitive value
            if (typeof e.props.value === "function") {
                if (e.props.value(value)) {
                    cases.push(e);
                }
            } else if (value === e.props.value) {
                cases.push(e);
            }
        } else if (e.type.name === "DefaultCase") {
            defaults.push(e);
        }
    });

    // console.log(cases);
    if (cases.length > 0) {
        return cases;
    } else {
        return defaults;
    }
}

// eslint-disable-next-line react/prop-types
const CustomCase = ({ children }) => {
    return <>{children}</>
}

// eslint-disable-next-line react/prop-types
const DefaultCase = ({ children }) => {
    return <>{children}</>
}

const CustomSwichCaseCmp = () => {
  return (
    <>
        <CustomSwitch value="20">
            <CustomCase value={(e) => e > 10}><div>Hello 10</div></CustomCase>      
            {/* <CustomCase value={(e) => e < 10}><div>Hello 10</div></CustomCase>       */}
            <CustomCase value="20">Hello 20</CustomCase>      
            <CustomCase value="30">Hello 30</CustomCase>      
            <CustomCase value="10"><div>Hello 10</div></CustomCase>      
            <DefaultCase>Hello 40</DefaultCase>      
        </CustomSwitch>
    </>
  )
}

export default CustomSwichCaseCmp