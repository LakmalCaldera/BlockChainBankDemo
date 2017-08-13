export var sortItems = (items) => {
    items = items.sort((a, b) => {
        if (parseInt(a.timestamp) < parseInt(b.timestamp))
            return 1;
        if (parseInt(a.timestamp) > parseInt(b.timestamp))
            return -1;
        return 0;
    })
    return [...items];
}

export var isAdmin = (appType) => {
    return appType == "ADMIN" ? true : false
}

export var isSampath = (appType) => {
    return appType == "ADMIN" ? true : false
}

export var isHNB = (appType) => {
    return appType == "ADMIN" ? true : false
}

export var getLogoUrl = (appType) => {
    switch(appType){
        case "ADMIN":
        return "admin-logo.svg"
        case "SAMPATH":
        return "sampath-logo.png"
        case "HNB":
        return "hnb-logo.png"
        case "BOC":
        return "boc-logo.png"
        default:
        break
    }
}

export var getThemeClass = (appType) => {
    switch(appType){
        case "ADMIN":
        return "admin-theme"
        case "SAMPATH":
        return "sampath-theme"
        case "HNB":
        return "hnb-theme"
        case "BOC":
        return "boc-theme"
        default:
        break
    }
}

export var getLogoName = (appType) => {
    switch(appType){
        case "ADMIN":
        return "(ADMIN PANEL)"
        case "SAMPATH":
        return "BLOCK CHAIN"
        case "HNB":
        return "BLOCK CHAIN"
        case "BOC":
        return "BLOCK CHAIN"
        default:
        break
    }
}

