# API Documentation

---

[Back to main page](https://github.com/iamlost82/MM200-Mod2_A1)

---
# USERS:

## Create new user
### METHOD: POST
### ENDPOINT: /api/users/new
### BODY(json):
{"name":"Mr.Fluffy","email":"fluffy@uia.no","password":"12345678"}
### RESPONSE SUCCESS(201)(json):
{"name":"Mr.Fluffy","email":"fluffy@uia.no","password":"12345678","id":"1"}
### RESPONSE ERROR(400)(json):
{"msg": "Storing user failed, check API documentation"}
or
{"msg": "Duplicate email found"}

---

## Authorize user
### METHOD: GET
### ENDPOINT: /api/users/auth
### BODY(json):
{"email":"fluffy@uia.no","password":"12345678"}
### RESPONSE SUCCESS(200)(json): 
{"id":"1","name":"Mr.Fluffy","email":"fluffy@uia.no"}
### RESPONSE ERROR(400)(json):
{"msg": "Authentication failed"}

---

#JOKES:

## Return personalized joke
### METHOD: POST
### ENDPOINT: /api/joke
### BODY(json):
{"name":"Mr.Fluffy"}
### RESPONSE SUCCESS(200)(json):
```"<p>Mr. Fluffy: CAPS LOCK – Preventing Login Since 1980.</p>"```
### RESPONSE ERROR(400)(json):
```"<p>Sorry, things didn't work</p>"```
---