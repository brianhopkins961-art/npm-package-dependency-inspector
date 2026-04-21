# NPM Package Dependency Inspector

This project is a lightweight web application that allows users to search for any npm package and view the following metadata:

    -Current version
    -License type
    -Weekly download count
    -Number of dependencies
    -Unpacked size
    -Date of last publish

# Docker

To set this up using docker:

1. Clone the repo using 'git clone https://github.com/brianhopkins961-art/npm-package-dependency-inspector.git' 
2. Run 'cd npm-package-dependency-inspector'
3. Run 'docker-compose up'
4. Open http://localhost:3000/ in browser

# Key Design Choices

    -React was chosen as the frontend because it is flexable and easy to use
    -Vite was used because it uses Hot Module Replacement and is fast
    -API calls are isolated into a dedicated hook/module in order to separate concerns of ui and logic
    
