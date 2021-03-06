# TutorialsApp
This app allows visitors to search for programming languages tutorials, also adding tutorials links they think it usful by having an acoount on the site.

# User journey :
  - As a user I want to create account.
  - As a user I want to login to my account.
  - As a user I want to logout from my account.
  - As a user I want to add tutorial link to a specific language.
  - As a guest/user I want to search for tutorials for specific language.
 
 
# Website Link:[Tutorials](https://languagetutorialsapp.herokuapp.com/)


# Files Structure:
  - public 
    - style.css 
    - img
  - src 
    - server.js
    - app.js
    - controllers
      - home.js
      - search.js
      - errors.js
      - signup.js
      - login.js
      - add.js
    - views
      - layouts
        - main.hbs
      - partials
        - header.hbs
        - footer.hbs
      - home.hbs
      - signup.hbs
      - login.hbs
      - errors.hbs
      - profile.hbs
      - search.hbs
    - database
      - db_build.sql
      - db_build.js
      - db_connection.s
     - queries
        - getData.js
        - postData.js
        - user.js
    - tests
      - test.js
  - .gitignore
  - package.json
  
  # Website Design 
  ![](https://scontent.fjrs2-1.fna.fbcdn.net/v/t1.15752-9/48424794_131512214408673_4414917314441379840_n.jpg?_nc_cat=102&_nc_ht=scontent.fjrs2-1.fna&oh=58b9c0f01f10738e7d5f38b445915c61&oe=5CD7C356)
  # Database Schema
![screenshot from 2018-12-19 10-38-15](https://user-images.githubusercontent.com/37650536/50208618-3fcd1400-0337-11e9-807a-3338c6a0b483.png)
 ### How to run our site on your machine?

1- Clone this repo (https://github.com/FACK1/fid-sh-had-week8)

2- Open your command line.

3- Put in terminal : **npm install**.
 
4- Then create database in terminal `CREATE DATABASE testapp ;` .

5- Then  create user `CREATE USER had with password 'none';` .

6- Then  put command `GRANT ALL PRIVILEGES ON DATABASE testapp to had;` will grant our had  with all priviliges and rights to use and access the database.
 
7- Go the root directory and create a file **"config.env"**, and put in it `DATABASE_URL=postgres://had:none@localhost:5432/testapp` and `SECRET=skjdahshadhaldakhdalkdad`.

8- Then put in terminal : **node src/database/db_build.js** to build the database.

9- Then put in terminal : **npm run dev** to run the server.

10- Open your browser and put in terminal: **localhost:3001**.



### Team Member:
- [Fidaa alhersh](https://github.com/fdo2)
- [Hadeel Salamin](https://github.com/Hadeel-Salamin)
- [Shaima' Azmi](https://github.com/shaima96)

