# Recruitment & Applicant Tracking System (ATS)

A comprehensive system for managing the entire hiring lifecycle, from requisition to onboarding, with advanced candidate tracking and assessment capabilities.

## Features

### Core ATS Features
- **Job Requisition & Approval**: Create detailed job requisitions with approval workflows
- **Job Posting**: Publish job openings to internal career page and external job boards
- **Initial Screening**: Automated filtering, AI-driven resume parsing, keyword search
- **Candidate Management**: Centralized database with customizable stages
- **Candidate Profiles**: Comprehensive profiles with all relevant information
- **Assessment Integration**: Seamless integration with HackerRank and other platforms
- **Scheduling Tool**: Automated interview scheduling with calendar integration
- **Automated Communications**: Regret letters, notifications, and templates
- **AI-Powered Ranking**: Machine learning-based candidate ranking
- **Analytics & Insights**: Comprehensive reporting and metrics
- **Time Tracking**: Talent sourcing time tracker
- **Automated Onboarding**: Offer letters and onboarding workflows

### Technical Stack
- **Frontend**: React with TypeScript, Material-UI
- **Backend**: Node.js with Express, TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT with role-based access control
- **File Storage**: AWS S3 (configurable)
- **Email**: Nodemailer with templates
- **AI/ML**: OpenAI API for resume parsing and ranking
- **Calendar Integration**: Google Calendar API

## Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```

4. Set up the database:
   ```bash
   npm run db:migrate
   npm run db:seed
   ```

5. Start the development servers:
   ```bash
   npm run dev
   ```

## Project Structure

```
ats-system/
├── client/                 # React frontend
├── server/                 # Node.js backend
├── shared/                 # Shared types and utilities
├── docs/                   # Documentation
└── scripts/                # Database scripts and utilities
```

## API Documentation

The API documentation is available at `/api/docs` when the server is running.

## Contributing

Please read CONTRIBUTING.md for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
