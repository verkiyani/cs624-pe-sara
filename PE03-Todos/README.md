
# Input

This to-do app takes user input through a `TextInput` field under the "todos" heading. The user can type in any task they want to remember.

In Problem 2, a tab bar is added at the bottom with three options: All, Active, and Complete. These tabs change the type of list being shown, but the way the user adds todos stays the same.

# Process

When I click on the Submit button, the app checks if the input is not empty. Then it creates a new todo object with a title, an index, and a flag called `complete` which is set to false. This new todo is added to the existing `todos` array in the state.

The todos are shown using a `TodoList` component. Each item has two buttons: Done (which toggles `complete`) and Delete (which removes it). In Problem 2, the app uses a `type` in the state to filter the list. So when a tab is clicked, it sets the type and only shows the right todos.

# Output

The UI updates right away when I add, delete, or mark a todo as done. Also, I can switch between tabs to filter the list. 

