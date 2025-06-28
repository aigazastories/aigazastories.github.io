function loadTemplate(title, content) {
    document.title = title;
    document.body.innerHTML = `
        <header>
            <h1><a href="index.html">AI Gaza Stories</a></h1>
        </header>

        <!-- navigation--> 
        <div class="navigation">
            <a href="/conditions.html">Conditions</a>
            <a href="/leaders.html">Leaders</a>
            <a href="/workers.html">Workers</a>
            <a href="/notes.html">Notes</a>
        </div>
        
	<main>
	    ${content}
        </main>
    `;
}
	
