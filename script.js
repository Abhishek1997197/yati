async function fetchMovieLinks() {
    let query = document.getElementById('search').value;
    document.getElementById('results').innerHTML = `<p>Fetching results for "${query}"...</p>`;
    
    try {
        let response = await fetch(`http://localhost:3000/search?query=${encodeURIComponent(query)}`);
        let data = await response.json();
        
        if (data.results.length > 0) {
            document.getElementById('results').innerHTML = data.results.map(link => 
                `<p><a href="${link}" target="_blank">${link}</a></p>`
            ).join('');
        } else {
            document.getElementById('results').innerHTML = '<p>No results found.</p>';
        }
    } catch (error) {
        document.getElementById('results').innerHTML = '<p>Error fetching results.</p>';
    }
}
