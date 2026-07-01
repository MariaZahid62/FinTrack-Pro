# 💰 FinTrack Pro

> **Premium Personal Finance Management Dashboard**

A modern, responsive, and feature-rich personal finance web application that helps users track income, expenses, budgets, and financial activities with real-time insights — all running entirely in the browser with zero backend dependencies.

[![Live Demo](https://img.shields.io/badge/🔗_Live_Demo-Visit_Site-0ea5e9?style=for-the-badge)](https://mariazahid62.github.io/FinTrack-Pro/)

---

## ✨ Features

### 📊 Dashboard
- **Financial Overview Cards** — Total Balance, Income, Expenses, and Savings at a glance
- **Cash Flow Chart** — Interactive line chart comparing income vs expenses over time
- **Expense Breakdown** — Doughnut chart visualizing spending by category
- **Recent Activity** — Quick view of latest transactions with status indicators
- **Real-time calculations** — All metrics auto-update as transactions change

### 💳 Transaction Management
- **Add Transactions** — Record income and expenses with descriptions, categories, dates, and amounts
- **Edit Transactions** — Modify existing records inline
- **Delete Transactions** — Remove entries with confirmation
- **Advanced Filtering** — Search by keyword, filter by type (income/expense), category, and sort by date or amount
- **Category Icons** — Visual icons for each transaction category
- **Status Tracking** — Mark transactions as Completed or Pending

### 🏦 Accounts
- **Virtual Bank Card** — Stylish platinum savings card with animated shine effect
- **Account Balance** — Live balance display
- **Savings Goals** — Visual progress bars toward financial targets
- **Monthly Inflow Tracking** — Monitor income against budget
- **Credit Usage** — Track credit utilization with health indicators

### 🎯 Budget Planner
- **Create Budgets** — Set spending limits per category
- **Visual Progress** — Color-coded progress bars showing budget consumption
- **Budget Alerts** — Warnings when approaching or exceeding limits
- **Category-based Tracking** — Monitor spending against each budget category

### 📈 Reports & Analytics
- **Annual Overview** — Bar chart showing monthly expense trends
- **Income Sources** — Doughnut chart breaking down income by category
- **Expense Breakdown** — Detailed category-wise expense analysis
- **Interactive Charts** — Powered by Chart.js with hover tooltips

### 👤 User Profile
- **Personal Information Management** — Name, email, phone, date of birth, occupation, location
- **Profile Picture Upload** — Upload and save custom avatar (base64 stored in LocalStorage)
- **Profile Settings** — Currency, language, and timezone preferences
- **Account Preferences** — Toggle email notifications, budget alerts, weekly reports, auto-backup, compact view
- **Security Settings** — Change password, two-factor authentication toggle, login notifications
- **Account Stats** — Member since, total transactions, active budgets, last login
- **Danger Zone** — Clear all data or reset to defaults with confirmation dialogs

### 🌓 Dark Mode (Default)
- **Dark-first Design** — Application loads in dark mode by default
- **Toggle Switch** — Seamlessly switch between dark and light themes
- **Persistent Theme** — Selected theme saved to LocalStorage
- **Full UI Adaptation** — All components, charts, and modals adapt to the active theme

### 💾 Data Management
- **LocalStorage Persistence** — All data saved locally in the browser
- **Import Data** — Upload JSON or CSV files to bulk import transactions
- **Export Data** — Download transactions as CSV or JSON
- **Export Reports** — Generate comprehensive financial reports as JSON
- **Full Backup** — Create complete backups including all settings
- **Restore Data** — Restore from previously created backup files
- **No Backend Required** — Completely client-side operation

### 📱 Responsive Design
- **Mobile-First** — Optimized for all screen sizes
- **Mobile Bottom Navigation** — Easy tab switching on mobile devices
- **Adaptive Layouts** — Grid systems that reflow on smaller screens
- **Touch-Friendly** — All interactive elements work smoothly on touch devices

---

## 🚀 Live Demo

**🔗 [https://mariazahid62.github.io/FinTrack-Pro/](https://mariazahid62.github.io/FinTrack-Pro/)**

> **Demo Credentials**
> - Email: `alex@fintrack.com`
> - Password: `password123`

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic markup and structure |
| **CSS3** | Custom styling with CSS variables for theming |
| **JavaScript (ES6+)** | Application logic, state management, DOM manipulation |
| **Tailwind CSS (CDN)** | Utility-first CSS framework for rapid styling |
| **Chart.js** | Interactive data visualization and analytics charts |
| **Font Awesome 6** | Icon library for UI elements |
| **Google Fonts** | Plus Jakarta Sans & Space Grotesk typography |
| **LocalStorage API** | Client-side data persistence |

---

## 📂 Project Structure

```
FinTrack-Pro/
├── index.html          # Main application file (single-page architecture)
├── README.md           # Project documentation
```

> **Note:** This is a single-file application. All HTML, CSS, and JavaScript are contained within `index.html` for simplicity and portability.

---

## 🎨 UI/UX Highlights

- **Glassmorphism Effects** — Frosted glass header with backdrop blur
- **Gradient Accents** — Beautiful sky-to-purple gradient branding
- **Animated Bank Card** — Shimmering shine animation on the virtual card
- **Smooth Page Transitions** — Fade and slide animations between sections
- **Custom Scrollbar** — Styled scrollbars matching the theme
- **Toast Notifications** — Non-intrusive success/error/info messages
- **Modal Dialogs** — Centered modals with backdrop blur and scale animations
- **Hover Effects** — Interactive card lifts, color transitions, and glows
- **Loading States** — Animated spinners during authentication

---

## ⚡ Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No server or build tools required!

### Local Setup
1. **Clone the repository**
   ```bash
   git clone https://github.com/mariazahid62/FinTrack-Pro.git
   ```

2. **Navigate to the project folder**
   ```bash
   cd FinTrack-Pro
   ```

3. **Open in browser**
   - Simply double-click `index.html`, or
   - Use a live server extension in VS Code

4. **Start tracking your finances!** 💰

---

## 💡 Usage Guide

| Action | How To |
|--------|--------|
| **Add Transaction** | Click "Add Transaction" button → Fill form → Save |
| **Edit Transaction** | Click pencil icon on any transaction row |
| **Delete Transaction** | Click trash icon → Confirm deletion |
| **Create Budget** | Go to Budgets → Click "Create Budget" → Set limit |
| **Edit Profile** | Go to Profile → Click "Edit Profile" → Update info |
| **Change Password** | Profile → Security → Click "Change" |
| **Upload Avatar** | Profile → Click camera icon on avatar |
| **Toggle Theme** | Sidebar → Click "Light Mode" toggle |
| **Export Data** | Transactions → Export → Choose format |
| **Import Data** | Transactions → Import → Select file |
| **Backup Everything** | Transactions → Backup → Download JSON |

---

## 🔐 Data Storage

All data is stored in your browser's **LocalStorage** under these keys:

| Key | Data |
|-----|------|
| `fintrack_data` | Transactions, budgets, user settings |
| `fintrack_profile` | Profile information and preferences |

> **⚠️ Important:** Clearing browser data will erase all your financial records. Use the **Backup** feature regularly!

---

## 🌟 Key Features in Detail

### Authentication Flow
- Simple login form with email/password validation
- Simulated authentication delay with loading spinner
- "Remember me" checkbox (UI only)
- Logout functionality with confirmation toast

### Transaction Categories
**Income:** Salary, Freelance, Investments  
**Expenses:** Food & Dining, Shopping, Transportation, Bills & Utilities, Entertainment, Healthcare, Education

### Budget Monitoring
- Visual progress bars with gradient colors
- Automatic percentage calculation
- "On Track" / "Near Limit" / "Over Budget" status indicators
- Color-coded warnings (green → amber → red)

### Chart Visualizations
- **Line Chart** — Income vs Expenses over 6 months
- **Doughnut Charts** — Category breakdown for expenses and income
- **Bar Chart** — Monthly expense analysis in Reports
- **Theme-aware** — Charts adapt colors based on dark/light mode

---

## 🎯 Future Enhancements

- [ ] Multi-currency support with real-time exchange rates
- [ ] Recurring transactions (subscriptions, salaries)
- [ ] Financial goal setting with milestone tracking
- [ ] PDF report generation
- [ ] Data encryption for enhanced security
- [ ] Cloud sync option (optional backend integration)
- [ ] Bill reminders and due date notifications
- [ ] Spending insights with AI-powered suggestions

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve FinTrack Pro:

---

## 👩‍💻 Developer

**Maria Zahid**  
*For Zynvex Solutions*

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/maria-zahid-056a87327)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:mariazahid404@gmail.com)

---


</div>
