# Open Hiring Matrix (OHM)

[Versión en Español](/es)

## Introduction

In this document, we will explain what this project is about and how you can implement it successfully in your hiring
process.

The Open Hiring Matrix (OHM) is a framework designed to bring clarity, fairness, and consistency to the hiring process.
By offering a structured view—in the form of a matrix—of the requirements for a role, including how important each skill
is for that role, and providing an evaluation system that enables companies to assess candidates across multiple skills,
hard and soft, ensuring that the hiring decision is not based on subjective criteria or misconceptions between the
candidate and the company.

OHM empowers both companies and candidates by making the hiring process more transparent: candidates gain insight into
the specific skills and requirements that matter most for the role, while companies benefit from a clear, quantifiable
method to compare how much candidates align with the open position.

The approach of OHM aims to help organizations identify what skills they value the most in a role—whether it’s technical
expertise, soft skills, or cultural fit—while providing a balanced, comprehensive assessment of each candidate across
a variety of attributes. In essence, OHM aligns expectations on both sides of the hiring process, creating a fair and
data-driven approach to talent acquisition from the start.

## Why

When reviewing job descriptions, it’s often unclear what the company prioritizes from the list of required skills.
Phrases like 'Experience with...,' 'Strong knowledge of...,' 'Solid knowledge of...,' 'Advanced knowledge of...,' or
'Familiarity with...' can make it difficult to determine which skill or adjective—if we focus on the descriptive
language—carries more weight.

Does "Solid knowledge" imply more expertise than "Advanced knowledge"? Or does "Experience with" hold more value than
"Strong knowledge"?

Some cases might feel clearer than others, for instance, "Experience with" seems to be clear that it means more than
"Familiarity with", right?

Because there is no easy way to quantify these terms, we often rely on adjectives that are loosely defined and can be
interpreted differently by different people.

It is probably known by now that the list of requirements, especially in the tech industry, feels endless sometimes, and
we know we can't easily evaluate everything that is asked for in a practical way. Moreover, not only hard skills are
being evaluated, but also soft skills, experience, cultural fit, etc., which arguably in many cases could be or have
been a reason for rejection as well.

We all could benefit from a way of being transparent about the spectrum of dimensions or skillsets that are necessary
and that will be evaluated during a hiring process in order to better align between the company and the candidate.

As a candidate, understanding how much you think you align with the role and a company may increase the chances to apply
eagerly with confidence, and for the company, it could increase the chances of finding a great match faster.

## Purpose

OHM aims to provide:

- **Structure**: A framework for companies to describe the required skills (technical and non-technical) for a role.
- **Transparency**: Clear insight for candidates into how different skills and requirements are valued by the company.
- **Openness**: An evaluation template for companies to also provide candidates with feedback.

## Implementation

To successfully implement the Open Hiring Matrix, companies should focus on these 3 areas:

- **Skills**: Identify the key dimensions that the role requires, such as technical abilities or interpersonal
  capabilities.
- **Criterion**: Each skill is measured by specific indicators that assess the candidate's proficiency and alignment
  with the role.
- **Weight**: Assign a weight to each criterion to reflect its importance in the role.

### Skills

It is paramount to identify the key skills required for the role. These skills should encompass both technical and soft
skills, as well as experience, cultural fit, and cultural contribution, or any other category that is relevant to the
role according to the company's needs.

### Criterion

Each skill should be accompanied by a specific criterion on how the skill will be evaluated. For example, if the skill
is "Programming languages," the criterion could be "Proficiency in relevant programming languages." The company could
add more detail on how proficiency will be evaluated, such as "Ability to write clean, efficient code in Python," or
even have a checklist of questions or tasks that the candidate will be evaluated on.

### Weight

Assigning a weight to each skill is crucial to reflect its importance in the role. Not every skill is equally important,
and some may be more critical for the role than others. By assigning weights, companies can ensure that the evaluation
process is aligned with the role's requirements and priorities as well as the company's values and culture—or other
attributes that are important to the company to include on their team.

## Example

Let's dive into an example of how the Open Hiring Matrix can be implemented for a software engineering role.

We will describe the different skills, criteria, and weights that could be considered for evaluating candidates for this
role.

### Technical Skills

