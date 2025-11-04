function toggleTheme() {
  document.body.classList.toggle('dark');
}

function handleSubmit(e) {
  e.preventDefault();
  const role = document.querySelector('select[name="interest"]').value;
  localStorage.setItem('role', role);
  window.location.href = "success.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const interestSelect = document.getElementById('interest');
  const subjectSelect = document.getElementById('subject');
  const extraFields = document.getElementById('extraFields');

  if (!interestSelect) return;

  const subjects = {
    tech: ['Web Development', 'Data Science', 'AI/ML', 'Cybersecurity'],
    design: ['UI/UX Design', 'Graphic Design', 'Animation', 'Branding'],
    marketing: ['Digital Marketing', 'SEO', 'Social Media', 'Content Strategy'],
    business: ['Entrepreneurship', 'Finance', 'Leadership', 'Project Management']
  };

  interestSelect.addEventListener('change', () => {
    const selected = interestSelect.value;
    if (selected) {
      extraFields.style.display = 'block';
      subjectSelect.innerHTML = '<option value="">Choose a subject</option>';
      subjects[selected].forEach(sub => {
        const option = document.createElement('option');
        option.value = sub.toLowerCase();
        option.textContent = sub;
        subjectSelect.appendChild(option);
      });
    } else {
      extraFields.style.display = 'none';
    }
  });
});
