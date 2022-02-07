    console.log('im from gana java');
            console.log('im from summery js file');

    const blogs = document.getElementsByTagName('p');
    /* console.log(blogs); */
    // same work with for loop //
    for(const blog of blogs) {
        // console.log(blog);
        blog.style.backgroundColor = '#D77FA1';
        blog.style.color = '#FFEFEF';
    }
    // innertext //
    const specialTag = document.getElementById('special-blog');
    specialTag.innerText = 'pagol hoye jabo'
    // inner html //
    const lauraTag = document.getElementById('laura-blog');
    lauraTag.innerHTML = `
        <ul>
            <li>pagol</li>
            <li>sagol</li>
            <li>magol</li>
        </ul>
        <h1> birini khabo </h1>
        <p> tomake gaan sunabo </p>
        <strong>i love u</strong>
    `

    const friends = document.getElementById('fri');
    console.log(friends);