
How to run:
- View index.html on your browser.

Language: HTML, CSS, Javascript.
    
Work flow: 
- When user input keyword, handleAutoCompleteSearch() will be called.
- On handleAutoCompleteSearch():
  1. Using foreach data array to get result-data, result-data is a list item of array that has first character like keyword.
  2. Check result-data has lenght.
  3. Render Result (set first character is bold).
  4. Declare Listen Result item click event.
  5. If User click on Result item -> get this result set to input value.

  Need to improve:
  - Handle KeyUp, KeyDown.
  - Filter by all of character in word (not only first character).
  - Using HTTP Request for loading file.

  Author: Dung Nguyen.
  Created Date: 15/12/2018.