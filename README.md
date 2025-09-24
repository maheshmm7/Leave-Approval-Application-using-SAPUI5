# Leave Approval Application

This project is a SAPUI5-based Leave Approval application. It allows users to view, approve, and reject leave requests. The application demonstrates routing, data binding, and UI5 best practices, and includes unit and integration tests.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Running the Application](#running-the-application)
- [Internationalization (i18n)](#internationalization-i18n)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

---

## Features
- View leave requests in a master-detail layout
- Approve or reject leave requests
- Routing between views
- Data binding to JSON models
- Internationalization support (i18n)
- Unit and integration tests using QUnit and OPA5

## Prerequisites
- **Node.js** (for running a local server and UI5 tooling)
- **npm** (Node Package Manager)
- **UI5 CLI** (for UI5 development and tooling)
- **SAPUI5 resources** (served locally or via CDN)
- A modern web browser (Chrome, Firefox, Edge, etc.)

## Installation

### 1. Install Node.js and npm
Download and install Node.js (includes npm) from [nodejs.org](https://nodejs.org/).

### 2. Install UI5 CLI
Install the UI5 command line interface globally:
```powershell
npm install --global @ui5/cli
```
For more info, see the [UI5 CLI documentation](https://sap.github.io/ui5-tooling/).

### 3. Clone the repository
```powershell
git clone https://github.com/maheshmm7/Leave-Approval-Application-using-SAPUI5.git
cd webapp (or your saved project file path)
```

### 4. Install dependencies
This project does not require npm packages for SAPUI5 itself, but you may use `http-server` for local development:
```powershell
npm install -g http-server
```

### 5. SAPUI5 Resources
- The project expects SAPUI5 resources to be available via CDN or local installation. If using CDN, ensure your `index.html` references the correct SAPUI5 bootstrap URL.
- For local development with UI5 Tooling, see [UI5 Tooling documentation](https://sap.github.io/ui5-tooling/).

## Project Structure
```
Project/
├── Component.js
├── index.html
├── manifest.json
├── controller/
│   ├── App.controller.js
│   ├── Detail.controller.js
│   └── LeaveRequests.controller.js
├── css/
│   └── style.css
├── i18n/
│   └── i18n.properties
├── model/
│   ├── LeaveRequests.json
│   └── models.js
├── view/
│   ├── App.view.xml
│   ├── Detail.view.xml
│   └── LeaveRequests.view.xml
```

## Running the Application

### Using http-server
```powershell
http-server ./Project -p 8080
```
The app will be available at [http://localhost:8080](http://localhost:8080).

### Using UI5 CLI (optional)
If you want to use UI5 CLI for development:
```powershell
cd Project
ui5 serve --open index.html
```
This will start a local UI5 server and open the app in your browser.

## Internationalization (i18n)
- All user-facing strings are stored in `i18n/i18n.properties`.
- To add new languages, create a new properties file (e.g., `i18n_fr.properties`) and provide translations.

## Documentation

### Main Components
- **Component.js**: Application bootstrap and router setup
- **controller/**: Contains controllers for each view
- **model/**: Contains data models and sample data
- **view/**: XML views for UI layout
- **css/**: Custom styles

### Key Functionality
- **Detail.controller.js**: Handles approval/rejection of leave requests, navigation, and status formatting
- **LeaveRequests.controller.js**: Manages the list of leave requests
- **App.controller.js**: Main application logic

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Create a Pull Request

## License
This project is licensed under the MIT License.

---

## Additional Notes
- For SAPUI5 documentation, visit [SAPUI5 SDK](https://sapui5.hana.ondemand.com/)
- For UI5 CLI and tooling, see [UI5 Tooling](https://sap.github.io/ui5-tooling/)
- For issues or feature requests, please use the GitHub Issues page.
