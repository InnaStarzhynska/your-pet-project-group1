const breakpoints = {
    mobile: "320px",
    tablet: "768px",
    desktop: "1280px"
}

export const devices = {
  mobile: `(min-width: ${breakpoints.mobile})`,
  tablet: `(min-width: ${breakpoints.tablet})`,
  desktop: `(min-width: ${breakpoints.desktop})`
}