# About the project

The project is a basic administrator page that manages users, groups and projects and has a typical CRUD functionality with some extras! The idea behind is that users can form groups. The users and the groups can be assigned to projects.

# Routing

Below is a list of all of the views, pages, paths and further down a detailed description of the different pieces.
Considering that you run the local development server without any changes the host URL will be localhost with port 4200.

### Views, Pages & paths

- Login
  - path: "http://locahost:4200/login"
- Home
  - path: "http://locahost:4200"
- Users
  - path: "http://locahost:4200/users" as default. This is the list page
  - path: "http://locahost:4200/users/:id". This is the details information page of the user with that id
  - path: "http://locahost:4200/users/create". This is the details information page with empty form fields so that the user can create a new user
- Projects
  - path: "http://locahost:4200/projects" as default. This is the list page
  - path: "http://locahost:4200/projects/:id". This is the details information page of the project with that id
  - path: "http://locahost:4200/projects/create". This is the details information page with empty form fields so that the user can create a project
- Groups
  - path: "http://locahost:4200/groups" as default. This is the list page
  - path: "http://locahost:4200/groups/:id". This is the details information page of the project with that id
  - path: "http://locahost:4200/groups/create". This is the details information page with empty form fields so that the user can create a group
