<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/21fd52ef-8e79-4f05-ac16-cbe8898e1aeb

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
AI‑Powered Interactive Sales Analytics Dashboard
An AI‑generated interactive dashboard that visualizes sales data through dynamic charts, KPIs, and real‑time filtering. Built using Google AI Studio, this dashboard automatically processes CSV data and generates a complete analytics interface — including revenue trends, product performance, payment breakdowns, and transaction logs.

This project demonstrates practical skills in data visualization, AI‑assisted development, prompt engineering, and dashboard design.

Overview
The Sales Analytics Dashboard transforms raw CSV data into a fully interactive business intelligence interface. It includes:

- Real‑time KPIs

- Revenue trend analysis

- Product performance charts

- Payment method distribution

- Daily order volume

- Searchable transaction table

- Responsive UI with modern styling

The entire dashboard was generated and iteratively improved using Gemini 3 Flash Preview with visual annotations.

Key Features
1. Real‑Time KPIs

- Total Revenue

- Total Orders

- Average Order Value

- Top Performing Product

2. Interactive Charts

- Revenue Trend (line/area chart)

- Top Products by Volume (horizontal bar chart)

- Payment Method Distribution (pie chart)

- Daily Order Volume (bar chart)

3. Transaction Ledger

- Searchable

- Paginated

- Displays order ID, product, date, payment method, and amount

4. Modern UI

- Tailwind CSS

- Motion animations

- Clean sidebar layout

- Mobile‑first responsive design

Skills Demonstrated

- AI‑assisted app development

- Multi‑step prompt engineering

- Data visualization with Recharts

- CSV parsing and data transformation

- UI/UX design for dashboards

- Debugging with AI Studio’s Auto‑Fix

- Technical documentation

- Frontend structure understanding (React + TypeScript)

Folder Structure

ai-interactive-dashboard/
│
├── src/
│   ├── components/
│   │   ├── StatCard.tsx
│   │   ├── Charts.tsx
│   │   └── OrderTable.tsx
│   ├── data.ts
│   ├── utils.ts
│   └── App.tsx
│
├── data/
│   └── SalesData.csv
│
├── screenshots/
│   ├── dashboard-overview.png
│   ├── kpi-cards.png
│   ├── revenue-trend.png
│   └── transactions.png
│
├── metadata.json
├── package.json
├── tsconfig.json
└── README.md

Project Highlights
- Built a complete BI dashboard without manually coding the UI

- Used visual annotations to redesign KPI cards and layout

- Automatically generated charts and filters based on dataset

- Demonstrated real‑world analytics workflows

- Published as a live, interactive tool

Use Cases

- Sales performance monitoring

- Product trend analysis

- Payment method insights

- Daily order tracking

- Business intelligence dashboards

- Data exploration for non‑technical users

Screenshots

<img width="975" height="688" alt="Screenshot 2026-03-23 at 8 49 23 pm" src="https://github.com/user-attachments/assets/e5a81d5f-e0e7-4c36-9ac5-7ae22c112084" />

<img width="901" height="210" alt="Screenshot 2026-03-23 at 8 44 42 pm" src="https://github.com/user-attachments/assets/30d0774a-386d-4dde-9968-3c1dfeafb6ce" />

<img width="432" height="360" alt="Screenshot 2026-03-23 at 8 44 51 pm" src="https://github.com/user-attachments/assets/303f4bf8-9259-4f45-bd06-f14261024219" />

<img width="432" height="359" alt="Screenshot 2026-03-23 at 8 44 57 pm" src="https://github.com/user-attachments/assets/288e86c2-1341-442d-85d8-87ac64ae640c" />

<img width="434" height="357" alt="Screenshot 2026-03-23 at 8 45 05 pm" src="https://github.com/user-attachments/assets/51b5cbd2-e5e1-4aab-ac75-04a59181c0cb" />

<img width="429" height="360" alt="Screenshot 2026-03-23 at 8 45 10 pm" src="https://github.com/user-attachments/assets/62bd92a5-718b-439c-85ff-3fb23b42da43" />

<img width="891" height="696" alt="Screenshot 2026-03-23 at 8 45 16 pm" src="https://github.com/user-attachments/assets/c3b1e2c6-5c3f-49b8-b0ab-fe0d019ec138" />
