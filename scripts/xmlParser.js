function loadTasks(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200){
            let xmlDoc = this.responseXML;

            if(!xmlDoc){
                console.error("Failed to parse XML.");
                return;
            }

            let posts = xmlDoc.getElementsByTagName("post");
            let postList = document.getElementById("post-list");

            for(let i = 0; i < posts.length; i++) {
                let postContent = posts[i].childNodes[0].nodeValue;
                let postTitle = posts[i].getAttribute('title');
                let postDate = posts[i].getAttribute('date');

                const postItem = createPostList(postTitle, postContent, postDate);
                postList.appendChild(postItem);
            }
        } else if (this.readyState === 4 && this.status !== 200) {
            console.error("Failed to load XML file");
        }
    };
    //xhttp.open("GET", "storedPosts.xml", true);
    xhttp.open("GET", "storedPosts.xml", true);
    xhttp.send();
}

window.onload = loadTasks;