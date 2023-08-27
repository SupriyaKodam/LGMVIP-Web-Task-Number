document.getElementById("submitBtn").addEventListener("click", function() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const skillsSelect = document.getElementById("skills");
  const skills = [...skillsSelect.selectedOptions].map(option => option.value).join(", ");

  document.getElementById("displayName").textContent = name;
  document.getElementById("displayEmail").textContent = email;
  document.getElementById("displayPhone").textContent = phone;
  document.getElementById("displayGender").textContent = gender;
  document.getElementById("displaySkills").textContent = skills;

  document.getElementById("displayData").classList.remove("hidden");
});
