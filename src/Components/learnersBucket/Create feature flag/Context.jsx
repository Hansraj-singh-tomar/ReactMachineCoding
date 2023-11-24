import { createContext, useState } from "react"

export const FeatureFlag = createContext({})

// eslint-disable-next-line react/prop-types
export const Context = ({children}) => {
    const [features] = useState({isGooglePayEnabled: true, isApplePayEnabled: false});
  return (
      // eslint-disable-next-line no-undef
      <FeatureFlag.Provider value={{features}}>{children}</FeatureFlag.Provider>
  )
}

export default Context