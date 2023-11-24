// we generally Create this feature inside user dashboard where we decide we need to show this feature or not if it is premiur user then we must show this else not kind of problem we are solving  
/* eslint-disable no-unused-vars */
import {useContext} from 'react'
import { FeatureFlag, Context } from './Context'


const Example = () => {
  // const { features } = useContext(FeatureFlag)
  // console.log(features);
  return (
    <>
      {/* <h1>{features.isGooglePayEnabled ? "Google" : " "}{features.isApplePayEnabled ? "Apple" : " "}</h1> */}
      <Feature feature='isGooglePayEnabled' value={true}>Google</Feature>
      <Feature feature='isApplePayEnabled' value={false}>Apple</Feature>
    </>
  )
}

// eslint-disable-next-line react/prop-types
const Feature = ({ feature, value, children }) => {
  const { features } = useContext(FeatureFlag);
  return features[feature] === value ? children : null;
}

const FeatureFlagCmp = () => {
  return (
    <Context>  
        <Example />
    </Context>
  )
}

export default FeatureFlagCmp