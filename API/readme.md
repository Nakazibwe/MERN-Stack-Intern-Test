# API MERN-Stack-Intern-Test App

This an API for the MERN-Stack-Intern-Test. MERN-Stack-Intern-Test is a full-stack test from RealAssist.AI.

#### END POINTS

* post(/api/users/createuser)
* post(/api/users/auth/login)
* get(/api/users/user)
* post(/api/properties/createproperty)
* get(/api/properties)
* patch(/api/properties/:propertyid)


---

##### Navigate to API directory

```
cd API

```

This will enable you navigate to the directory, where the API resides. This will apply to if you are outside the API directory and are in the root directory of the repository.

---

##### Setup environment variables

```
create .env  file in the root directory, add these environment variables.
DATABASE_URI
PORT
JWT_SECRET
```

This will allow you access to variables that connect to various resources that will be used in the project like the database, jwt-secret and the port on which the api will run.

---

##### Install dependencies

```
npm install
```

This script will install all the dependecies available in the package.json.

---

##### Run the app

```npm run dev```

This script will run the app in the development environment using nodemon, to constantly monitor any changes made to different files.

---

## REST API

### Create user

##### Request

```POST
POST /api/users/createuser
```

##### Response

```
HTTP/1.1 201 Created
Date: Tue, 27 Mar 2023 12:36:30 GMT
Status: 201 Created
Connection: close
Content-Type: application/x-www-form-urlencoded
```


### Login user

##### Request

```POST
POST  /api/users/auth/login
```

##### Response

```
HTTP/1.1 200 OK
Date: Tue, 27 Mar 2023 12:36:30 GMT
Status: 200 OK
Connection: close
Content-Type: application/x-www-form-urlencoded
```

### Get user 

##### Request

```GET
GET /api/users/user
```

##### Response

```
HTTP/1.1 200 OK
Date: Tue, 27 Mar 2023 12:36:30 GMT
Status: 200 OK
Connection: close
Content-Type: application/x-www-form-urlencoded
```

### Create property

##### Request

```POST
POST /api/properties/createproperty
```

##### Response

```
HTTP/1.1 201 Created
Date: Tue, 27 Mar 2023 12:36:30 GMT
Status: 201 Created
Connection: close
Content-Type: application/x-www-form-urlencoded
```

### Get properties

##### Request

```GET
GET /api/properties
```

##### Response

```
HTTP/1.1 200 OK
Date: Tue, 27 Mar 2023 12:36:30 GMT
Status: 200 OK
Connection: close
Content-Type: application/x-www-form-urlencoded
```

### Update property

##### Request

```PATCH
PATCH /api/properties/:propertyid
```

##### Response

```
HTTP/1.1 200 OK
Date: Tue, 27 Mar 2023 12:36:30 GMT
Status: 200 OK
Connection: close
Content-Type: application/x-www-form-urlencoded
```


