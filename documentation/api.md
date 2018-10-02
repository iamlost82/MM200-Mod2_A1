# API Documentation

---

[Back to main page](https://github.com/iamlost82/MM200-Mod2_A1)

---

## Create new user
### METHOD: POST
### ENDPOINT: /api/user
### BODY(json):
{"name":"Mr.Fluffy","email":"fluffy@uia.no","password":"12345678"}
### RESPONSE SUCCESS(201)(json):
{"name":"Mr.Fluffy","email":"fluffy@uia.no","password":"12345678","id":"1"}
### RESPONSE ERROR(400)(json):
{"msg":"Error in inputdata. Read API documentation"}
or
{"msg":"Duplicate email found."}

---

## Login user
### METHOD: GET
### ENDPOINT: /api/user/login
### BODY(json):
{"email":"fluffy@uia.no","password":"12345678"}
### RESPONSE SUCCESS(200)(json): 
{"userid":"1","auth":"HQSz15P379W8ieedUSFY"}
### RESPONSE ERROR(401)(json):
{"msg":"Unauthorized login attempt"}
### RESPONSE ERROR(400)(json):
{"msg":"Error in inputdata. Read API documentation"}

---