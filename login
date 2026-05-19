theia@theia-jannekiiski9:/home/project$ curl -i -X POST http://localhost:5000/customer/login \
-H "Content-Type: application/json" \
-d '{"username":"testuser","password":"testpass"}'
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 198
ETag: W/"c6-w6FqrV+5OJWmN2Sqbl9Eqc+pCw8"
Set-Cookie: connect.sid=s%3A7XO3TeoXoJ-Z1xh2avpKE5jQfGeMt6ze.riAV4zDhqOlzn1I3izK2GQNaTK2qQGpP7Qn2k%2FSeEWE; Path=/; HttpOnly
Date: Tue, 19 May 2026 11:46:21 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"message":"Login successful","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyIiwiaWF0IjoxNzc5MTkxMTgxLCJleHAiOjE3NzkxOTQ3ODF9.kcSIdchkDgfWj2oweAu
