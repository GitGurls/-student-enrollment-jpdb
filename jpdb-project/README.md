# Student Enrollment Form — JsonPowerDB

A simple Student Enrollment Form built using **JsonPowerDB (JPDB)** as the backend database.

## 📌 Description

This micro project demonstrates how to use JsonPowerDB for basic CRUD operations in a web form. The form allows users to:
- **Save** new student records
- **Update** existing student records
- **Reset** the form

## 🛠️ Tech Stack

- HTML5
- CSS3 + Bootstrap 4
- JavaScript (Vanilla)
- **JsonPowerDB** (REST API based database)

## ✨ Features

- Roll Number as Primary Key
- Auto-fetch existing record when Roll No is entered
- Save new student data to JPDB
- Update existing student data
- Form validation
- Responsive design

## 📋 Database Schema

| Field | Type | Description |
|---|---|---|
| RollNo | String | Primary Key |
| Name | String | Student Full Name |
| Class | String | Student Class |
| BirthDate | Date | Date of Birth |
| Address | String | Student Address |
| EnrollDate | Date | Enrollment Date |

## 🚀 How to Run

1. Clone this repository
2. Open `index.html` in browser
3. Replace `TOKEN` in `app.js` with your JsonPowerDB token
4. Fill Roll Number and student details
5. Click Save to store data in JsonPowerDB

## 🔑 JsonPowerDB Setup

1. Register at [api.login2explore.com](http://api.login2explore.com)
2. Get your Connection Token from dashboard
3. Replace token in `app.js` line 7

## 📚 Illustrations

- JsonPowerDB is a Real-time, High Performance, Lightweight and Simple to Use, Rest API based Multi-mode DBMS
- Supports JSON document DB, RDBMS, Key-value DB, GeoSpatial DB
- Schema-free and Serverless

## 👩‍💻 Developer

**Soni Gupta**  
Login2Xplore Internship Project.
