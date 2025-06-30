function loadTemplate(title, content) {
    document.title = title;
    document.body.innerHTML = `
        <header>
	    <div class="container">
                <h1>AI Gaza Stories</h1>
            </div>
	</header>

        <!-- navigation--> 
        <div class="navigation">
	    <div class="container">
	        <a href="index.html">Home</a>
                <a href="/conditions.html">Conditions</a>
                <a href="/leaders.html">Leaders</a>
                <a href="/workers.html">Workers</a>
                <a href="/notes.html">Notes</a>
            </div>
	</div>
        
	<main>
	    ${content}
        </main>
    `;
}
	
