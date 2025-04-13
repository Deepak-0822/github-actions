
Slide 1: Title Slide
Title:
CI Workflow for Node.js and Python using GitHub Actions

Subtitle:
Seamless Deployment with Multi-Environment Support

Presented by: [Your Name]

Slide 2: Agenda
Introduction to the CI Workflow

GitHub Actions Workflow Triggers

Multi-Language Build Strategy

Caching for Faster Builds

Secrets and Variables

Demo Execution Steps

Q&A

Slide 3: CI Workflow Overview
Single CI pipeline supporting Node.js and Python

Triggered on:

Push to main branch

Pull Request creation

Manual trigger with environment choice

Supports environments: dev, stg, uat, prod

Slide 4: GitHub Actions Triggers
push: Automatically triggers when changes are pushed to main

pull_request: Triggers for PR validation

workflow_dispatch: Manual trigger with input (target-env)

inputs:
  target-env:
    default: stg
    options: [dev, stg, uat, prod]
Slide 5: Build Strategy
Matrix builds run on multiple OS if needed (currently Ubuntu)

Max 3 parallel jobs

Job concurrency with group control:

concurrency:
  group: Node & py deployment
  cancel-in-progress: false
Slide 6: Caching Dependencies
Speeds up builds by restoring dependencies

Node.js: ~/.npm

Python: ~/.cache/pip

Uses hash of lock/requirements files for cache key

key: ${{ matrix.os }}-node-${{ hashFiles('nodejs/package-lock.json') }}
Slide 7: Secrets and Variables
GitHub Secrets: PASSWORD

GitHub Variables: USER_NAME

Used securely in the pipeline

echo "PASSWORD is set but hidden: ${{ secrets.PASSWORD }}"
echo "User_name is set but hidden: ${{ vars.USER_NAME }}"
Slide 8: Demo Execution
Command:
Manually trigger the workflow with target-env input

Expected Output:

Deploying JAR to ${{ github.event.inputs.environment }} environment
Key Steps in Demo:

Trigger the workflow manually with input

Watch job execution: Checkout, install dependencies

Observe caching, secret usage, and logs

Slide 9: Summary
Robust CI pipeline for Node.js & Python

Environment-specific deploys

Efficient builds using caching

Secure handling of secrets and variables

Easily extendable for future enhancements# github-actions
