<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">Widgets</h3>

  <p align="center">
    A React application with two widgets.
    <br />
    <a href="https://github.com/gangadhar5613"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="http://intellect-task.vercel.app/">View Demo</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#live-project">Live Project</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>
<!-- ABOUT THE PROJECT -->


## About The Project

This is a landing page for OpenAuto with User response capturing.
Here's are the features:
* User can submit their response.  
* This project is included a single API route that will handle the POST request of the form.
* Through mongoose, we have connected our app to MongoDB Cluster.
* Upon successful submisson, the response would be stored in MongoDB cloud.
* Proper form validatios.  
* User cannot use same email for multiple response submission, if so an error will be shown.    
* Upon successful submission of the form, user can able to see the success message.  
* User response would be stored in MongoDB Database on cloud. 


A list of commonly used resources that I find helpful are listed in the acknowledgments.

### Built With

frameworks, tech stack used to build this project,are:
* [Next.js](https://nextjs.org/)
* [MongoDB](https://www.mongodb.com/resources)
* [Express](https://expressjs.com/)
* [Node](https://nodejs.org/en/)
* [React](https://reactjs.org/)
* [TailwindCSS](https://tailwindcss.com/)




<!-- GETTING STARTED -->
## Live project

* [Live Project](https://vocally-task.vercel.app/)



### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation


1. Clone the repo
   ```sh
   git clone https://github.com/gangadhar5613/vocally_task
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter the 'npm run dev' to run the project on developent.
   ```JS
   npm run dev
   ```

<!-- USAGE EXAMPLES -->
## Usage

To get a better idea about this project, follow my instructions (How to use?)

1. Enter the 'npm run dev' to run the project, Run the Next.s project on the default link http://localhost:3000/ or click on the Live Link: [https://vocally-task.vercel.app/](https://vocally-task.vercel.app/)
2. If you are running the application locally, follow `.env.sample` file to create environmental variables. ( Connecting to MongoDB )
2. You may see the home page with the form.
3. You need to enter proper name.(Atleast 3charatcers, otherwise it will give a error message)
4. You need to enter a proper email adress as it will pass through certain validation and email id should be unique.(If you fail to enter proper email, it will show a error message)
3. You can test the form by filling the required details mentioned over there.
    You can submit the dummy credentials to test.
   
4. Once you enter the required details without any errors, you may click on submit button.
5. Upon submission, you can see a message called capturing in the place of submit.
6. Upon successful submitting if you have entered a unique email, you can able to see succes message saying that **Your response has been successfully captured** . 
7. If you submit an email that you have already used, it upon submission, it will show a error message   **Response has been captured previously on this email id**.  


## Backend API Route & Database:
Project's backend code is available in the [Api_backend_Route](https://github.com/gangadhar5613/vocally_task/tree/main/pages/api) folder in the same repo.
- This route will handle the POST request and initially it will check for the duplicate user through email id and gives the response incase of duplicate user OR create a new user and send the response to the front-end.

#### Database
- In this project, I have used NoSQL Database: MongoDB.
- I have connected the MongoDB clusted to our app using mongoose.
- Inside of this [folder](https://github.com/gangadhar5613/vocally_task/tree/main/models) you can see the Schema Model of the User.


# Endpoints

### : `/api/user` , Method: 'POST'

Example request body:
```JSON
{
  
    "email": "gangadhar.5613@gmail.com",
    "fullName": "N Gangadhar Reddy"
}
```


<!-- CONTACT -->
## Contact

Your Name - [@NGReddy5613](https://twitter.com/NGReddy5613) - gangadhar.5613@gmail.com

Project Link: [https://github.com/gangadhar5613/vocally_task](https://github.com/gangadhar5613/vocally_task)

Live Link: [https://vocally-task.vercel.app/](https://vocally-task.vercel.app/)

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Vercel](https://vercel.com)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [MongoDB](https://www.mongodb.com/resources)
* [Express](https://expressjs.com/)
* [Node](https://nodejs.org/en/)
* [React.js](https://reactjs.org/)
* [Next.js](https://nextjs.org/)
