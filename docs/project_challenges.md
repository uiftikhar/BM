# Code challenge primary tasks

## Login

---

A default user has been created for you with email "amazing@admin.com" and password "admin"

- Currently the application is accessible without a user authentication. If a user is not authenticated they should be redirected to the login page. Otherwise they can access the web application

Please remember that the "backend" requires an authentication header with a token to be present in all API calls.

## Home page

---

- Implement the logic to display the last 5 entries as seen in the screenshot for the projects, users & groups. Feel free to provide mock data for testing out the results

## Users list

---

- Create the users list page. Please check [here](./docs/project_info.md) for the route
- Add anywhere in the page an "Add User" button that navigates to the user creation page
- Every list item in the page should display the following information
  - First Name
  - Last Name
  - Gender. The api endpoint is /api/genders
  - Email
  - Delete button that when pressed deletes the user. The UI should reflect this action
- Every list item is clickable and navigates to the details of the selected user

## User create/edit page

---

- Create the user create/edit page with the following fields for either creating a new user or updating an existing one.
  - Email (input, required)
  - First Name (input, required)
  - Last Name (input, required)
  - Gender (select)
  - Company (input)
  - Language Main (input, required)
  - Language Secondary (input)
  - Save button
    - Is deactivated by default unless all of the required fields are filled.
    - When pressed and the operation is succesful, the app should navigate to the edit page of the user
  - Cancel button
    - When pressed, all form values should clear and the app should navigate to the users list page.
