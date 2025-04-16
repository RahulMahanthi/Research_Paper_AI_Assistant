# 📚 Research Paper Assistant

A comprehensive AI-powered platform that transforms how researchers, academics, and students discover, manage, analyze, and interact with scientific literature.

## 🔍 Overview

Research Paper Assistant is a sophisticated full-stack application designed to streamline academic research workflows. It combines document management capabilities with advanced AI-powered tools to help users extract insights, discover connections between papers, and engage with research content in more intuitive ways. The platform aims to reduce the cognitive load associated with literature reviews and research synthesis.

## 🏗️ Architecture

The application follows a modern, scalable architecture:

- **Frontend**: React application with React Router for navigation and state management
  - Responsive design using  CSS
  - Optimized for both desktop and mobile experiences

- **Backend**: FastAPI-based API service for high-performance asynchronous operations
  - RESTful endpoints for paper management
  - Background task processing for computationally intensive operations

- **Authentication**: JWT-based authentication system
  - Role-based access control
  - Secure password hashing and storage

- **Database**: MongoDB for flexible document storage
  - Vector embeddings for semantic search functionality
  - Efficient indexing for fast retrieval of paper metadata
  - Separate collections for users, papers, and analysis results

- **AI Services Integration**:
  - Integration with large language models for paper understanding
  - Vector database for similarity comparisons
  - Custom NLP pipelines for research-specific analysis

## ✨ Features

### 📋 Paper Management
The central hub for organizing your research materials:
- **Smart Upload System**: Support for PDF, EPUB, and other research document formats
- **Metadata Extraction**: Automatic extraction of title, authors, abstract, and references
- **Custom Organization**: Tag-based system with customizable collections and reading lists
- **Citation Management**: Export citations in various formats (BibTeX, APA, MLA, etc.)

### 💬 Paper Chat
An interactive way to engage with research content:
- **Contextual Q&A**: Ask specific questions about a paper's methodology, findings, or implications
- **Content Summarization**: Generate concise summaries at different levels of detail
- **Key Points Extraction**: Identify the most significant contributions or findings
- **Terminology Explanation**: Get plain-language explanations of complex technical terms
- **Research Gap Identification**: Highlight limitations and areas for future research

### 🔗 Similar Papers
Discover relevant research through intelligent recommendations:
- **Semantic Similarity**: Find papers with similar concepts regardless of terminology
- **Interdisciplinary Connections**: Find related work across different research domains
- **Recommendation Explanations**: Understand why specific papers are recommended

### 📊 Paper Analysis
Gain deeper insights through automated content analysis:
- **Research Method Classification**: Identify methodological approaches used
- **Statistical Technique Detection**: Recognize and explain statistical methods employed
- **Visual Element Extraction**: Extract and analyze figures, tables, and charts
- **Claim Identification**: Highlight specific claims and their supporting evidence
- **Reproducibility Assessment**: Evaluate the completeness of methodological descriptions

### ⚖️ Paper Comparison
Efficiently contrast multiple research papers:
- **Side-by-Side Analysis**: Compare methods, results, and conclusions across papers
- **Contradiction Detection**: Identify conflicting findings or interpretations
- **Methodological Comparison**: Contrast research approaches and experimental designs
- **Timeline Integration**: Place papers in chronological context of research development
- **Evidence Strength Assessment**: Compare the robustness of evidence across studies
- **Visual Comparison**: Generate comparative visualizations of key metrics and findings

### 🤖 Research Paper Chat
A generalized AI assistant specialized in scientific literature:
- **Literature Review Support**: Help synthesizing information across multiple papers
- **Research Question Refinement**: Assistance in formulating precise research questions
- **Methodological Guidance**: Recommendations for appropriate research methods
- **Academic Writing Support**: Suggestions for improving clarity and structure
- **Critical Analysis Prompts**: Questions that encourage critical engagement with papers
- **Custom Research Briefs**: Generate summaries focused on user-specified aspects


### 🔎 Advanced Search
Powerful search capabilities beyond basic keyword matching:
- **Semantic Search**: Find papers based on conceptual similarity rather than exact keywords
- **Multi-Faceted Filtering**: Filter by publication date, methodology, impact factor, etc.

