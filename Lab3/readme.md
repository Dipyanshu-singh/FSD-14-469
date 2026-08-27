# http module

http=hypertext transfer protocol
html=hypertext markup language
css=cascade style sheet
npm=node package management


200 OK
201 Created
400 Bad Request
401 Unauthorised
403 Forbidden
404 Not found
500 Internal server Error



#API

- any api can be of 4 types
1. get   /read
2. post     /create
3. put/patch       /update
4. delete       /delete

api cna be response by server with any response code of data,
api generally start with -api/version/
e.g..   /api/v1/products
        /api/v3/products/385
        /api/v2/users
        /api/v1/users/mohan
        /api/v2/product?s=mobile

-By default browser can check only get request, to check other 3 like post,put,patch,delete./.... we require frontend or third party tester like postman,thunderfile, echoAPI