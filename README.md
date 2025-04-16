# 📚 Research Paper Assistant

A comprehensive platform for managing, analyzing, and interacting with research papers using AI-powered tools.

## 🔍 Overview

Research Paper Assistant is a full-stack application that helps researchers, academics, and students work with research papers more effectively. The application offers features like paper management, AI-powered chat with papers, similarity analysis, paper comparison, and more.

## 🏗️ Architecture

The application consists of:

- **Frontend**: React application with React Router for navigation
- **Backend**: FastAPI-based API providing various services for paper management and analysis
- **Authentication**: User authentication and authorization system
- **Paper Processing**: Tools for analyzing and extracting insights from research papers

## ✨ Features

- 📋 **Paper Management**: Upload, organize, and manage research papers
- 💬 **Paper Chat**: Interact with research papers using AI-powered chat
- 🔗 **Similar Papers**: Find papers similar to ones you're interested in
- 📊 **Paper Analysis**: Automated analysis of research paper content
- ⚖️ **Paper Comparison**: Compare multiple papers to identify similarities and differences
- 🤖 **Research Paper Chat**: General AI chat interface focused on research papers
- 🧪 **Research Paper Testing**: Test functionality related to research papers
- 🔎 **Advanced Search**: Search through papers with multiple criteria
- ⚙️ **Paper Processing**: Process papers to extract structured information generate summary of uploaded paper and  generate audio of summary and audio of podcast regarding the paper.

## 🚀 Getting Started

### 📋 Prerequisites

- Node.js (v14+)
- Python (v3.8+)
- MongoDB
- API keys for any AI services used (if applicable)

### ⚙️ Backend Setup

1. Clone the repository
2. Navigate to the backend directory
3. Create a virtual environment:
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
4. Install dependencies:
   ```
   pip install -r requirements.txt
   ```
5. Configure environment variables (see Configuration section)
6. Start the backend server:
   ```
   uvicorn app.main:app --reload
   ```

### 💻 Frontend Setup

1. Navigate to the frontend directory
2. Install dependencies:
   ```
   npm install
   ```
3. Configure the frontend environment variables
4. Start the development server:
   ```
   npm run dev
   ```

## ⚙️ Configuration

### 🔒 Backend Environment Variables

Create a `.env` file in the backend directory with the following variables:

```
MONGODB_URL=your mongodb atlas url 
SECRET_KEY=your-secret-keyys
OLLAMA_API_URL=http://localhost:11434
SEMANTIC_SCHOLAR_API_KEY=yourkey 
HF_API_TOKEN=huggingfaceapitoken


```

### 🌐 Frontend Environment Variables

Create a `.env` file in the frontend directory:

```
REACT_APP_API_URL=http://127.0.0.1:8000
```

## 🔌 API Endpoints

### 🔐 Authentication
- `POST /auth/register`: Register a new user
- `POST /auth/login`: Login and get access token

### 📄 Papers
- `GET /papers`: Get all papers
- `POST /papers`: Upload a new paper
- `GET /papers/{paperId}`: Get paper details
- `PUT /papers/{paperId}`: Update paper details
- `DELETE /papers/{paperId}`: Delete a paper

### 💬 Chat
- `GET /chat/{paperId}`: Get chat history for a paper
- `POST /chat/{paperId}`: Send a message about a specific paper

### 🔗 Similar Papers
- `GET /api/similar`: Find similar papers based on criteria

### 📊 Analyzer
- `POST /analyzer`: Analyze a paper

### ⚖️ Paper Comparison
- `POST /comparison`: Compare multiple papers

### 📝 PDF Chat
- `POST /pdf`: Chat with PDF content

### 🔎 Search
- `GET /search`: Search for research articles

### ⚙️ Paper Processing
- `POST /processor`: Process papers for information extraction

## 📁 Folder Structure

```
/
├── frontend/                  # React frontend application
│   ├── src/
│   │   ├── components/        # React components
│   │   ├── hooks/             # Custom React hooks
│   │   ├── pages/             # Page components
│   │   └── App.js......          # Main application component
│   └── package.json           # Frontend dependencies
│
├── backend/                   # FastAPI backend
│   ├── app/
│   │   ├── auth/              # Authentication functionality
│   │   ├── papers/            # Paper management
│   │   ├── chat/              # Chat functionality
│   │   ├── similar/           # Similar papers functionality
│   │   ├── analyzer/          # Paper analyzer
│   │   ├── comparison/        # Paper comparison
│   │   ├── pdf/               # PDF handling
│   │   ├── search/            # Search functionality
│   │   ├── processor/         # Paper processing
│   │   ├── models/            # Database models
│   │   └── config.py .....         # Application configuration
│   ├── requirements.txt       # Backend dependencies
│   └── main.py                # Entry point for the backend
│
└── README.md                  # Project documentation
```

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

[MIT License](LICENSE)
