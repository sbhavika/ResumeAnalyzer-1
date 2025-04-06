
  const text = "Resume Parsing Redefined";
  const heading = document.getElementById("typingHeading");
  let index = 0;

  function type() {
    if (index < text.length) {
      heading.innerHTML = text.substring(0, index + 1);
      index++;
      setTimeout(type, 200); 
    } else {
      heading.classList.remove("typing"); 
    }
  }

  type();

