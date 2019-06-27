document.addEventListener('click', function (event) {
    let match = false;
    for (var i = 0; i < event.target.children.length; i++) {
        var child = event.target.children[i];
        if(child.matches('.dig')) {
            match = true;
        }
    }
    if (!match) {
        return;
    }

    let unfolded = (event.target.getAttribute("unfolded") === "1");
    event.target.setAttribute("unfolded", unfolded ? "0" : "1");
    for (var i = 0; i < event.target.children.length; i++) {
        var child = event.target.children[i];
        if(child.matches('.dig')) {
            child.style.display = unfolded ? 'none' : 'block';
        }
    }
	// Don't follow the link
	event.preventDefault();
}, false);