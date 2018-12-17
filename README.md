# TutorialsApp

Our App:
- Allows user to add good programming languages tutorials.
- Allows user to search about programming languages with included links to thier tutorials.
- Needs login befor adding any tutorial to the website.

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
