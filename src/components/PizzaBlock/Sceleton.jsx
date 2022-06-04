import React from "react"
import ContentLoader from "react-content-loader"

const Sceleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="40" cy="84" r="9" /> 
    <circle cx="106" cy="106" r="106" /> 
    <rect x="2" y="239" rx="5" ry="5" width="201" height="23" /> 
    <rect x="-3" y="275" rx="10" ry="10" width="207" height="55" /> 
    <rect x="2" y="350" rx="0" ry="0" width="68" height="28" /> 
    <rect x="103" y="346" rx="14" ry="14" width="99" height="39" />
  </ContentLoader>
)

export default Sceleton