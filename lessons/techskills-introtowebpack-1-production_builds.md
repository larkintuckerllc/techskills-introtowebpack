----------------------------------

filename: techskills-introtowebpack-1-production_builds

title: Production Builds

subtitle: Intro to webpack

----------------------------------

Outline:

  - [_Question_:]
  - In the last example, we saw that the bundle file was really big.
    - Yes, there are a couple of things that you can do. We will explore the easy fix in this lesson.
  - Production
    - Building off the previous example.
    - [_Cue_:]
      - Source File
      - Editor
        - production/src/index.jsx
    - [_Cue_:]
      - Source File
      - Editor
        - production/webpack.config.js
    - [_Cue_:]
      - Execute
        - Working directory
          - production
        - Command
          ./node_modules/.bin/webpack --env.NODE_ENV=development
    - [_Cue_:]
      - Test
        - URL
          - production/dist/index.html
    - [_Cue_:]
      - Execute
        - Working directory
          - production
        - Command
          ./node_modules/.bin/webpack -p --env.NODE_ENV=production
    - [_Cue_:]
      - Source File
      - Editor
        - production/package.json
    - [_Cue_:]
      - Execute
        - Working directory
          - production
        - Command
          npm run build
    - [_Cue_:]
      - Test
        - URL
          - production/dist/index.html
  - HTML
     - Normally, the contents of the dist folder are transitory. But we have our index.html in there.  
     - Also, there are cases where we can split the bundle (but our index.html has hard-coded reference to main.bundle.js).
    - Building off the previous example.
    - [_Cue_:]
      - Execute
        - Working directory
          - html
        - Command
          npm install html-webpack-plugin --save-dev
    - [_Cue_:]
      - Execute
        - Working directory
          - html
        - Command
          mkdir public
    - [_Cue_:]
      - Execute
        - Working directory
          - html/dist
        - Command
          mv index.html ../public
    - [_Cue_:]
      - Source File
      - Editor
        - html/public/index.html
    - [_Cue_:]
      - Source File
      - Editor
        - html/webpack.config.js
    - [_Cue_:]
      - Execute
        - Working directory
          - html
        - Command
          npm run build
    - [_Cue_:]
      - Source File
      - Editor
        - dist/index.html
    - [_Cue_:]
      - Test
        - URL
          - production/dist/index.html
  - Clean
    - Problem with not clean
    - Building off the previous example.
    - [_Cue_:]
      - Execute
        - Working directory
          - clean
        - Command
          npm install clean-webpack-plugin --save-dev
    - [_Cue_:]
      - Source File
      - Editor
        - clean/webpack.config.js
    - [_Cue_:]
      - Execute
        - Working directory
          - clean
        - Command
          - npm run build
    - [_Cue_:]
      - Test
        - URL
          - production/dist/index.html
