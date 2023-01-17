/**
 * Function that updates the variable values for Almond.CSS based on the 
 * values of the inputs in the configuration form.  
 */
function updateStyles() {
  const props = document.querySelectorAll(".input");
  let newStyles = "";
  for (let x = 0; x < props.length; x++) {
    newStyles += `--${props[x].name}: ${props[x].value}${props[x].dataset.unit||''};\n`;
  }
  document.querySelector("#custom-styles").innerHTML = `:root {\n ${newStyles} }`;
}

/**
 * 
 */
const menuLinks = document.querySelectorAll(".main-menu a");
for (let x = 0; x < menuLinks.length; x++) {
  menuLinks[x].addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector("#documentation-content").innerHTML = "<h2>Loading...</h2>";
    const fileName = `/demo/pages/${this.getAttribute("href").replace("#","").replace("./pages/", "").replace(".html", "")}.html`;
    fetch(fileName)
      .then((response) => response.text())
      .then((data) => {
        // place the content and scroll to the top
        document.querySelector("#documentation-content").innerHTML = data;
        window.scrollTo(0, 0);
        document.querySelector(".main-menu").classList.toggle("closed", true);
      });
  });
}
