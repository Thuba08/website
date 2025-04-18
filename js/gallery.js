fetch('json/future.json')
  .then(response => response.json())
  .then(data => {
    const gallery = document.getElementById('gallery');
    data.gallery.forEach(item => {
      const div = document.createElement('div');
      div.className = 'gallery-item';
      div.innerHTML = `
        <a href="${item.full}" target="_blank">
          <img src="${item.thumb}" alt="${item.description}">
        </a>
        <p>${item.description}</p>
      `;
      gallery.appendChild(div);
    });
  })
  .catch(error => console.error('Error loading gallery:', error));