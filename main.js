let error = document.querySelector(".error");

document
  .querySelector("input[type='submit']")
  .addEventListener("click", (e) => {
    if (
      !/\w+@\w+\.\w+/.test(document.querySelector("input[type='email']").value)
    ) {
      e.preventDefault();
      error.style.display = "block";
    } else error.style.display = "none";
  });
