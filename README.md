# blog-backend-
This application is a simple express server application that serves blog data. This data is stored in a database. The database used here is Mongodb Atlas. The server can be started by running the command 'npm run start'.


## Get all blogs 
The api endpoint for this particular operation is : http://localhost:3000/blogs.get all blogs.

## get blogs by Id
The user will have to provide an Id as an route parameter to search for a particular blog. The api endpoint for this particular operation is: http://localhost:3000/blogs/2rvqpdbpka3n3fhg.

## delete by Id
The url for the same is: http://localhost:3000/blogs/:id. '/blogs/:id' is the end api endpoint for this application. This is to delete the blogs.
