# Instruction to start
- npm install
- npm start

# Done
- All 3 page UI template done.
- Login page, validation(only valid user in the database are able to login).
- Register page, ensure name and passworld field are fill.
- Result page, displayed all record in database.
- MD5 hash done.

# Incomplete
- Register page, no validtion check(exiting user).
- Result page, delete button not working.

# Dockerize
# Build docker images
- docker build --tag <name:tag> .

# Run docker images on container
- docker run --rm -ti -p 8000:3000 <images>

