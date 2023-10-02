# Employee Table
A Full Stack application with React front-end and MySQL backend. 

Displays employee info and allows creation / edition / deletion of employees.

## Environment
MySQL

Node

npm


## Installation
1. Clone git repository:

    `git clone https://github.com/HaifengSun7/employee-table.git`

2. Install dependencies:

    `cd ./client`

    `npm install`

    `cd ../api`

    `npm install`

3. Run init_db.sql to initialize a database:

    `mysql -u <username> -p < init_db.sql`

## Run
1. Run start.sh to start BOTH frontend and backend:

    `./start.sh`

2. Go to "http://localhost:3000" and enjoy the app!


## API reference

| Path | Method | Sample Input | Sample Output | Description |
|---|---|---|---|---|
| /employees  | GET |   | {"employees": [{"id": 1, "first_name": "L1", "last_name": "B", "salary": 40750}, ...]}  | Get a list of all employees  |
| /employees  | POST  | {"firstName": "Some", "lastName": "Thing", "salary": 1}  | {"msg": "Employee updated successfully"}  | Add a new employee   |
| /employees/:id  | PUT  | {"firstName": "Some", "lastName": "Thing", "salary": 2}  | {"msg": "Employee updated successfully"}  | Edit an employee |
| /employees/:id  | DELETE  |   | {"msg": "Employee updated successfully"}  | Delete an employee |

## Database reference
database: employee_table

table: employee

| id  | first_name  | last_name  | salary  |
|---|---|---|---|
| int | varchar | varchar | int|
| auto increment| not null  | not null  | not null  |
| primary key |   |   |   |
| 1  | L1  | B  | 40700  |

Note: ID is unique and auto-incremented.

## Demo

![Login](./resources/demo%20(3).png)
![Basic](./resources/demo%20(1).png)
![Edit](./resources/demo%20(2).png)
