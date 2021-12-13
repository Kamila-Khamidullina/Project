# Web application

It is a simple web application. The tech stack:
* back-end on Flask (Python)
* front-end on Express (JavaScript)
* database on MongoDB for data
* database Redis for cache
* worker for quering jobs on RQ (Python)
* client on React+Redux (JavaScript)

## Running

To run this app on your machine just download the files and run the following commands in terminal

    docker-compose up
    docker-compose exec backend python -m tools.add_test_content

After that the demo page should be available at [http://localhost:40002/card/helloworld](http://localhost:40002/card/helloworld).

![](https://imgur.com/AImQ9zm)
