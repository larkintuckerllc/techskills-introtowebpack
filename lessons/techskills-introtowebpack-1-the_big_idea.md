----------------------------------

filename: techskills-introtowebpack-1-the_big_idea

title: The Big Idea

subtitle: Intro to webpack

----------------------------------

Outline:

  - [_Question_:]
  - I have heard of bundling in context of front-end frameworks, e.g., AngularJS and React.  Do you have to use these frameworks to use bundling?
    - No. Bundling is a complementary feature; in this example we are going to write plain JavaScript (ES5).
  - Bundle
    - Building off the previous example.
    - [_Cue_:]
      - Source File
      - Editor
        - bundle/src/secondary.js
    - [_Cue_:]
      - Source File
      - Editor
        - bundle/src/index.js
    - [_Cue_:]
       - Execute webpack
        - Working directory
          - bundle
        - Command
          - ./node_modules/.bin/webpack
    - [_Cue_:]
       - Output file
       - Editor
         - bundle/dist/main.bundle.js
    - [_Cue_:]
      - Test
        - URL
          - bundle/dist/index.html
  - Observation, hard to troubleshoot JavaScript
  - A couple of observations:
    - This is an example of a module pattern.
    - A required file is only executed once even if required multiple times.
    - Variables declared in a module are limited in scope.
    - The only thing accessible outside of the module is the value assigned to module.exports
    - The module pattern allows you to create very complicated applications by isolating functionality.
  - Source Map
    - Building off the previous example
    - [_Cue_:]
       - webpack Configuration
       - Editor
         - source-map/webpack.config.js
    - Observation, notice that this file is also a module (Node.js).
   - [_Cue_:]
      - Execute webpack
       - Working directory
         - source-map
       - Command
         - ./node_modules/.bin/webpack
   - [_Cue_:]
      - Show output
       - Working directory
         - source-map/dist
       - Command
         - dir (or ls)
   - [_Cue_:]
     - Test
       - URL
         - source-map/dist/index.html
  - Observation: Errors and break points.
  - Minifiation    
    - webpack alone pretty much only does bundling; but coupled with third-party plugins it can do a lot more.
    - Building off the previous example
    - [_Cue_:]
      - Install
      - Execute
        - Working directory
          - minification
        - Command
          - npm install uglifyjs-webpack-plugin --save-dev
    - [_Cue_:]
       - webpack Configuration
       - Editor
         - minification/webpack.config.js
    - [_Cue_:]
       - Execute webpack
        - Working directory
          - minification
        - Command
          - ./node_modules/.bin/webpack
    - [_Cue_:]
       - Output file
       - Editor
         - bundle/dist/main.bundle.js
    - Observation, 604 Bytes vs. 2.7 KB
    - [_Cue_:]
      - Test
        - URL
          - minification/dist/index.html