### ⚙️ Paper Processing
Transform research papers into more accessible formats:
- **Audio Generation**: Convert papers into listenable audio summaries for on-the-go learning
- **Research Podcasts**: Generate interview-style discussions about paper content
- **Simplified Explanations**: Create versions with reduced jargon for interdisciplinary access
## 🚀 Getting Started

### 📋 Prerequisites

- Node.js (v16+)
- Python (v3.9+)
- MongoDB (v5+)
- API keys for AI services (OpenAI, Hugging Face, etc.)
- Sufficient storage for paper database

### ⚙️ Backend Setup

1. Clone the repository
   ```
   git clone https://github.com/yourusername/research-paper-assistant.git
   cd research-paper-assistant
   ```

2. Navigate to the backend directory
   ```
   cd backend
   ```

3. Create and activate a virtual environment
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

4. Install dependencies
   ```
   pip install -r requirements.txt
   ```

5. Configure environment variables by creating a `.env` file (see Configuration section)

6. Initialize the database
   ```
   python init_db.py
   ```

7. Start the backend server
   ```
   uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
   ```

### 💻 Frontend Setup

1. Navigate to the frontend directory
   ```
   cd ../frontend
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Configure the frontend environment variables by creating a `.env` file

4. Start the development server
   ```
   npm run dev
   ```

5. For production builds
   ```
   npm run build
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
# API Configuration
REACT_APP_API_URL=http://127.0.0.1:8000

