----------------------------------

filename: techskills-introtowebpack-1-a_big_word_transpilation

title: A Big Word, Transpilation

subtitle: Intro to webpack

----------------------------------

Outline:

  - [_Question_:]
  - Ok, things are starting to get weird with words like transpilation; sounds complicated.
    - Actually, transpilation is just a fancy word for translation.  In this case we are translating between two programming languages.
    - Older browsers, e.g., IE 11 do not support ES2015 (aka ES6); they support older ES5.
    - ES2015 (superset of ES5) adds some nice syntax to JavaScript.
    - Goal is to write source in ES2015 but have dist be in ES5.





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
