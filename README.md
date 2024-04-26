<p align="center">
<img src="src/assets/logo hanger.png" alt="Logo" width="316" height="329">
</p>

## Description
This is the front for the Stage Oracle Project, 
Without the back-end, you will only be able to see the login page, register and the home page. \
The back-end is a two restful API's, what you can get from the following link:
https://github.com/Emilsivertsson/Stage-Oracle

## What was your motivation?
This is a part of my degree project for the course "Java integration" at Campus Mölndal. \
The project as whole is for Opera/theaters to manage their productions and performers. \
I wanted to create a front-end that is easy to use and that looks good, using React.

### Installation
To install the project, you need to have npm and node installed. \
Then you can clone the project and run the following commands in the terminal to install the dependencies. \
please note that you must be in the root folder of the project.

```sh
npm install
npm run dev
```

The app will be running on localhost:3000

### OR 
You can visit the backend project linked above and use the Docker-compose file to run the whole project. \

## Usage
Open you favorite browser and go to localhost:3000. \

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

```md
![alt text](assets/images/screenshot.png)
```
## Credits
My friend Palebro for reading through my code and giving me feedback.
https://github.com/palerbro

## Tutorials
https://www.youtube.com/watch?v=00lxm_doFYw&t=1104s
https://www.youtube.com/watch?v=q94v5AhgrW4&t=728s
https://www.youtube.com/watch?v=X8eAbu1RWZ4&t=753s
https://www.youtube.com/watch?v=T5dIjye4b-I&t=1388s
https://www.youtube.com/watch?v=2NPIYnY3ilo&t=101s
https://www.youtube.com/watch?v=KuM6OtuaYRs&t=6892s
https://www.youtube.com/watch?v=eFPvXGZETiY
https://www.youtube.com/watch?v=oTIJunBa6MA
https://www.youtube.com/watch?v=brcHK3P6ChQ&t=1830s
https://www.youtube.com/watch?v=6BkcHAEWeTU

## License
This project uses the following license: MIT License.

## Features
For Performers:
- Register
- Login
- Update profile
- Delete profile

For Production Users:
- Register
- Login
- Perform CRUD operations on productions and its underlying data
- Import Performers from the Performer API into Productions.
- Send emails to Performers.

For Admin:  
- CRUD operations on all Users and Performers.

## Tests
