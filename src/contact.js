const contact = () => {
  const container = document.createElement('div');
  container.classList.add('contact-container');

  const contactHeader = document.createElement('h2');
  contactHeader.innerText = 'CONTACT US';

  const contactForm = document.createElement('form');

  const htmlForm = `
          <div class="form-group">
              <label for="name">NAME:</label>
              <input type="text" placeholder="Enter Name">
          </div>
          <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" placeholder="Enter Email">
          </div>
          <div class="form-group">
              <label for="message" class="message">MESSAGE:</label>
              <textarea name="message" id="" cols="50" rows="10"></textarea>
          </div>
          <div class="form-group">
              <input type="submit" name="submit">
          </div>
      `;
  contactForm.innerHTML = htmlForm;
  container.appendChild(contactHeader);
  container.appendChild(contactForm);

  return container;
};

export default contact();
