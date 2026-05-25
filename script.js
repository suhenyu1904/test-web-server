// Form submission
document.getElementById('testForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const pesan = document.getElementById('pesan').value;

    // Display output
    const output = document.getElementById('output');
    output.innerHTML = `
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Pesan:</strong> ${pesan}</p>
        <p><strong>Waktu:</strong> ${new Date().toLocaleString('id-ID')}</p>
    `;

    // Reset form
    this.reset();
});

// Add item to list
document.getElementById('addBtn').addEventListener('click', function() {
    const newItemInput = document.getElementById('newItem');
    const itemText = newItemInput.value.trim();

    if (itemText !== '') {
        const itemList = document.getElementById('itemList');
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${itemText}</span>
            <button type="button" onclick="this.parentElement.remove()">Hapus</button>
        `;
        itemList.appendChild(li);
        newItemInput.value = '';
        newItemInput.focus();
    } else {
        alert('Silakan masukkan item terlebih dahulu!');
    }
});

// Allow Enter key to add item
document.getElementById('newItem').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('addBtn').click();
    }
});

// Console log on page load
console.log('Web Testing Page Loaded');
console.log('Waktu load:', new Date().toLocaleString('id-ID'));
