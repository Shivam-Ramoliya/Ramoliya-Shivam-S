# Email Setup Guide - Auto-Reply Feature

This guide will help you set up the contact form with automatic reply functionality using EmailJS.

## 📋 What You'll Get

1. **Notification Email** - You receive the contact form submission
2. **Auto-Reply Email** - Sender gets an automatic acknowledgment with message summary

## 🚀 Setup Instructions

### Step 1: Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

### Step 2: Create Email Service

1. In EmailJS Dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the connection steps
5. Copy the **Service ID** (e.g., `service_xxxxxx`)

### Step 3: Create Notification Template

1. Go to **Email Templates** in EmailJS
2. Click **Create New Template**
3. Name it: "Portfolio Contact Notification"
4. Open `EMAIL_TEMPLATE.html` file
5. Copy ALL the HTML code (including DOCTYPE)
6. Paste it in the **Content** section
7. In **Settings**, set:
   - **To email**: Your email address (where you want to receive messages)
   - **From name**: `{{name}}`
   - **From email**: Use your verified email
   - **Reply to**: `{{email}}`
8. Save and copy the **Template ID** (e.g., `template_xxxxxx`)

### Step 4: Create Auto-Reply Template

1. Click **Create New Template** again
2. Name it: "Portfolio Auto-Reply"
3. Open `AUTO_REPLY_TEMPLATE.html` file
4. Copy ALL the HTML code
5. Paste it in the **Content** section
6. In **Settings**, set:
   - **To email**: `{{email}}` (sender's email - IMPORTANT!)
   - **From name**: Your name (e.g., "Shivam S. Ramoliya")
   - **From email**: Your verified email
   - **Subject**: "Thank you for contacting me - Message Received ✅"
7. **Update the template** to include your social links:
   - Find the "Social Links" section in the HTML
   - Replace placeholder URLs with your actual portfolio, LinkedIn, GitHub links
8. Save and copy the **Template ID** (e.g., `template_yyyyyy`)

### Step 5: Get Public Key

1. Go to **Account** → **General**
2. Find **Public Key** section
3. Copy your public key (e.g., `aBcDeFgHiJkLmN`)

### Step 6: Update .env File

Create or update your `.env` file in the project root:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=service_xxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxx
VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID=template_yyyyyy
VITE_EMAILJS_PUBLIC_KEY=aBcDeFgHiJkLmN
```

Replace the values with your actual IDs from EmailJS.

### Step 7: Restart Dev Server

```bash
npm run dev
```

## ✅ Testing

1. Fill out the contact form on your website
2. Submit the message
3. You should receive:

   - ✉️ Notification email at your configured address
   - ✅ Auto-reply sent to the form submitter

4. Check both emails:
   - Notification should have the gradient header "New Message Received"
   - Auto-reply should have "Message Received!" header with message summary

## 🎨 Customization

### Update Social Links in Auto-Reply

Edit `AUTO_REPLY_TEMPLATE.html`:

```html
<a href="https://your-portfolio-url.com">My Portfolio</a>
<a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
<a href="https://github.com/yourprofile">GitHub</a>
```

### Customize Response Time

In `AUTO_REPLY_TEMPLATE.html`, find:

```html
⏱️ <strong>Typical Response Time:</strong> I usually respond within 24-48 hours
```

### Update Your Name/Title

In the auto-reply footer, update:

```html
<p>Shivam S. Ramoliya</p>
<p>Full Stack Developer | AI-ML Enthusiast</p>
```

## 🔧 Troubleshooting

### Auto-Reply Not Sending

- Verify `VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID` is set in `.env`
- Check EmailJS template has `{{email}}` in "To email" field
- Verify service email is connected and active

### Both Emails Not Sending

- Check all environment variables are correct
- Verify public key is valid
- Check EmailJS dashboard for error logs
- Ensure service is active (not suspended)

### Template Not Loading Properly

- Make sure you copied the ENTIRE HTML including `<!DOCTYPE html>`
- Variables must use double curly braces: `{{name}}` not `{name}`
- All templates must be saved in EmailJS

## 📊 Email Templates Features

### Notification Email (to you)

- ✉️ Gradient header design
- 📇 Organized sender info cards
- 💬 Clean message display
- 🔘 One-click reply button
- 📅 Timestamp

### Auto-Reply Email (to sender)

- ✅ Welcoming confirmation
- 📋 Message summary for reference
- ⏱️ Expected response time
- 🔗 Social links to your profiles
- 💼 Professional signature

## 🎯 Optional Features

To disable auto-reply but keep notifications:

1. Remove `VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID` from `.env`
2. The code will only send notification emails

## 📝 Notes

- EmailJS free tier: 200 emails/month
- Both emails count toward your quota
- Auto-reply failures won't block the notification email
- Check spam folder if emails don't arrive

---

Need help? Check [EmailJS Documentation](https://www.emailjs.com/docs/)
