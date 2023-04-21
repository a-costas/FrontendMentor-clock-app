export const getTime = () => {
  const date = new Date();
  return date.toLocaleTimeString([], {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });
  // .replace(" AM", "")
  // .replace(" PM", "")
  // .replace(" am", "")
  // .replace(" pm", "")
  // .replace(" a.m.", "")
  // .replace(" p.m.", "")
  // .replace(" a. m.", "")
  // .replace(" p. m.", "");
};

export const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) {
    return "Good Morning";
  } else if (hour >= 12 && hour < 18) {
    return "Good Afternoon";
  } else if (hour >= 18 && hour < 23) {
    return "Good evening";
  } else {
    return "Good night";
  }
};

export const isDaytime = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 18) return true;
  else return false;
};
