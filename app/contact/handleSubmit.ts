const handleSubmit = async (e) => {
  e.preventDefault();

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

  if (res.ok) {
    alert("Message sent!");
  } else {
    alert("Error sending message.");
  }
};
