# Search Domain Names powered by Name.com API

## Quick Setup 

Install VS Code [Live Server Extention](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)


### Steps to open project via Live Server

1. Open a project and click to `Go Live` from the status bar to turn the server on/off. 
![Go Live Control Preview](./docs/images/Screenshot/vscode-live-server-statusbar-3.jpg)

2. Right click on a `HTML` file from Explorer Window and click on `Open with Live Server`.
![Explorer Window Control](./docs/images/Screenshot/vscode-live-server-explorer-menu-demo-1.gif).

3. Open a HTML file and right-click on the editor and  click on `Open with Live Server`.
![Edit Menu Option Preview](./docs/images/Screenshot/vscode-live-server-editor-menu-3.jpg)

4. Hit `(alt+L, alt+O)` to Open the Server and `(alt+L, alt+C)` to Stop the server (You can change the shortcut form keybinding). *[On MAC, `cmd+L, cmd+O` and `cmd+L, cmd+C`]*

5. Open the Command Pallete by pressing `F1` or `ctrl+shift+P` and type `Live Server: Open With Live Server ` to start a server or type `Live Server: Stop Live Server` to stop a server.


## Why we Used Live Server Extention for Demo
* CORS Enabled
* Start or Stop server by a single click from status bar.
* `https` Support.

### Pending Things

1. Building Load Spinner Component

2. Buying Actual Domain via POST request on clicking Book Now Button

3. UserName and Password key for Name.com API Access is for dev enviornment and not seperated yet into secret access key structure.


#### References

1. https://lit-element.polymer-project.org/guide

2. https://developer.mozilla.org/en-US/docs/Web/Web_Components 

3. https://medium.com/@grvpanchal/css-for-web-components-using-frameworks-segregation-and-scarfs-pattern-1045542e128a

