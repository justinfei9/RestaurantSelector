document.getElementById('restaurantForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const radius = document.getElementById('radius').value;
    const foodStyle = document.getElementById('foodStyle').value;
    const minPrice = document.getElementById('minPrice').value;
    const maxPrice = document.getElementById('maxPrice').value;

    const response = await fetch(`/api/restaurants?radius=${radius}&foodStyle=${foodStyle}&minPrice=${minPrice}&maxPrice=${maxPrice}`);
    const restaurant = await response.json();

    const resultDiv = document.getElementById('result');
    if (restaurant.name) {
        resultDiv.innerHTML = `
            <h2>Recommended Restaurant</h2>
            <p><strong>Name:</strong> ${restaurant.name}</p>
            <p><strong>Address:</strong> ${restaurant.vicinity}</p>
            <p><strong>Rating:</strong> ${restaurant.rating}</p>
        `;
    } else {
        resultDiv.innerHTML = '<p>No restaurants found based on your criteria.</p>';
    }
});
