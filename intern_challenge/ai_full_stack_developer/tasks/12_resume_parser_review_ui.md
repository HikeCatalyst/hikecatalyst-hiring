## Task 12: Resume Parser with Human Review

**Level:** Medium. **Idea:** turn messy PDFs into clean structured data, and be honest about uncertainty.

### Build

1. Upload a PDF resume. Extract the text (and handle scanned pages with OCR as a bonus).
2. Use an LLM with a JSON schema to extract: name, email, phone, skills, experience (company, title, start, end), education.
3. Give each field a **confidence** (use a method you explain, for example the model's own flag plus a regex check) and highlight low-confidence fields in a review form.
4. Save the corrected record. Keep the original extraction and the human edit so you can measure the error rate.
5. Handle failures: an encrypted PDF, a 40-page file, a resume in another layout, and a file that is not a resume.

### Measure

Use 10 sample resumes (make them up). Report the field-level accuracy before and after human review.

### Deliverables

Code, accuracy table, README, `AI_LOG.md`.