```

## 🔌 API Endpoints

### 🔐 Authentication
- `POST /auth/register`: Register a new user
  - Request body: username, email, password, optional institutional affiliation
  - Returns: user details and access token

- `POST /auth/login`: Login and get access token
  - Request body: email/username, password
  - Returns: access token and refresh token

- `POST /auth/refresh`: Refresh an expired access token
  - Request body: refresh token
  - Returns: new access token

- `GET /auth/me`: Get current user profile
  - Headers: Authorization with access token
  - Returns: detailed user profile information

- `PUT /auth/change-password`: Update user password
  - Headers: Authorization with access token
  - Request body: current password, new password
  - Returns: success message

### 📄 Papers
- `GET /papers`: Get all papers or filtered subset
  - Query parameters: page, limit, tags, authors, date_range, etc.
  - Returns: paginated list of papers with metadata

- `POST /papers`: Upload a new paper
  - Headers: Authorization with access token
  - Body: multipart/form-data with PDF file and optional metadata
  - Returns: created paper details with ID

- `GET /papers/{paperId}`: Get paper details
  - Path parameter: paper ID
  - Returns: complete paper details including metadata and access information

- `PUT /papers/{paperId}`: Update paper details
  - Path parameter: paper ID
  - Request body: updated metadata
  - Returns: updated paper details

- `DELETE /papers/{paperId}`: Delete a paper
  - Path parameter: paper ID
  - Returns: confirmation of deletion

- `POST /papers/{paperId}/tags`: Add tags to a paper
  - Path parameter: paper ID
  - Request body: array of tags
  - Returns: updated paper with tags

- `GET /papers/export`: Export paper collection
  - Query parameters: format (BibTeX, CSV, etc.), selection criteria
  - Returns: formatted export file

### 💬 Chat
- `GET /chat/{paperId}/history`: Get chat history for a paper
  - Path parameter: paper ID
  - Returns: chronological chat messages

- `POST /chat/{paperId}/message`: Send a message about a specific paper
  - Path parameter: paper ID
  - Request body: message content
  - Returns: AI response

- `DELETE /chat/{paperId}/history`: Clear chat history
  - Path parameter: paper ID
  - Returns: confirmation of deletion

- `GET /chat/general`: Get general research chat history
  - Returns: chronological chat messages for general research assistant

- `POST /chat/general/message`: Send a message to general research assistant
  - Request body: message content
  - Returns: AI response

### 🔗 Similar Papers
- `GET /similar`: Find similar papers based on criteria
  - Query parameters: paper_id or text query, similarity_threshold, max_results
  - Returns: ranked list of similar papers with similarity scores

- `POST /similar/by-content`: Find papers similar to provided text
  - Request body: text content, optional filters
  - Returns: papers similar to the provided content

- `GET /similar/{paperId}/citation-network`: Get citation network for a paper
  - Path parameter: paper ID
  - Query parameters: depth, direction (citing, cited, both)
  - Returns: network of papers connected by citations

### 📊 Analyzer
- `POST /analyzer/paper/{paperId}`: Analyze a specific paper
  - Path parameter: paper ID
  - Query parameters: analysis_type (methods, claims, etc.)
  - Returns: analysis results based on specified type

- `POST /analyzer/text`: Analyze provided text content
  - Request body: text content to analyze
  - Query parameters: analysis_type
  - Returns: analysis results for the provided text

- `GET /analyzer/paper/{paperId}/summary`: Get paper summary
  - Path parameter: paper ID
  - Query parameters: length (short, medium, detailed)
  - Returns: summary of specified length

- `GET /analyzer/paper/{paperId}/key-points`: Extract key points
  - Path parameter: paper ID
  - Returns: main findings and contributions

### ⚖️ Paper Comparison
- `POST /comparison`: Compare multiple papers
  - Request body: array of paper IDs to compare
  - Query parameters: focus_areas (methods, results, conclusions)
  - Returns: structured comparison across specified dimensions

- `GET /comparison/history`: Get saved comparisons
  - Returns: previously performed comparisons

- `GET /comparison/{comparisonId}`: Get specific comparison
  - Path parameter: comparison ID
  - Returns: detailed comparison results

### 📝 PDF Chat
- `POST /pdf/chat`: Chat with uploaded PDF content
  - Request body: PDF file or paper ID, message
  - Returns: AI response contextual to the PDF content

- `POST /pdf/extract`: Extract text from PDF
  - Request body: PDF file
  - Returns: extracted text with structural information

- `POST /pdf/annotate`: Add annotations to PDF
  - Request body: PDF file, annotation data
  - Returns: URL to annotated PDF

### 🔎 Search
- `GET /search`: Search for research articles
  - Query parameters: query, filters, sort, page, limit
  - Returns: paginated search results with relevance scores

- `POST /search/semantic`: Perform semantic search
  - Request body: natural language query
  - Returns: semantically relevant papers

- `GET /search/trends`: Get research trend analysis
  - Query parameters: field, time_period
  - Returns: trending topics and publication patterns

### ⚙️ Paper Processing
- `POST /processor/paper/{paperId}/summary-audio`: Generate audio summary
  - Path parameter: paper ID
  - Query parameters: voice_type, length
  - Returns: URL to audio file

- `POST /processor/paper/{paperId}/podcast`: Generate research podcast
  - Path parameter: paper ID
  - Query parameters: format, participants
  - Returns: URL to podcast audio file

- `POST /processor/paper/{paperId}/simplified`: Generate simplified version
  - Path parameter: paper ID
  - Query parameters: target_audience, complexity_level
  - Returns: simplified text version of the paper

- `POST /processor/paper/{paperId}/visualize`: Generate visual summary
  - Path parameter: paper ID
  - Query parameters: visualization_type
  - Returns: URL to visualization image or interactive component

## 📁 Folder Structure

```
/
├── frontend/                           # React frontend application
│   ├── public/                         # Static assets
│   ├── src/
│   │   ├── assets/                     # Images, icons, and other media
│   │   ├── components/                 # Reusable UI components
│   │   │   ├── auth/                   # Authentication components
│   │   │   ├── chat/                   # Chat interface components
│   │   │   ├── layout/                 # Layout components (header, footer, etc.)
│   │   │   ├── papers/                 # Paper management components
│   │   │   ├── search/                 # Search components
│   │   │   ├── ui/                     # Basic UI elements (buttons, cards, etc.)
│   │   │   └── visualizations/         # Data visualization components
│   │   ├── contexts/                   # React context providers
│   │   ├── hooks/                      # Custom React hooks
│   │   ├── pages/                      # Page components
│   │   │   ├── Auth/                   # Login, register pages
│   │   │   ├── Dashboard/              # User dashboard
│   │   │   ├── PaperDetail/            # Individual paper view
│   │   │   ├── PaperManagement/        # Paper CRUD operations
│   │   │   ├── Search/                 # Search interface
│   │   │   └── Settings/               # User settings
│   │   ├── services/                   # API integration services
│   │   ├── styles/                     # Global styles and themes
│   │   ├── utils/                      # Utility functions
│   │   ├── App.js                      # Main application component
│   │   ├── routes.js                   # Application routes
│   │   └── index.js                    # Application entry point
│   ├── .env                            # Environment variables
│   ├── package.json                    # Frontend dependencies
│   └── README.md                       # Frontend documentation
│
├── backend/                            # FastAPI backend
│   ├── app/
│   │   ├── api/                        # API endpoints
│   │   │   ├── auth/                   # Authentication routes
│   │   │   ├── papers/                 # Paper management routes
│   │   │   ├── chat/                   # Chat functionality routes
│   │   │   ├── similar/                # Similar papers routes
│   │   │   ├── analyzer/               # Paper analyzer routes
│   │   │   ├── comparison/             # Paper comparison routes
│   │   │   ├── pdf/                    # PDF handling routes
│   │   │   ├── search/                 # Search functionality routes
│   │   │   └── processor/              # Paper processing routes
│   │   ├── core/                       # Core application functionality
│   │   │   ├── config.py               # Application configuration
│   │   │   ├── security.py             # Security utilities
│   │   │   └── exceptions.py           # Custom exceptions
│   │   ├── db/                         # Database connection and models
│   │   │   ├── mongodb.py              # MongoDB client
│   │   │   └── vector_db.py            # Vector database for embeddings
│   │   ├── models/                     # Pydantic models
│   │   │   ├── user.py                 # User models
│   │   │   ├── paper.py                # Paper models
│   │   │   └── chat.py                 # Chat models
│   │   ├── services/                   # Business logic services
│   │   │   ├── auth_service.py         # Authentication service
│   │   │   ├── paper_service.py        # Paper management service
│   │   │   ├── chat_service.py         # Chat service
│   │   │   ├── ai_service.py           # AI integration service
│   │   │   └── search_service.py       # Search service
│   │   ├── utils/                      # Utility functions
│   │   │   ├── pdf_utils.py            # PDF processing utilities
│   │   │   ├── nlp_utils.py            # NLP utilities
│   │   │   └── logger.py               # Logging configuration
│   │   └── main.py                     # Application entry point
│   ├── tests/                          # Test suite
│   │   ├── conftest.py                 # Test configuration
│   │   ├── test_auth.py                # Authentication tests
│   │   └── test_papers.py              # Paper management tests
│   ├── .env                            # Environment variables
│   ├── requirements.txt                # Backend dependencies
│   └── README.md                       # Backend documentation
│
├── scripts/                            # Utility scripts
│   ├── seed_db.py                      # Database seeding script
│   └── cleanup.py                      # Cleanup script
│
├── docker/                             # Docker configuration
│   ├── Dockerfile.frontend             # Frontend Docker configuration
│   ├── Dockerfile.backend              # Backend Docker configuration
│   └── docker-compose.yml              # Docker compose configuration
│
├── docs/                               # Documentation
│   ├── api/                            # API documentation
│   ├── architecture/                   # Architecture documentation
│   └── user-guide/                     # User guide
│
├── .gitignore                          # Git ignore file
├── LICENSE                             # Project license
└── README.md                           # Project documentation
```

## 👥 Contributing

We welcome contributions to the Research Paper Assistant project! Here's how to get started:

1. **Fork the repository**
   - Create your own copy of the project on GitHub

2. **Clone your fork**
   ```
   git clone https://github.com/yourusername/research-paper-assistant.git
   cd research-paper-assistant
   ```

3. **Set up development environment**
   - Follow the setup instructions in the Getting Started section
   - Make sure all tests pass before making changes

4. **Create a feature branch**
   ```
   git checkout -b feature/your-amazing-feature
   ```

5. **Make your changes**
   - Write clear, commented code
   - Add or update tests as necessary
   - Follow the project's code style guidelines

   ```

7. **Commit your changes**
   ```
   git commit -m 'Add some amazing feature'
   ```

8. **Push to your branch**
   ```
   git push origin feature/your-amazing-feature
   ```

9. **Open a Pull Request**
   - Provide a clear description of the changes
   - Reference any related issues
   - Be responsive to feedback and comments

### Code of Conduct

- Be respectful and inclusive in all communications
- Provide constructive feedback
- Focus on what is best for the community
- Show empathy towards other community members

## 📜 License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.

## 🙏 Acknowledgements

- Thanks to all contributors who have helped shape this project
- Built with powerful open-source tools including FastAPI, React, MongoDB, and various AI libraries
- Special thanks to the research community for providing feedback and suggestions
