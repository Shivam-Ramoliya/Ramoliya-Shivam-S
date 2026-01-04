import emailjs from "@emailjs/browser";

// Load environment variables (Vite)
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const AUTO_REPLY_TEMPLATE_ID = import.meta.env
  .VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

/**
 * Check whether EmailJS is properly configured
 * @returns {boolean}
 */
export const isEmailJSConfigured = () => {
  return Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);
};

/**
 * Send email using EmailJS
 * Sends both notification to you and auto-reply to sender
 * @param {Object} params
 * @param {string} params.name
 * @param {string} params.email
 * @param {string} params.subject
 * @param {string} params.message
 * @returns {Promise}
 */
export const sendEmail = async ({ name, email, subject, message }) => {
  if (!isEmailJSConfigured()) {
    throw new Error("EmailJS environment variables are missing");
  }

  const emailData = {
    name,
    email,
    subject,
    message,
  };

  try {
    // Send notification email to you (portfolio owner)
    const notificationPromise = emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      emailData,
      PUBLIC_KEY
    );

    // Send auto-reply to the sender (if template configured)
    let autoReplyPromise = Promise.resolve();
    if (AUTO_REPLY_TEMPLATE_ID) {
      autoReplyPromise = emailjs.send(
        SERVICE_ID,
        AUTO_REPLY_TEMPLATE_ID,
        emailData,
        PUBLIC_KEY
      );
    }

    // Wait for both emails to send
    const [notificationResult, autoReplyResult] = await Promise.allSettled([
      notificationPromise,
      autoReplyPromise,
    ]);

    // Check if notification email succeeded (this is critical)
    if (notificationResult.status === "rejected") {
      throw new Error(
        notificationResult.reason?.text || "Failed to send notification email"
      );
    }

    // Log auto-reply status but don't fail if it doesn't work
    if (autoReplyResult.status === "rejected") {
      console.warn("Auto-reply failed:", autoReplyResult.reason);
    } else if (AUTO_REPLY_TEMPLATE_ID) {
      console.log("Auto-reply sent successfully");
    }

    return notificationResult.value;
  } catch (error) {
    console.error("Email send error:", error);
    throw error;
  }
};
