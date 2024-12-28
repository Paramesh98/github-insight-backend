# Github Insight

### **Description**

This is the backend API server built with Express.js. It communicates with the Github REST API to fetch data on:

- A Github user's repositories
- A Github user's gists
- A Github user's organizations

### **Technologies Used**

- Node.js with Express.js
- Axios for API calls
- TypeScript
- Dotenv for environment variable management

### **API Endpoints**

1. **`GET /api/user/:username/repos`**
   - Retrieves the public repositories for a given user.
2. **`GET /api/user/:username/gists`**
   - Retrieves the public gists for a given user.
3. **`GET /api/user/:username/orgs`**
   - Retrieves the public organizations for a given user.
4. **`GET /api/user/:username`**
   - Retrieves the github details for a given user.

### **Setup and Installation**

1. **Clone the repository:**
   ```bash
   git clone <REPO_URL>
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm serve
   ```

4. **Access the API:** Server runs on `http://localhost:8081`.

### **Configuration**

- Set the necessary environment variables in a `.env` file.
- The following variables are required:
  ```
  PORT=8081
  API_URL_GITHUB=https://api.github.com
  API_TOKEN_GITHUB=your-github-access-token
  ```

### **Unit Tests (Optional)**

To run unit tests (if implemented):
```bash
npm test
```

### **Docker Setup (Optional)**

1. **Build the Docker image:**
   ```bash
   docker build -t github-insight-backend .
   ```
2. **Run the container:**
   ```bash
   docker run -p 8081:8081 github-insight-backend
   ```