Technical skills involve evaluating the specific knowledge and competencies that enable a candidate to perform tasks or
use tools in a particular field, such as programming, design, or systems management.

| Skill                                            | Criterion                                                                             | Weight |
| ------------------------------------------------ | ------------------------------------------------------------------------------------- | ------ |
| Technical Skills                                 |                                                                                       | 3      |
| &nbsp;&nbsp;&nbsp;&nbsp;Programming languages    | Proficiency in relevant programming languages.                                        | 1      |
| &nbsp;&nbsp;&nbsp;&nbsp;Frameworks and libraries | Proficiency in frameworks and libraries relevant to the role.                         | 0.5    |
| &nbsp;&nbsp;&nbsp;&nbsp;API Development          | Ability to design and build RESTful or GraphQL APIs and understand their integration. | 0.5    |
| &nbsp;&nbsp;&nbsp;&nbsp;Testing and code quality | Familiarity with testing practices such as TDD or BDD.                                | 1      |

These criteria ensure that the candidate possesses both theoretical knowledge and practical application skills.

### Soft Skills

Soft skills assess interpersonal and emotional competencies that facilitate communication, collaboration, and
relationship management in the workplace.

| Skill                                   | Criterion                                                                   | Weight |
| --------------------------------------- | --------------------------------------------------------------------------- | ------ |
| Soft Skills                             |                                                                             | 2      |
| &nbsp;&nbsp;&nbsp;&nbsp;Communication   | Ability to express ideas and concepts clearly.                              | 0.5    |
| &nbsp;&nbsp;&nbsp;&nbsp;Teamwork        | Efficiency in collaborating with others and building relationships at work. | 0.5    |
| &nbsp;&nbsp;&nbsp;&nbsp;Adaptability    | Flexibility and willingness to learn and adjust to new situations.          | 0.5    |
| &nbsp;&nbsp;&nbsp;&nbsp;Problem-solving | Ability to identify, analyze, and solve problems effectively.               | 0.5    |

These criteria assess the candidate's ability to collaborate within a team, learn, and positively impact the work
environment.

### Experience

Experience measures the candidate’s professional background in relation to the position.

| Skill                    | Criterion                                                                                      | Weight |
| ------------------------ | ---------------------------------------------------------------------------------------------- | ------ |
| Experience               |                                                                                                | 2      |
| Years of experience      | Total years of experience relevant to the position.                                            | 0.3    |
| Relevant projects        | Participation in significant projects that demonstrate key skills.                             | 0.7    |
| Project complexity       | The level of difficulty and scope of previous projects (small, medium, or large).              | 0.4    |
| Achievements and results | Impact of their work, such as completed projects, increased productivity, reduced errors, etc. | 0.6    |

These criteria determine whether the candidate has the competence and adaptability required for success in the role.

### Cultural Fit

Cultural fit assesses how well the candidate’s values, beliefs, and behaviors align with the organization.

| Skill                                           | Criterion                                                                                 | Weight |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------- | ------ |
| Cultural Fit                                    |                                                                                           | 2      |
| Alignment with the company’s core values        | Compatibility with the company’s fundamental principles.                                  | 0.5    |
| Commitment to organizational mission and vision | Motivation to contribute to the organization’s goals.                                     | 0.25   |
| Adaptation to methodology and work style        | Ability to adapt to the company’s methodologies, such as agile development.               | 0.5    |
| Fit with leadership style                       | Compatibility with the company’s leadership approach (hierarchical, collaborative, etc.). | 0.75   |

These criteria help determine whether the candidate can successfully integrate into the company’s culture.

### Cultural Contribution

Cultural contribution evaluates how the candidate could bring new perspectives and diversity to the company culture.

| Skill                                     | Criterion                                                                             | Weight |
| ----------------------------------------- | ------------------------------------------------------------------------------------- | ------ |
| Cultural Contribution                     |                                                                                       | 1      |
| Diversity of thought and approach         | Ability to contribute new approaches, solutions, or ideas.                            | 0.5    |
| Innovation and new skills                 | Introduction of technical or methodological skills not currently present in the team. | 0.25   |
| International or multicultural experience | Experience in culturally diverse teams or international markets.                      | 0.25   |

