# lodash-prs

This Node.js application fetches the total count of pull requests from the lodash library using GitHub's API.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need Node.js installed on your system to run this application. You can download and install Node.js from [Node.js official website](https://nodejs.org/).

### Installing

First, clone the project to your local machine:

```git clone https://github.com/bryantt23/Lodash-PRs```

Then, navigate to the project directory:

```cd lodash-prs```

Install the required dependencies:

```npm install```

### Running the Application

To start the application, run:

```npm start```

This will start the server on the default port (usually `http://localhost:3000`).

### Testing the Application

To test the application:

1. Open a separate terminal and ensure the server is running using `npm start`.
2. Use the provided `pr-count.rest` file to test the API endpoint. This requires the Visual Studio Code REST Client extension.
3. In Visual Studio Code, open the `pr-count.rest` file and click on the "Send Request" link above the GET request.

This should display the total count of pull requests in the lodash library.
