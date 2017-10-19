----------------------------------

filename: techskills-introtowebpack-1-laying_the_first_lines

title: Laying the First Lines

subtitle: Intro to webpack

----------------------------------

Outline:

  - [_Question_:]
    - I have heard a lot about webpack lately. What is it and what is it used for?
      - What is webpack?
        - "webpack is a module bundler." --webpack
        - webpack is the latest incarnation of web build tools
          - Grunt
          - Gulp
      - You may ask "What needs building with the web? Don't you just create a web page with some CSS and JavaScript?"
        - Yes if you are building a simple application, no if it is complicated; for example.
          - A lot of short JavaScript files are easier to build / troubleshoot than a single long one. But delivering a lot of small files is inefficient. Answer; modules and bundling.
          - JavaScript files can be large; unnecessarily long variable names, etc.  Answer: Minifiation (Uglifiation)
          - You may want to write using a modern version of JavaScript (ES2015), but browsers only support older versions (ES5). Answer: Transpilation
          - It is a pain to think about vendor prefixing CSS properties. Answer: Auto-prefixing
          - And more...
  - Prerequisite:
    - Windows, OSX, or Linux
    - Text Editor
    - Node.js
      - [_Cue_:]
        - Installing
        - URL
          - https://nodejs.org
    - Code available in video notes
  - Hello World
    - [_Cue:_]
      - Create project folder
    - [_Cue_:]
      - Initialize Node Project
      - Windows users; use *Node.js command prompt*
      - Execute
        - Working directory
          - hello-world
        - Command
          - npm int
    - [_Cue_:]
      - Initial *package.json*
      - Editor
        - hello-world/package.json
    - [_Cue_:]
      - Install webpack
      - Execute
        - Working directory
          - hello-world
        - Command
          - npm install webpack --save-dev
    - [_Cue_:]
      - After *package.json*
      - Editor
        - hello-world/package.json
    - [_Question_:]
      - With Node.js, I have seen dependencies and devDependencies. What is the difference.
    - [_Cue_:]
      - After *node_modules*
      - Execute
        - Working directory
          - hello-world
        - Command
          - dir node_modules (or ls)
    - Side note; should you download a repository (like this one), it will not include the node_modules folder (too big to store).  Simply run npm install in folder that has a package.json in it.
    - [_Cue_:]
      - Source File
      - Editor
        - hello-world/src/index.js
    - [_Cue_:]
       - Distribution Folder and HTML
       - Editor
         - hello-world/dist/index.html
    - [_Cue_:]
       - webpack Configuration
       - Editor
         - hello-world/webpack.config.js
    - [_Cue_:]
       - Execute webpack
        - Working directory
          - hello-world
        - Command
          - ./node_modules/.bin/webpack
    - [_Cue_:]
       - Output file
       - Editor
         - hello-world/dist/main.bundle.js
    - [_Cue_:]
      - Test
        - URL
          - hello-world/dist/index.html
