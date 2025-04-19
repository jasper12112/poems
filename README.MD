# Simple Poem Application

## Steps to Implement the Simple Poem Application

1. **Set Up the Project**:
   - Create a new directory for the project.
   - Initialize a new Git repository (optional).
   - Set up a basic HTML file and include Tailwind CSS.

2. **Create JSON File**:
   - Create a JSON file to store the poems.
   - Define the structure of the JSON file to include fields such as title, author, and content for each poem.

3. **Add Functionality to Add Poems**:
   - Implement a form in the HTML to allow users to input new poems.
   - Write JavaScript code to handle form submissions and add new poems to the JSON file.

4. **Display Poems on HTML Page**:
   - Use JavaScript to read the JSON file and display the poems on the HTML page.
   - Style the displayed poems using Tailwind CSS to create a grid layout.

5. **Implement Modal for Full Poem View**:
   - Create a modal component in HTML/CSS.
   - Write JavaScript to open the modal when a poem is clicked, displaying the full content of the poem.

## JSON Structure

- The poems are stored in a JSON file with the following structure:
  ```json
  [
    {
      "title": "Poem Title",
      "author": "Author Name",
      "content": "Full poem text goes here."
    }
  ]
  ```