These criteria measure how the candidate can enhance the company’s culture through diversity, innovation, and unique skills.

## Full Matrix

Here is a breakdown of the key skills, criteria, and weights for a role:

| Skill                                                               | Criterion                                                                                      | Weight |
| ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------ |
| **Technical Skills**                                                |                                                                                                | 3      |
| &nbsp;&nbsp;&nbsp;&nbsp;Programming languages                       | Proficiency in relevant programming languages.                                                 | 1      |
| &nbsp;&nbsp;&nbsp;&nbsp;Frameworks and libraries                    | Proficiency in frameworks and libraries relevant to the role.                                  | 0.5    |
| &nbsp;&nbsp;&nbsp;&nbsp;API Development                             | Ability to design and build RESTful or GraphQL APIs and understand their integration.          | 0.5    |
| &nbsp;&nbsp;&nbsp;&nbsp;Testing and code quality                    | Familiarity with testing practices such as TDD or BDD.                                         | 1      |
| **Soft Skills**                                                     |                                                                                                | 2      |
| &nbsp;&nbsp;&nbsp;&nbsp;Communication                               | Ability to express ideas and concepts clearly.                                                 | 0.5    |
| &nbsp;&nbsp;&nbsp;&nbsp;Teamwork                                    | Efficiency in collaborating with others and building relationships at work.                    | 0.5    |
| &nbsp;&nbsp;&nbsp;&nbsp;Adaptability                                | Flexibility and willingness to learn and adjust to new situations.                             | 0.5    |
| &nbsp;&nbsp;&nbsp;&nbsp;Problem-solving                             | Ability to identify, analyze, and solve problems effectively.                                  | 0.5    |
| **Experience**                                                      |                                                                                                | 3      |
| &nbsp;&nbsp;&nbsp;&nbsp;Years of experience                         | Total years of experience relevant to the position.                                            | 1      |
| &nbsp;&nbsp;&nbsp;&nbsp;Relevant projects                           | Participation in significant projects that demonstrate key skills.                             | 1      |
| &nbsp;&nbsp;&nbsp;&nbsp;Project complexity                          | The level of difficulty and scope of previous projects (small, medium, or large).              | 0.5    |
| &nbsp;&nbsp;&nbsp;&nbsp;Achievements and results                    | Impact of their work, such as completed projects, increased productivity, reduced errors, etc. | 0.5    |
| **Cultural Fit**                                                    |                                                                                                | 2      |
| &nbsp;&nbsp;&nbsp;&nbsp;Alignment with the company’s core values    | Compatibility with the company’s fundamental principles.                                       | 0.5    |
| &nbsp;&nbsp;&nbsp;&nbsp;Commitment to organizational mission/vision | Motivation to contribute to the organization’s goals.                                          | 0.25   |
| &nbsp;&nbsp;&nbsp;&nbsp;Adaptation to methodology and work style    | Ability to adapt to the company’s methodologies, such as agile development.                    | 0.5    |
| &nbsp;&nbsp;&nbsp;&nbsp;Fit with leadership style                   | Compatibility with the company’s leadership approach (hierarchical, collaborative, etc.).      | 0.75   |
| **Cultural Contribution**                                           |                                                                                                | 1      |
| &nbsp;&nbsp;&nbsp;&nbsp;Diversity of thought and approach           | Ability to contribute new approaches, solutions, or ideas.                                     | 0.5    |
| &nbsp;&nbsp;&nbsp;&nbsp;Innovation and new skills                   | Introduction of technical or methodological skills not currently present in the team.          | 0.25   |
| &nbsp;&nbsp;&nbsp;&nbsp;International or multicultural experience   | Experience in culturally diverse teams or international markets.                               | 0.25   |

Now that we have defined the key skills, criteria, and weights for the role, we can use this matrix in the hiring
process to evaluate candidates based on their skills, experience, and cultural fit.

## Evaluation

Once candidates are evaluated, the following columns will be added to the matrix:

- **Observations**: Specific notes or feedback on the candidate's performance in each criterion.
- **Score**: A numerical score between 1 to 10, where 1 is the lowest possible score and 10 is the top score. It is
  assigned to each skill based on the candidate's performance based on the criterion.
