# server-deployment-practice

Demonstration of testing and continuous integrations

This was done in class, but I redid it to retain actions and concepts. We did not create a flowchart in class, but I tried my best to create one of my own pictured below. The process of creating tests is not as daunting as I anticipated and was easy to follow. App.js is where paths are created in this instance, making it a necessary import for other files to access during the request process. The test is linked to the request in order to make sure it is reaching the requirements and will in turn provide a status of 200 if successfully completed. Index.js seems to be more of a landing spot for the PORT so that the server is able to know where to listen to duiring deployment. 

The heroku integration for deployment was also seamless thanks to the connection to GitHub, and the testing in thunderclient through the heroku link makes it easy to see if you are ready to write more code beyond the inital deployment. The viewlog on Heroku also allows you to see where you hit a good or bad status and can help with the troubleshooting process.

![LAB01](https://user-images.githubusercontent.com/90294860/159385523-31f10182-849b-47d8-b282-3f0d35e17966.png)

