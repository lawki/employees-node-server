# Employees Node Server
This application is written in Javascript using ExpressJS on top of NodeJS. The server runs on port 3000 and allows fetching data on its API
URLS which are localted at /api
## Installation
clone this repository, then cd into it. Thereafter npm install, then node index.js should work.

## Getting Employees
In the terminal, do this.
curl http://localhost:3000/api/employees
It should return the employees stored at api/employee_data.js

## Getting an Employee info
In terminal,
curl http://localhost:3000/api/employee/EMP_ID
should return information corresponding to EMP_ID where by default EMP_ID range from 1 upto 7. It can increase if 
more employees are added.

## To Do's 
Add API to delete and add data.
