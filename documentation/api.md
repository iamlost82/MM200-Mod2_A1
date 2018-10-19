# API Documentation

---

[Back to main page](https://github.com/iamlost82/MM200-Mod2_A1)

---
# USERS:

## Create new user
### METHOD: POST
### ENDPOINT: /api/user
### BODY(json):
```{"name":"Mr.Fluffy","email":"fluffy@uia.no","password":"12345678"}```
### RESPONSE SUCCESS(201)(json):
```{"name":"Mr.Fluffy","email":"fluffy@uia.no","password":"12345678","id":"1"}```
### RESPONSE ERROR(400)(json):
```{"msg": "Storing user failed, check API documentation"}```
or
```{"msg": "Duplicate email found"}```

---

## Authorize user
### METHOD: GET
### ENDPOINT: /api/user/auth
### BODY(json):
```{"email":"fluffy@uia.no","password":"12345678"}```
### RESPONSE SUCCESS(200)(json): 
```{"id":"1","name":"Mr.Fluffy","email":"fluffy@uia.no"}```
### RESPONSE ERROR(400)(json):
```{"msg": "Authentication failed"}```

---

# JOKE:

## Return random joke template
### METHOD: GET
### ENDPOINT: /api/joke
### RESPONSE SUCCESS(200)(json):
```"<p>INPNAME: CAPS LOCK – Preventing Login Since 1980.</p>"```

---

## Create new joke
### METHOD: POST
### ENDPOINT: /api/joke
### BODY(json):
```{"body":"<p>Testjoke</p>"}```
### RESPONSE SUCCESS(200)(json):
```{"msg": "New joke created"}```

---
## Return list of jokes
### METHOD: GET
### ENDPOINT: /api/jokes
### RESPONSE SUCCESS(200)(json):
```[
    {
        body:"<p>Mother: Anton, do you think I'm a bad mother?</p><p>You: My name is INPNAME!!</p>"
    },
    {
        body:"<p>Barista: How do you take your coffee?</p><p>INPNAME: Very, very seriously.</p>"
    }
    ]
```