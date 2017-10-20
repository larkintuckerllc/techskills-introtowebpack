----------------------------------

filename: techskills-introtowebpack-6-leaving_with_style

title: Leaving with Style

subtitle: Intro to webpack

----------------------------------

Outline:

  - [_Question_:]
  - It seems that webpack is limited to JavaScript?
    - Yes and no. While webpack itself only works with JavaScript, third-party loaders wrap other resources with JavaScript to be used by webpack.
    - For example CSS stylesheets can be used with webpack.
  - CSS
    - Building off the previous example.
    - [_Cue_:]
      - Execute
        - Working directory
          - css
        - Command
          npm install css-loader --save-dev
          npm install style-loader --save-dev
    - [_Cue_:]
      - Source File
      - Editor
        - css/webpack.config.js
    - [_Cue_:]
      - Source File
      - Editor
        - css/src/index.css
        - css/src/index.js
    - [_Cue_:]
      - Execute
        - Working directory
          - css
        - Command
          npm run start
          npm run build
    - [_Cue_:]
      - Execute
        - Working directory
          - css/dist
        - Command
          ls
  - Image
    - Building off the previous example.
    - [_Cue_:]
      - Execute
        - Working directory
          - image
        - Command
          npm install file-loader --save-dev
          npm install url-loader --save-dev
    - [_Cue_:]
      - Source File
      - Editor
        - image/webpack.config.js
    - [_Cue_:]
      - Source File
      - Editor
        - image/src/Secondary.js
    - [_Cue_:]
      - Execute
        - Working directory
          - image
        - Command
          npm run start
          npm run build
    - [_Cue_:]
      - Execute
        - Working directory
          - image/dist
        - Command
          ls
  - Autoprefixer
    - Building off the previous example.
    - [_Cue_:]
      - Execute
        - Working directory
          - autoprefixer
        - Command
          npm install postcss-loader --save-dev
          npm install autoprefixer --save-dev
    - [_Cue_:]
      - Source File
      - Editor
        - autoprefixer/webpack.config.js
        - autoprefixer/postcss.config.js
        - autoprefixer/src/Secondary.css
        - autoprefixer/src/Secondary.js
    - [_Cue_:]
      - Execute
        - Working directory
          - autoprefixer
        - Command
          npm run start
  - Wrap Up
    - More advanced topics; not as common topics. But have foundation.
    - css modules
    - bundle splitting
