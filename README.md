# Todo-App
The Task Manager application is a full-featured ReactJS-based project designed to help users manage their daily tasks efficiently. The application provides functionalities like creating tasks, marking them as completed or important, filtering tasks, and viewing statistics through a pie chart. Additionally, it features a dark/light mode toggle and an interactive right sidebar for extra options like reminders, due dates, and repetitions.

*Features of Task Management*
  1. Add new tasks with a title, description, priority, due date, and an optional important mark.
  2. View tasks in both block and list views.
  3. Mark tasks as completed (with strikethrough styling).
  4. Toggle important tasks using a star icon.
  5. Delete tasks.
  6. Filtering
  7. Weather API Integration
  8. Filter tasks by "All Tasks," "Today," or "Important" using the sidebar.
  9. Dark/Light Mode:
  10. Toggle between dark and light themes for the entire application.
  11. Right Sidebar:
  12. Access additional features like:
  13. Adding steps.
  14. Setting reminders.
  15. Adding due dates.
  16. Repeating tasks.

*Statistics*
View task completion status via a pie chart.

*Responsive Design*
Ensures optimal display across devices.

*Technologies UsedFrontend*
ReactJS
Material-UI (MUI) for styling and components
Recharts for pie chart visualization
Icons:
MUI Icons for task icons and actions

*Installation and SetupPrerequisitesNode.js installed*
npm installed
*Steps to Set UpClone the repository*
  git clone https://github.com/your-repo/task-manager.gitNavigate to the project directory:
  *cd task-manager*
  Install dependencies:
  *npm install*
  Start the development server:
  npm start
  Open your browser and navigate to:
  http://localhost:3000Project Structure.
  
├── public
├── src
│   ├── components
│   │   ├── TaskBlockView.jsx
│   │   ├── TaskListView.jsx
│   │   ├── NavbarRightSidebar.jsx
│   │   ├── Sidebar.jsx
│   ├── App.js
│   ├── index.js
│   ├── App.css
│   ├── index.css
│   ├── TaskManager.jsx

Component DetailsTaskBlockView.jsx: Displays tasks in a block format with icons for marking completion and importance.
TaskListView.jsx: Lists tasks in a table format, showing details like priority, due date, and action buttons.
NavbarRightSidebar.jsx: A right sidebar for adding steps, reminders, due dates, and repeating tasks.
Sidebar.jsx: A left sidebar for filtering tasks (e.g., "Today," "Important").
TaskManager.jsx: The main container managing the task state, filters, and layout.
WeatherComponent.jsx: Accepts dynamic input from user(i.e location) and displays the weather out there and gives suggestion

*Usage GuideAdding Tasks:*
  Fill in the task title, description, priority, and due date.
  Optionally mark the task as important using the "Important" button.
  Click "Add Task" to save.
  Managing Tasks:
  Mark tasks as completed by checking the checkbox.
  Use the star icon to toggle importance.
  Delete tasks with the "Delete" button.
  Filtering Tasks:
  Use the left sidebar to switch between filters like "Today," "Important," or "All Tasks."
  Dark/Light Mode:
  Toggle the mode using the moon/sun icon in the top navigation bar.
  Right Sidebar:
  Click the navbar icon to open the right sidebar for advanced features.
  CustomizationAdding More FeaturesTo extend functionality:
  Add new components under src/components/.
  Update the state management in TaskManager.jsx as needed.
  Changing StylesModify the App.css or index.css files for global styling or use inline styling within components.
  Future EnhancementsBackend Integration:
  Add a backend (e.g., Node.js, Express, MongoDB) to persist tasks.
User Authentication:
Allow multiple users with login functionality.

*Notifications*
  Push notifications for reminders and task deadlines.
  TroubleshootingIf the development server doesn't start:
  Ensure all dependencies are installed (npm install).
  Check for any syntax errors in your code.
  
*Styling issues*
Verify the MUI library is installed correctly.
Check if custom CSS is overriding MUI styles unintentionally.

