# Text-to-Image Test Automation

This repository contains an automated test suite for a text-to-image generation application using Playwright, Cucumber, and TypeScript.

## Table of Contents
- [Installation](#installation)
- [Configuration](#configuration)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [License](#license)

## Installation

To set up the project, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/DishaKhilari/LeonardoAi.git
   cd text-to-image-test
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

## Configuration

1. **Environment Variables:**

   Create a `.env` file in the root of the project to define your environment variables. For example:
   ```
   BASEURL= https://app.leonardo.ai/
   ```

2. **TypeScript Configuration:**

   Ensure your `tsconfig.json` is properly set up to include the source files:
   ```json
   {
     "compilerOptions": {
       "target": "es6",
       "module": "commonjs",
       "outDir": "./dist",
       "rootDir": "./src",
       "strict": true,
       "esModuleInterop": true,
       "skipLibCheck": true,
       "forceConsistentCasingInFileNames": true
     },
     "include": ["src/**/*"]
   }
   ```

## Running Tests

1. **Run the tests:**

   You can run the tests using the following command:
   ```sh
   npm test
   ```

## Project Structure

Here's a brief overview of the project's structure:

```
text-to-image-test/
├── node_modules/
├── src/
|   ├── helper/
│   │   └── browsers
│   │   └── env
│   │   └── report
│   │   └── types
│   │   └── util
│   │   └── wrapper
│   ├── hooks/
│   │   └── init.ts
│   │   └── hooks.ts
│   │   └── pageFixture.ts
│   ├── K6/
│   │   └── loadtest.js
│   ├── test/
│   │   ├── feature
|   |   |__ steps
│   └── ...
├── .gitignore
├── package.json
├── tsconfig.json
├── cucumber.json
└── README.md
```

### Key Files and Directories

- `src/hooks/`: Contains setup and initialization scripts.
- `src/steps/`: Contains Cucumber step definitions.
- `src/support/`: Contains support files for the Cucumber world.
- `.gitignore`: Specifies files and directories to be ignored by Git.
- `tsconfig.json`: TypeScript configuration file.
- `cucumber.json`: Cucumber configuration file.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
```

### Adding and Committing the README
1. **Create the file**: Create a new file named `README.md` in the root of your project.
2. **Add the content**: Copy and paste the above content into the `README.md` file.
3. **Add and commit to Git**: Use the following commands to add and commit the `README.md` file to your repository.
   ```sh
   git add README.md
   git commit -m "Add README file"
   ```

This README will provide a comprehensive overview of your project, helping others understand how to set it up, configure it, and run the tests.