# Open Hiring Matrix (OHM)

## Introduction

The Open Hiring Matrix (OHM) is a framework designed to bring clarity, fairness, and consistency to the hiring process. By offering a structured evaluation system, it enables companies to assess candidates across multiple dimensions, ensuring that the hiring decision is not based on subjective criteria. OHM empowers both companies and candidates by making the selection process more transparent: candidates gain insight into the specific qualities that matter most for the role, while companies benefit from a clear, quantifiable method to compare applicants.

The matrix approach helps organizations prioritize what they value in a role—whether it’s technical expertise, soft skills, or cultural fit—while providing a balanced, holistic view of each candidate. In essence, OHM aligns expectations on both sides of the hiring equation, creating a fair and data-driven approach to talent acquisition.

## Purpose

OHM aims to:

- Provide a structure for companies looking for candidates to join their team.
- Help candidates understand measurably how different qualities are valued by the company.
- Ensure clarity on the job requirements and the evaluation results.
- Facilitate hiring decisions by considering a quantifiable range of factors and observations.

## Structure of the Matrix

### Qualities and Weights

The matrix consists of columns representing different qualities or skills important for the role. Each quality is assigned a weight based on its importance. The total weight across all qualities must sum to 10. This allows companies to prioritize certain qualities while still considering others. The matrix can include multiple qualities or even a breakdown within each quality. Weights can also include decimal points to provide more precision.

#### Example Qualities and Weights

| Quality          | Weight |
| ---------------- | ------ |
| Technical Skills | 3      |
| Soft Skills      | 2      |
| Cultural Fit     | 2      |
| Experience       | 3      |

### Candidate Evaluation

During the hiring process, each candidate is evaluated on each quality, potentially by multiple team members. Scores for each quality are assigned based on a scale from 1 to 10. 1 Being the lowest score and 10 being the highest possible score. The weighted score for each quality is calculated, and the total score for each candidate is the sum of all weighted scores.

### Calculation Method

1. **Assign Scores**: Team members evaluate each candidate on each quality.
2. **Calculate Weighted Scores**: Multiply the score for each quality by its weight using the formula:
   - Weighted Score = Candidate Score \* Quality Weight
3. **Sum Weighted Scores**: Add up the weighted scores to get the total score for the candidate.

### Formula

∑(S × W)

#### Example Matrix

| Candidate   | Technical Skills (3) | Soft Skills (2) | Cultural Fit (2) | Experience (3) | Total Score |
| ----------- | -------------------- | --------------- | ---------------- | -------------- | ----------- |
| Candidate A | 3 (9)                | 4 (8)           | 3 (6)            | 5 (15)         | 38          |
| Candidate B | 5 (15)               | 2 (4)           | 2 (4)            | 3 (9)          | 32          |
| Candidate C | 4 (12)               | 3 (6)           | 4 (8)            | 2 (6)          | 32          |
| Candidate D | 2 (6)                | 5 (10)          | 5 (10)           | 4 (12)         | 38          |

### Quality Breakdown

#### Example Qualities and Weights Matrix with Qualities Breakdown

| Quality               | Weight |
| --------------------- | ------ |
| Technical Skills      | 3      |
| - JavaScript          | 1      |
| - TypeScript          | 0.5    |
| - React               | 0.75   |
| - Redux               | 0.75   |
| Soft Skills           | 2      |
| - Communication       | 1      |
| - Problem-Solving     | 1      |
| Cultural Fit          | 2      |
| Experience            | 3      |
| - Previous Projects   | 1.5    |
| - Years of Experience | 1.5    |

#### Example Calculation with Breakdown

| Candidate   | JavaScript (1) | TypeScript (0.5) | React (0.75) | Redux (0.75) | Communication (1) | Problem-Solving (1) | Cultural Fit (2) | Previous Projects (1.5) | Years of Experience (1.5) | Total Score |
| ----------- | -------------- | ---------------- | ------------ | ------------ | ----------------- | ------------------- | ---------------- | ----------------------- | ------------------------- | ----------- |
| Candidate A | 4 (4)          | 3 (1.5)          | 3 (2.25)     | 4 (3)        | 5 (5)             | 4 (4)               | 3 (6)            | 5 (7.5)                 | 4 (6)                     | 39.25       |
| Candidate B | 5 (5)          | 4 (2)            | 4 (3)        | 3 (2.25)     | 3 (3)             | 5 (5)               | 4 (8)            | 4 (6)                   | 3 (4.5)                   | 38.75       |
| Candidate C | 3 (3)          | 2 (1)            | 5 (3.75)     | 5 (3.75)     | 4 (4)             | 3 (3)               | 5 (10)           | 3 (4.5)                 | 5 (7.5)                   | 40.5        |
| Candidate D | 2 (2)          | 5 (2.5)          | 2 (1.5)      | 2 (1.5)      | 4 (4)             | 5 (5)               | 5 (10)           | 4 (6)                   | 5 (7.5)                   | 40          |

## Implementation

### Step 1: Define the Matrix

- Identify the key qualities and skills required for the role.
- Assign weights to each quality, ensuring the total sums to 10. Use decimal weights if needed for precision.

### Step 2: Evaluate Candidates

- Use a standardized scoring system to assess each candidate on each quality.
- Allow multiple team members to input their scores independently.
- Include an observation to add context on the evaluation score.

### Step 3: Calculate Scores

- Multiply each score by its corresponding weight to get the weighted score.
- Sum the weighted scores to get the total score for each candidate.

### Step 4: Compare Candidates

- Use the total scores to compare candidates and determine the best match for the role.

## Open Source and Web Application

The OHM is an open-source project and will provide a hosted solution allowing companies to create and register their matrices for different roles. The companies should be able to:

- Define their matrices with qualities and weights.
- Input candidate scores, observations, and calculate total scores.
- Share a link to their hiring matrices on job applications to serve as position requirements.
- Share private links with candidates with evaluation results.

## Conclusion

The Open Hiring Matrix (OHM) provides a structured, transparent, and fair approach to the hiring process. By considering multiple dimensions and allowing for weighted evaluation, OHM helps companies make better hiring decisions and provides candidates with a clear understanding of what is valued by potential employers.

## Feedback

We welcome feedback and suggestions for improving the OHM. Please share your thoughts and experiences with using the matrix to help us refine and enhance this tool.

### AI-Assisted

The idea, the concept, the structure and formulation of this framework was human created. However parts of this document was createdwith the assistance of Chat GPT
