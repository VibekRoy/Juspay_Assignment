# 🔁 Flipkart Payment Flow Automation - Cypress

This project automates the **Flipkart payment process** using Cypress, simulating both **successful and failed UPI payment flows**. It includes good practices like fixtures for data management, custom commands, and URL-based flow validation.

## Demo Video

https://drive.google.com/file/d/1inyCCFZDLoLsPa1jUJHEsJh-HHLpZ4Lr/view?usp=sharing

---

## 📌 What’s Covered?

- ✅ UPI Payment Success Flow
- ❌ Payment Failure Handling
- 📁 Fixture-based data input (`user.json`)
- 🧩 Use of aliasing (`this.userData`)
- 🧪 Assertions for confirmation messages & URLs
- 📸 Screenshots for payment success

---

## 🧪 Test Cases

| Test Name                | Description                                      | Outcome                                  |
|--------------------------|--------------------------------------------------|------------------------------------------|
| **Flipkart Payment Success** | Simulates UPI payment and verifies success      | ✅ Navigates to order confirmation screen |
| **Flipkart Payment Failure** | Enters UPI and simulates failure               | ❌ Remains on retry (`/checkout`) page    |

## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/VibekRoy/Juspay_Assignment.git
cd Juspay_Assignment
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Tests
```bash
npx cypress open
```

✏️ Update the cypress/fixtures/user.json file with your own name, phone number, UPI ID, and address before running the tests to simulate real-time behavior.

## 📝 Notes
Login is simulated via phone number and button click.

Payment Completion Wait: Test waits up to 60 seconds for payment to complete.

Auto Logout Handling: If Flipkart redirects to login after order, the URL still contains /orderresponse? so the test passes based on that check.

## 📸 Screenshot Support

After payment success, a screenshot is automatically saved!!!

