export const getBotReply = (keyword) => {
  const input = keyword.toLowerCase();

  if (input.includes("hello") || input.includes("hi")) {
    return "Hello! I'm the UpgradeU Assistant. How can I assist you today?";
  }

  if (input.includes("course") || input.includes("java") || input.includes("python")) {
    return "📘 We offer comprehensive tracks in Java (Full Stack), Python (AI & Data Science), and MERN Stack. Which one interests you?";
  }

  if (input.includes("certificate") || input.includes("degree")) {
    return "🎓 Yes! Upon completing a course and its final project, you receive an industry-recognized certificate from RR Global IT Services.";
  }

  if (input.includes("payment") || input.includes("fees") || input.includes("cost")) {
    return "💳 Our courses are competitively priced. You can pay via UPI, Cards, or EMI options. Need specific pricing for a course?";
  }

  if (input.includes("mentor") || input.includes("help") || input.includes("teacher")) {
    return "🧑‍🏫 You get 1-on-1 mentor support and daily live doubt-clearing sessions.";
  }

  if (input.includes("job") || input.includes("placement") || input.includes("career")) {
    return "🚀 We have a strong 'Career Support' program including resume building, mock interviews, and direct referrals to 500+ partner companies.";
  }

  return null;
};