- **Total Score**: The sum of all scores for each candidate. The mathematical formula to describe this would be: Total
  Score = `∑(S × W)`

| Skill                                                               | Criterion                                                                                      | Weight | Observations                                                                                                     | Score | Total Score |
| ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------- | ----- | ----------- |
| **Technical Skills**                                                |                                                                                                | 3      |                                                                                                                  |       |             |
| &nbsp;&nbsp;&nbsp;&nbsp;Programming languages                       | Proficiency in relevant programming languages.                                                 | 1      | Strong proficiency in Python and JavaScript. Needs improvement in TypeScript.                                    | 7     | 7           |
| &nbsp;&nbsp;&nbsp;&nbsp;Frameworks and libraries                    | Proficiency in frameworks and libraries relevant to the role.                                  | 0.5    | Experienced in React and Redux but lacks practical experience in modern state management libraries like Zustand. | 6     | 3           |
| &nbsp;&nbsp;&nbsp;&nbsp;API Development                             | Ability to design and build RESTful or GraphQL APIs and understand their integration.          | 0.5    | Good understanding of RESTful APIs, has built GraphQL APIs but at a beginner level.                              | 5     | 2.5         |
| &nbsp;&nbsp;&nbsp;&nbsp;Testing and code quality                    | Familiarity with testing practices such as TDD or BDD.                                         | 1      | Knowledge of TDD but limited real-world experience. Code quality meets acceptable standards.                     | 5     | 5           |
| **Soft Skills**                                                     |                                                                                                | 2      |                                                                                                                  |       |             |
| &nbsp;&nbsp;&nbsp;&nbsp;Communication                               | Ability to express ideas and concepts clearly.                                                 | 0.5    | Communicates effectively, clear and concise but needs to work on articulating complex technical concepts.        | 8     | 4           |
| &nbsp;&nbsp;&nbsp;&nbsp;Teamwork                                    | Efficiency in collaborating with others and building relationships at work.                    | 0.5    | Works well in teams, encourages open communication but sometimes dominates discussions.                          | 7     | 3.5         |
| &nbsp;&nbsp;&nbsp;&nbsp;Adaptability                                | Flexibility and willingness to learn and adjust to new situations.                             | 0.5    | Shows flexibility in learning new frameworks, although slow in adapting to significant changes in workflows.     | 6     | 3           |
| &nbsp;&nbsp;&nbsp;&nbsp;Problem-solving                             | Ability to identify, analyze, and solve problems effectively.                                  | 0.5    | Great problem-solving skills but occasionally relies too much on external help for complex issues.               | 7     | 3.5         |
| **Experience**                                                      |                                                                                                | 3      |                                                                                                                  |       |             |
| &nbsp;&nbsp;&nbsp;&nbsp;Years of experience                         | Total years of experience relevant to the position.                                            | 1      | 5 years of relevant experience, providing a solid foundation for the role.                                       | 8     | 8           |
| &nbsp;&nbsp;&nbsp;&nbsp;Relevant projects                           | Participation in significant projects that demonstrate key skills.                             | 1      | Worked on a few large-scale projects but lacking experience with cutting-edge technologies.                      | 6     | 6           |
| &nbsp;&nbsp;&nbsp;&nbsp;Project complexity                          | The level of difficulty and scope of previous projects (small, medium, or large).              | 0.5    | Handled projects of medium complexity, yet to take the lead on large-scale initiatives.                          | 6     | 3           |
| &nbsp;&nbsp;&nbsp;&nbsp;Achievements and results                    | Impact of their work, such as completed projects, increased productivity, reduced errors, etc. | 0.5    | Made a positive impact, improved code efficiency, reduced errors, but few groundbreaking achievements.           | 7     | 3.5         |
| **Cultural Fit**                                                    |                                                                                                | 2      |                                                                                                                  |       |             |
| &nbsp;&nbsp;&nbsp;&nbsp;Alignment with the company’s core values    | Compatibility with the company’s fundamental principles.                                       | 0.5    | Strong alignment with the company’s ethical and collaborative values.                                            | 9     | 4.5         |
| &nbsp;&nbsp;&nbsp;&nbsp;Commitment to organizational mission/vision | Motivation to contribute to the organization’s goals.                                          | 0.25   | Expresses enthusiasm for the company’s vision but lacks clear ideas for long-term contributions.                 | 7     | 1.75        |
| &nbsp;&nbsp;&nbsp;&nbsp;Adaptation to methodology and work style    | Ability to adapt to the company’s methodologies, such as agile development.                    | 0.5    | Understands agile development well, adapts easily to changes in sprints and retrospectives.                      | 8     | 4           |
| &nbsp;&nbsp;&nbsp;&nbsp;Fit with leadership style                   | Compatibility with the company’s leadership approach (hierarchical, collaborative, etc.).      | 0.75   | Easily adaptable to collaborative leadership styles, enjoys autonomy.                                            | 9     | 6.75        |
| **Cultural Contribution**                                           |                                                                                                | 1      |                                                                                                                  |       |             |
| &nbsp;&nbsp;&nbsp;&nbsp;Diversity of thought and approach           | Ability to contribute new approaches, solutions, or ideas.                                     | 0.5    | Demonstrates creative thinking, often suggests alternative approaches to solve issues.                           | 8     | 4           |
| &nbsp;&nbsp;&nbsp;&nbsp;Innovation and new skills                   | Introduction of technical or methodological skills not currently present in the team.          | 0.25   | Brought in ideas for new work methodologies but hasn't introduced any groundbreaking skills or technologies yet. | 6     | 1.5         |
| &nbsp;&nbsp;&nbsp;&nbsp;International or multicultural experience   | Experience in culturally diverse teams or international markets.                               | 0.25   | Limited experience in international teams but adaptable to different cultural contexts.                          | 5     | 1.25        |

