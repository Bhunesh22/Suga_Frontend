import ReactGA from 'react-ga';

export const pageEvent = (pageName) =>{
    ReactGA.pageview(pageName)
}

export const customEvent = (pageName, action, label, value) =>{
    ReactGA.event({
        category: pageName,
        action: action,
        label: label,
        value: value
    })
}