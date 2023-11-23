/* This function also retrieves the value of the commandLine property,
           which cannot be set as an attribute.  */

window.onload = function () {
    sTempStr = "applicationName  = " + app.applicationName + "\n" +
        "border           = " + app.border + "\n" +
        "borderStyle      = " + app.borderStyle + "\n" +
        "caption          = " + app.caption + "\n" +
        "commandLine      = " + app.commandLine + "\n" +
        "icon             = " + app.icon + "\n" +
        "maximizeButton   = " + app.maximizeButton + "\n" +
        "minimizeButton   = " + app.minimizeButton + "\n" +
        "showInTaskBar    = " + app.showInTaskbar + "\n" +
        "singleInstance   = " + app.singleInstance + "\n" +
        "sysMenu          = " + app.sysMenu + "\n" +
        "version          = " + app.version + "\n" +
        "windowState      = " + app.windowState + "\n";

        opre.innerText = sTempStr;
}