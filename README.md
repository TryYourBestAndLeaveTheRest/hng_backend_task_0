# HNG Backend Task 0

## Description

This is a project that focus on implementing rest api to return a json format of my email, current date and the url of the repository to my github

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/TryYourBestAndLeaveTheRest/hng_backend_task_0.git
   ```
2. Navigate to the project directory:

   ```bash
   cd hng_backend_task_0
   ```

3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the project locally:
   ```bash
   npm run dev
   ```

## API Documentation

### Endpoint URL

`http://localhost:3000/`

### Endpoints

#### GET /example

- **Description**: Retrieves an example resource.
- **Request**:
  ```http
  GET /api/hng-task-0
  ```
- **Response**:
  ```json
  {
    "email": "sherifdeenraji96@gmail.com",
    "current_datetime": "2025-02-02T17:14:47.570Z",
    "github_url": "https://github.com/TryYourBestAndLeaveTheRest/hng_backend_task_0"
  }
  ```
- **Example Usage**:
  ```bash
  curl -X GET http://localhost:3000/api/hng-task-0
  ```