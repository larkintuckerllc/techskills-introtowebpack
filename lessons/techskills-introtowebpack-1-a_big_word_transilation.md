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
  - Transpile
    - Building off the previous example.
    - [_Cue_:]
      - Install
      - Execute
        - Working directory
          - transpile
        - Command
          npm install babel-core --save-dev
          npm install babel-loader --save-dev
          npm install babel-preset-es2015 --save-dev
    - [_Cue_:]
      - Source File
      - Editor
        - transpile/.babelrc
    - [_Cue_:]
      - Source File
      - Editor
        - transpile/webpack.config.js
    - [_Cue_:]
      - Source File
      - Editor
        - transpile/src/index.js
        - transpile/src/secondary.js
    - [_Cue_:]
       - Execute webpack
        - Working directory
          - bundle
        - Command
          - ./node_modules/.bin/webpack
    - [_Cue_:]
      - Test
        - URL
          - bundle/dist/index.html
  - [_Question_:]
    - I see that we used two examples of ES2015 syntax; what other ones are common?
      - Switching to const is by far the most common change.
      - Using arrow function instead of anonymous functions is also very common.
      - Use of export and import is the next most common.
      - Finally, the use of destructuring is common.
      - [_Cue_:]
        - A more complete list
          - URL
            - bundle/dist/index.html
              https://babeljs.io/learn-es2015/
  - Import
  - [_Cue_:]
    - Source File
    - Editor
      - import/src/index.js
      - import/src/secondary.js
    - [_Cue_:]
       - Execute webpack
        - Working directory
          - transpile
        - Command
          - ./node_modules/.bin/webpack
    - [_Cue_:]
      - Test
        - URL
          - transpile/dist/index.html
  - React
    - As webpack is used heavily with React; thought to include a bit on how transpilation is relevant.
    - While not required, most React developers use a short-hand syntax called JSX that needs to be transpiled.
    - Building off the previous example.
    - [_Cue_:]
      - Install
      - Execute
        - Working directory
          - react
        - Command
          npm install babel-preset-react --save-dev
          npm install react --save
          npm install react-dom --save
    - [_Cue_:]
      - Source File
      - Editor
        - react/.babelrc
    - [_Cue_:]
      - Source File
      - Editor
        - react/webpack.config.js
    - [_Cue_:]
      - Source File
      - Editor
        - react/dist/index.html
    - [_Cue_:]
      - Source File
      - Editor
        - react/src/index.jsx
    - [_Cue_:]
      - Source File
      - Editor
        - react/src/Secondary.jsx
    - [_Question_:]
      - Is JSX just HTML?
        - No, it is a set of special short-hand that convieniently mirrors most of HTML. One difference is that you use className instead of class. We see what it transpiles to in a minute.
    - [_Cue_:]
       - Execute webpack
        - Working directory
          - react
        - Command
          - ./node_modules/.bin/webpack
    - [_Cue_:]
      - Test
        - URL
          - react/dist/index.html
