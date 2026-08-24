import React from 'react';
import styles from './PdfAnalyzer.module.css';
import Seo from '../../components/seo/Seo';

const PdfAnalyzer = () => {
  return (
    <>
      <Seo
        title="Financial Analyzer Project Documentation"
        description="Turn messy financial PDFs into analyzable, interactive insights"
        path="/blogs/pdf-analyzer"
      />

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Title */}
          <h1 className={styles.title}>
            Financial Analyzer: From PDFs to Interactive Insights
          </h1>
          <p className={styles.subtitle}>
            Turn messy financial PDFs into analyzable, interactive insights. Upload a PDF, extract structured metrics via <strong>LLM Model</strong>, visualize trends, preview the exact PDF page for each data point, and ask contextual questions with a RAG-backed chat.
          </p>
          <p className={styles.link}>
            <a href="https://pepper.azurewebsites.net/" target="_blank" rel="noopener noreferrer">
              Try Out the Financial Analyzer
            </a>
          </p>

          <p className={styles.paragraph}>
            This document provides an overview of the Financial Analyzer's architecture, key features, and implementation highlights, focusing on the <em>what</em> and <em>why</em> rather than the low-level code.
          </p>

          <hr className={styles.divider} />

          {/* The Challenge */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>The Challenge: Context and Consistency</h2>
            <p className={styles.paragraph}>Financial analysts spend countless hours manually extracting performance metrics from varying PDF report formats. This process is slow, prone to errors, and makes historical trend analysis cumbersome. Furthermore, when questions arise, analysts must manually search the source document for context.</p>
          </div>
          
          <h3 className={styles.sectionSubtitle}>The Financial Analyzer Solution:</h3>
          <ul className={styles.list}>

            <li><strong>Structured Extraction:</strong> It uses <strong>LLM Model</strong> with a strict prompt contract to pull specific, canonical metrics (like "Total Net Sales") from any uploaded PDF into a clean, unified data format.</li>
            <li><strong>Traceable Visualization:</strong> It charts the extracted time-series data and provides the ability to <strong>instantly jump to the original page</strong> in the PDF for verification.</li>
            <li><strong>Contextual Q&A (RAG):</strong> It indexes the entire document library using <strong>FAISS</strong> to enable a chatbot that answers questions based <em>only</em> on the uploaded documents.</li>
          </ul>
          
          {/* Data Processing and Visualization Workflow */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Data Processing and Visualization Workflow</h3>
            <div className={styles.diagramPlaceholder}>
              {/* Diagram content would go here */}
              <img src="https://res.cloudinary.com/dskwdzj57/image/upload/v1761678847/pdf-analyzer-1_f9fpvs.png" alt="Data Processing and Visualization Workflow" />
            </div>
          </div>

          <hr className={styles.divider} />

          {/* Architecture and Key Design Choices */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Architecture and Key Design Choices</h2>
            <p className={styles.paragraph}>The application is built as a single-page <strong>Streamlit</strong> application in Python, designed for rapid prototyping and interactive data display. The key architectural decision was to create two concurrent processing paths upon document upload: one for structured data extraction and one for contextual indexing.</p>
            
            <ul className={styles.list}>
              <li><strong>Single-Page Orchestration:</strong> Streamlit manages the entire lifecycle, from file upload and processing status to visualization and the interactive chat window.</li>
              <li><strong>Dual-Path Processing:</strong> Every uploaded document is immediately fed into both the <strong>LLM Model extraction pipeline</strong> (for structured data) and the <strong>FAISS indexing pipeline</strong> (for RAG context).</li>
              <li><strong>Interactive UI:</strong> Uses Plotly for rich line charts and `st-aggrid` for customizable data tables, ensuring the UI is highly reactive to user input.</li>
            </ul>
          </div>

          {/* Core Architecture Diagram */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Core Application Architecture: Dual-Path Processing</h3>
            <div className={styles.diagramPlaceholder}>
              <img src="https://res.cloudinary.com/dskwdzj57/image/upload/v1761681050/pdf-analyzer-2_cbhkdn.png" alt="Core Application Architecture: Dual-Path Processing" width="75%" />
            </div>
          </div>

          <hr className={styles.divider} />

          {/* Core Implementation Highlights */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Core Implementation Highlights</h2>

            <h3 className={styles.sectionSubtitle}>1. Guaranteed Data Quality via Strict Prompting</h3>
            <p className={styles.paragraph}>
            We use <strong>LLM Model's structured output capability</strong> to enforce a <em>canonical JSON schema</em> for all extracted metrics. This means we are not just asking the LLM to find numbers; we are demanding they be returned with standardized metric names and normalized month formats. This tight <strong>prompt contract</strong> drastically reduces the need for complex, fragile post-processing and ensures the time-series charts are built on reliable, consistent data.
          </p>
          </div>

            <h3 className={styles.sectionSubtitle}>2. Full Traceability (Data to Source)</h3>
            <p className={styles.paragraph}>
            A critical feature for analysts is the ability to <strong>audit the source</strong> of any number. The data grid is linked to a <strong>built-in PDF viewer</strong>. When an analyst selects a metric row in the table, the PDF viewer automatically jumps to the <strong>exact page</strong> from which that data point was extracted. This linkage ensures high trust and quick verification of the LLM's output.
          </p>

            <h3 className={styles.sectionSubtitle}>3. Scalable Context with Incremental RAG Indexing</h3>
            <p className={styles.paragraph}>
            The Retreival-Augmented Generation (RAG) chat uses <strong>FAISS</strong> to store vectorized representations of the uploaded documents. To handle a growing library of documents efficiently, the system is designed to <strong>incrementally merge new documents</strong> into the existing FAISS index rather than rebuilding the entire index every time a new file is added. This ensures the chat feature remains fast and ready for grounded Q&A, even with many gigabytes of data.
          </p>
          
            <h3 className={styles.sectionSubtitle}>4. Robust Data Persistence and Deduplication</h3>
            <p className={styles.paragraph}>
            For prototyping and a single-user environment, all extracted metrics are stored in a simple, readable <strong>CSV file</strong> (`financial_data.csv`). To maintain data integrity, the system implements a strict <strong>deduplication logic</strong> that prevents metric rows from being duplicated if the same document is uploaded or processed multiple times. This keeps the data history clean and the trend analyses accurate.
          </p>

          {/* RAG Chat Workflow */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>RAG Chat Workflow: From Query to Grounded Response</h3>
            <div className={styles.diagramPlaceholder}>
              <img src="https://res.cloudinary.com/dskwdzj57/image/upload/v1761681315/pdf-analyzer-3_znsw3h.jpg" alt="Core Application Architecture: Dual-Path Processing" width="75%"/>
            </div>
          </div>

          <hr className={styles.divider} />

          {/* Performance and Usability */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Performance and Usability Trade-offs</h2>
            <ul className={styles.list}>
              <li><strong>Indexing vs. Quality:</strong> We chose a <strong>chunk size of 1000</strong> for RAG indexing to balance retrieval quality (giving the LLM enough context) against index size and search speed.</li>
              <li><strong>Latency Management:</strong> Since <strong>LLM Model extraction is an API call per document</strong>, which can introduce latency, the application uses visual spinners and status messages to inform the user that processing is underway, improving perceived responsiveness.</li>
              <li><strong>Storage Simplicity vs. Scale:</strong> The reliance on local FAISS and CSV files works perfectly for a rapid prototype or single analyst, but moving to a proper <strong>database (e.g., Postgres)</strong> and a distributed vector store would be required for enterprise-level, multi-user deployment.</li>
            </ul>
          </div>

          <hr className={styles.divider} />

          {/* Running the Application */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Running the Application</h2>
            <h3 className={styles.sectionSubtitle}>Usage:</h3>
            <ul className={styles.list}>
              <li>Upload a financial PDF in the left panel.</li>
              <li>Wait for the "Analysis complete" and "Data Stored in database" messages.</li>
              <li>Explore the line chart and per-metric tables.</li>
              <li>Click a table row to preview the exact PDF page.</li>
              <li>Open the "Ask Me" popover to chat with the document.</li>
            </ul>
          </div>

          <hr className={styles.divider} />

          {/* Future Vision and Scalability */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Future Vision and Scalability</h2>
            <ul className={styles.list}>
              <li><strong>Secure API/Model Access (Closed Environment):</strong> To meet strict financial compliance standards, future iterations must route all <strong>LLM Model extraction and RAG calls</strong> through a secure, internal API gateway. This prevents sensitive financial data from being transmitted to external endpoints, effectively running the model in a "closed environment" or VPC (Virtual Private Cloud).</li>
              <li><strong>Role-Based Access Control (RBAC):</strong> The current 'Access Control' will be formalized into <strong>Role-Based Access Control (RBAC)</strong>. This implementation will grant explicit permissions based on user roles (e.g., Analyst, Admin, Auditor), governing document visibility, upload/deletion rights, and chat history access.</li>
              <li><strong>Managed Document Repositories:</strong> Replace simple file upload with integrations to <strong>secure, managed document repositories</strong> (like SharePoint, Amazon S3, or internal file servers). This provides version control, audit trails, and automated ingestion pipelines for new financial filings.</li>
              <li><strong>Full Database Migration:</strong> Moving away from CSV/FAISS to a secure, relational database backend (like Postgres) with a dedicated vector store to support thousands of documents and concurrent users.</li>
              <li><strong>API Service Layer Decoupling:</strong> Introduce a stateless <strong>API service layer</strong> (e.g., built with FastAPI) between the Streamlit UI and the core processing logic. This decouples the application, enabling independent scaling of the UI, extraction, and RAG services.</li>
              <li><strong>Multi-Document Analytics:</strong> Implementing tools to compare metrics across different companies or files, enabling sophisticated cohort analysis and benchmarking.</li>
              <li><strong>Robust Error Handling:</strong> Introducing server-side schema validation on LLM output and automated retry logic to make the extraction process virtually failure-proof.</li>
              <li><strong>Batch Processing:</strong> Integrating background workers (e.g., Celery) to handle large queues of document uploads asynchronously, ensuring the UI remains fast and responsive.</li>
              <li><strong>Observability:</strong> Integrating structured logging, metrics (LLM latency, token usage), and error tracing for better monitoring and debugging in production.</li>
            </ul>
          </div>

          <hr className={styles.divider} />

          {/* Closing Thoughts */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Closing Thoughts</h2>
              <p className={styles.paragraph}>
            
              Financial Analyzer demonstrates the immediate, practical value of combining a powerful large language model like <strong>LLM Model</strong> with structured data engineering and modern search (RAG). By prioritizing <strong>traceability, consistency, and a strong user experience</strong>, the application transforms a tedious manual task into a fast, auditable, and intelligent workflow.
            </p>

            <p className={styles.link}>
              <a href="https://pepper.azurewebsites.net/" target="_blank" rel="noopener noreferrer">
                Try Out the Financial Analyzer
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PdfAnalyzer;
