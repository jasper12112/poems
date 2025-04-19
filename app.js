function displayPoems(poems) {
    console.log('test');
    const container = document.createElement('div');
    container.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4';

    poems.forEach(poem => {
        const poemCard = document.createElement('div');
        poemCard.className = 'bg-white p-4 rounded shadow';
        poemCard.setAttribute(
            'x-on:click',
            `showModal = true; currentPoem = { title: ${JSON.stringify(poem.title)}, author: ${JSON.stringify(poem.author)}, content: ${JSON.stringify(poem.content).replace(/\\n/g, '<br>')} }`
        );

        const title = document.createElement('h2');
        title.className = 'text-xl font-bold';
        title.textContent = poem.title;

        const author = document.createElement('p');
        author.className = 'text-sm text-gray-600';
        author.textContent = `by ${poem.author}`;

        const content = document.createElement('p');
        content.className = 'text-gray-800';
        content.textContent = poem.content.split('\n')[0] + (poem.content.split('\n').length > 1 ? '...' : '');

        poemCard.appendChild(title);
        poemCard.appendChild(author);
        poemCard.appendChild(content);
        container.appendChild(poemCard);
    });

    document.querySelector('.container').appendChild(container);
}

// Simulate fetching poems from the JSON file
fetch('./poems.json')
    .then(response => response.json())
    .then(poems => displayPoems(poems))
    .catch(error => console.error('Error fetching poems:', error));