----------------------------------

filename: techskills-introtowebpack-5-development_builds

title: Development Builds

subtitle: Intro to webpack

----------------------------------

Outline:

  - [_Question_:]
  - The build process seems fairly tedious and slow, build and then opening in a browser. I have heard about live reloading?
    - Yes, let us explore it.
  - Development
    - Building off the previous example.
    - [_Cue_:]
      - Source File
      - Editor
        - development/webpack.config.js
    - [_Cue_:]
      - Execute
        - Working directory
          - development
        - Command
          npm install webpack-dev-server --save-dev
    - [_Cue_:]
      - Source File
      - Editor
        - development/package.json
    - [_Cue_:]
      - Execute
        - Working directory
          - development
        - Command
          - npm run start
    - [_Cue_:]
      - Test
        - URL
          - production/dist/index.html
  - Analyze
    - Building off the previous example.
    - [_Cue_:]
      - Execute
        - Working directory
          - analyze
        - Command
          - npm install webpack-bundle-analyzer --save-dev
    - [_Cue_:]
      - Source File
      - Editor
        analyze/webpack-config.js
    - [_Cue_:]
      - Execute
        - Working directory
          - analyze
        - Command
          - npm run build
  - Hash
    - Extra topic
    - One problem is that you want to cache the application (large) but want to bust the cache if it changes.
    - Building off the previous example.
    - [_Cue_:]
      - Source File
      - Editor
        - hash/webpack.config.js
    - [_Cue_:]
      - Execute
        - Working directory
          - hash
        - Command
          - npm run build
    - [_Cue_:]
      - Execute
        - Working directory
          - hash/dist
        - Command
          - ls
  - Polyfill
    - Extra topic
    - While Babel transpiles the ES2015 to ES5, there are some ES2015 features, e.g., Promises, that cannot be transpiled
    - [_Cue_:]
      - Execute
        - Working directory
          - polyfill
        - Command
          - npm install babel-polyfill --save
    - [_Cue_:]
      - Source File
      - Editor
        - polyfill/src/index.jsx
    - [_Cue_:]
      - Execute
        - Working directory
          - polyfill
        - Command
          - npm run build    