### Final Score: **75.75**

The final score for this candidate would be the total sum of all the scores multiplied by their respective weights. In
this case, the candidate scored **75.75** out of a possible 100.

### Horizontal Evaluation Matrix

For simplicity, we are omitting the breakdown skills of each category. This matrix represents an aggregate view of each
candidate's evaluation across major skill categories, with the final score reflecting the weighted sum for each
candidate.

| Candidate   | Technical Skills (3) | Soft Skills (2) | Experience (3) | Cultural Fit (2) | Cultural Contribution (1) | Total Score |
| ----------- | -------------------- | --------------- | -------------- | ---------------- | ------------------------- | ----------- |
| Candidate A | 5 (15)               | 8 (16)          | 5 (15)         | 6 (12)           | 8 (8)                     | 66          |
| Candidate B | 7 (21)               | 7 (14)          | 7 (21)         | 7 (14)           | 6 (6)                     | 76          |
| Candidate C | 6 (18)               | 9 (18)          | 6 (18)         | 8 (16)           | 7 (8)                     | 78          |
| Candidate D | 8 (24)               | 6 (12)          | 6 (18)         | 7 (14)           | 6 (6)                     | 74          |

### Conclusion

In this example, **Candidate C** did not score the highest in **Technical Skills** (scoring 6), but they significantly
outperform in **Soft Skills**, **Cultural Fit**, and **Cultural Contribution**. This balanced profile, with strong
interpersonal and cultural strengths, makes **Candidate C** a more compelling fit for the company’s needs. Their total
score of **78** reflects their well-rounded abilities, positioning them as a candidate who could integrate well with the
team, even without being the strongest technically.

This scenario shows how modern hiring practices consider a variety of factors, such as communication, adaptability, and
cultural alignment. It demonstrates that a candidate can still be a great fit for the team without necessarily excelling
in one specific area, particularly when their strengths match what the company values most in its employees.

## Open Source

The OHM is an open-source project, and we encourage companies to adopt and adapt this framework to their specific needs.
We also welcome contributions to enhance and expand the OHM to better serve the hiring process.

## Web Application

We are planning to provide a web application that will allow companies to:

- Define matrices with skills and weights.
- Input candidate scores and observations, and calculate total scores.
- Share links to hiring matrices on job applications.
- Share evaluation results privately with candidates.

## Feedback

We welcome feedback and suggestions for improving OHM. Please share your thoughts and experiences to help us refine and
enhance this tool.

### Human-Created / AI-Assisted

The idea, concept, structure, and formulation of this framework were human-created. However, parts of this document were
created with the assistance of Chat GPT.
