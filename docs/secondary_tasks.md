# Secondary tasks

### List pages hints

- In all list pages there should be a button with the text "Add XYZ". When pressed it navigates to the /create part of the view-page of XYZ (users, groups, projects)
- All rows in the list are clickable and navigate to the detais page of that item

### List pages secondary Tasks

- Add pagination with ten items per page.
- Make the list rows to change background colour on hover.

### Detail pages hints

As a typical CRUD application it makes heave usage of forms. All of the forms should have two buttons. Save & Cancel

- Save
  - On successful save the path should change to the details page of the newly created item
- Cancel
  - When pressed it should navigate back to the list page without any changes to the database

### Detail pages secondary Tasks

- On save/update operation error a general message should be displayed to the user above the form as a simple text
- When there are some values in the form fields and the user presses cancel, an alert should notify the user if they are sure for that action with "ok" and "cancel" buttons.
  - Pressing ok, returns them to the list view
  - Pressing cancel stays in the same page without any firther changes
- When there are some values in the form fields and the user navigates somewhere else, an alert should notify the user if they are sure for that action with "ok" and "cancel" buttons.
  - Pressing ok, returns them to the list view
  - Pressing cancel stays in the same page without any firther changes

---

### Secondary Tasks

- If wrong credentials are provided the API will return an error message. Can you display these messages in the login page to help the user to authenticate?
- Provide an extra option that can allow users to register from the login screen.

---

## Home view

- For any of the three widgets, when a users hovers over an item the item should be highlighted
- When a users cliks any items should navigate to the edit page of that item.

## Groups

---

- create a button with the text "add" that navigates to the http://localhost:4200/groups/create
- provide the list page and for every list item the following columns
  - Group Name
  - Number of users that belong to this group
- provide the details page for reading the group details
- provide the details page for creating a new group
- In the details page there should be two columns
  - One column will host the form fields with the following inputs
    - Name (input, required)
  - The other column should have a list of all of the available users with the following columns
    - a checkbox column.
      - checked means these users are part of the group
      - unchecked means these users are not part of the group
    - the name of the user
- saving the form the checked users should be part of the group

## Projects

---

- create a button with the text "add" that navigates to the http://localhost:4200/projects/create
- provide the list page and for every list item the following columns
  - Project Name
  - Amount of users as a number
  - Amount of groups as a number
- provide the details page for reading the project details
- provide the details page for creating a new project
- In the details page there should be three columns
  - One column will host the form fields for the project with the following inputs
    - Name (input, required)
  - The second column should have a list of all of the available users with the following columns
    - a checkbox column.
      - checked means these users are part of the project
      - unchecked means these users are not part of the project
    - the name of the user
  - The third column should have a list of all of the available groups with the following columns
    - a checkbox column.
      - checked means these groups are part of the project
      - unchecked means these groups are not part of the project
    - the name of the group
- saving the form the checked users and groups should be part of the project

## Side Navigation

---

- make the links to navigate to the corresponsding default views (list pages)
- make the link items active under the correct view
- Next to the navigation items there is a bubble with a number. This number should always reflect the correct amount of "things" related to the item.

## Top navbar

- There is a sign out button at the right. When a user clicks it it should sign out the user
- The search bar at the top middle should not be visible at the home page but it should be visible in all other default views (list pages)
- Search should work on the name property of each view and filter out the items that the name doesn't match

# General Tertiary tasks

You are a brave one to reach to this point so let's make it a bit more fun :)

- Replace the alerts with modal! Feel free to use any tools, libraries or even implement it from scratch!
- add a breadcrump component in all pages
