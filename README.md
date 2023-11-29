# saphapp
This demo app is a simplified example to illustrate the concept of integrating blockchain-related actions(xCall) into a CI/CD workflow. Specifically, it demonstrates a portion of the CI/CD process related to deployment. It is intentionally basic and doesn't cover all aspects of a comprehensive CI/CD pipeline. It serves as a starting point to understand how blockchain-related actions can be integrated into a CI/CD process using an interface like xCall.

xCall is a standardized interface designed to simplify cross-chain development by abstracting away the varying technical architectures of underlying protocols. xCall simplifies the process of calling contracts to destination chains from source chains by using a single standard across all protocols. This is to understand xCall's function better as it was written in js as against java in this demo(xcall.js).

## Set Up the Project
npm install express body-parser in the root directory

###Run the Server
node server.js

After that, to simulate a CI/CD action; run curl -X POST -H "Content-Type: application/json" -d '{"project": "MyProject", "action": "deploy", "blockchain": "Ethereum"}' http://localhost:3000/ci-cd
if you're running it in bash and
Invoke-RestMethod -Uri http://localhost:3000/ci-cd -Method Post -Headers @{"Content-Type"="application/json"} -Body '{"project": "MyProject", "action": "deploy", "blockchain": "Ethereum"}'
if you're using powershell
