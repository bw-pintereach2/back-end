# Backend
    Authors: https://github.com/Amber-Pittman, https://github.com/mwoodiwiss

## Description

This is the back end for an article organization app. It's hard to keep track of articles when researching and our app solves that by 
organizing articles for later reading.

## Endpoints

| Method | Endpoint                      | Description                                                                                  |
| ------ | ----------------------------  | -------------------------------------------------------------------------------------------- |
| POST   | /api/auth/register            | Creates a `user` using the information sent inside the `body` of the request. password is hashed before saving the user to the database.                   |
| POST   | /api/auth/login               | Uses the credentials sent inside the `body` to authenticate the user. On successful login creates a new JWT with the user id as the subject and sends it back to the client. If login fails, respond with the correct status code.                                |
| POST   | /api/categories               | Uses the JWT sent inside the `header` to authorize the user. On successful authorization, it adds the category to the users database. If the user is not logged in, or if the category schema isn't correct, it responds with the appropriate status code.             |
| POST   | /api/categories/articles      | Uses the JWT sent inside the `header` to authorize the user. On successful authorization, it adds the article to the users database, under the category. If the user is not logged in, or if the article schema isn't correct, it responds with the appropriate status code.        |
| PUT    | /api/categories/:id           | Uses the JWT sent inside the `header` to authorize the user. On successful authorization, it updates the category with provided data. If the user is not logged in, or if the category schema isn't correct, it responds with the appropriate status code.              |
| DELETE | /api/categories/:id           | Uses the JWT sent inside the `header` to authorize the user. On successful authorization, it updates the category with provided data. If the user is not logged in, or if the category schema isn't correct, it responds with the appropriate status code.              |
| GET    | /api/categories               | Uses the JWT sent inside the `header` to authorize the user. On successful authorization, it responds with an array of all the categories for that user. If the user is not logged in it responds with the correct status code.                                       | 
| GET    | /api/categories/:id           | Uses the JWT sent inside the `header` to authorize the user. On successful authorization, it responds with an array of all the articles for that category. If the user is not logged  in it responds with the correct status code.                                       |

## User schema

| Field            | Data Type | Metadata                                                                                               |
| ---------------- | --------- | ------------------------------------------------------------------------------------------------------ |
| id               | number    | no need to provide it when creating users, the database will generate it                               |
| username         | string    | unique, required.                                                                                      |
| password         | string    | required.                                                                                              |

## Category schema

| Field            | Data Type | Metadata                                                                                               |
| ---------------- | --------- | ------------------------------------------------------------------------------------------------------ |
| id               | number    | no need to provide it when creating categories, the database will automatically generate it.           |
| category_title   | string    | required.                                                                                              |
| user_id          | number    | required, must be the id of an existing user.                                                          |

## Article schema

| Field            | Data Type | Metadata                                                                                               |
| -------------    | --------- | ------------------------------------------------------------------------------------------------------ |
| id               | number    | no need to provide it when creating articles, the database will automatically generate it.             |
| article_title    | string    | required.                                                                                              |
| article_link     | string    | required.                                                                                              |
| article_notes    | string    | required.                                                                                              |
| category_id      | number    | required, must be the id of an existing category.                                                      |
| user_id          | number    | required, must be the id of an existing user.                                                          |