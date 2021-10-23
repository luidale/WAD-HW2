$(function() {

    //$.get("https://jsonkeeper.com/b/M7UN", function(json_obj) {
    //$.get("https://api.npoint.io/763f29735f063b6f7ad7", function(json_obj) {
        $.get("res/json/posts.json", function(json_obj) {
        for (obj of json_obj) {

            // Build html
            let section = $('<section class="entry">');

            //  Topbar
            let topbar = $('<div class="entry-topbar">');
            //      author
            let div = $('<div>');
            let author = $('<img src="res/images/me.png">');
            author.prop("title", obj.authorName);
            author.prop("alt", obj.authorName);
            div.append(author);
            topbar.append(div);
            //      date
            let dateDiv = $('<div class="entry-datetext">');
            dateDiv.append($('<p>').text(convertDate(obj.createdAt)));
            topbar.append(dateDiv);
            section.append(topbar);

            // Image
            //  add only when image exists
            if (obj.image) {
                let image = $('<img>');
                let imgstring = obj.image;
                // if the image is not a Base64 object embedded in JSON, but a URI to an image file
                if (!obj.image.includes("data:image/jpeg;base64")) {
                    imgstring = "res/images/" + imgstring;
                }
                image.prop("src", imgstring);
                image.prop("alt", obj.image.split(".")[0]);
                section.append(image);
            }

            // Entry-text
            let entryTitle = $('<div class="entry-title">');
            entryTitle.append($('<p>').text(obj.title));
            section.append(entryTitle);
            let entryText = $('<div class="entry-text">');
            let text = $('<p>').text(obj.body)

            //  add hashtags
            if (obj.hashTags) {
                let hashTags = obj.hashTags;
                // add all hashtags
                for (hashTag in hashTags) {
                    let hashTagElement = $('<a href="#">').text("#" + hashTags[hashTag]);
                }
            }
            entryText.append(text);
            section.append(entryText);
            //  add hashtags

            //let hashTags = $('<p>').text(obj.hashTags);


            // Entry-react
            let entryReact = $('<div class="entry-react">');
            entryReact.append('<img src="res/images/like-icon-png-0.jpg" alt="I like it!"></img>');
            section.append(entryReact);

            //section.append(head);
            //section.append(body);



            $(".body-container").append(section)
        }
    })

});

function convertDate(dateString) {

    let monthNames = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
    date = new Date(dateString);

    var month = date.getMonth();
    var day = date.getDate();
    // add "strings" to date
    if (day % 10 == 1) {
        day = day + "st";
    } else if (day % 10 == 2) {
        day = day + "nd";
    } else if (day % 10 == 3) {
        day = day + "rd";
    } else {
        day = day + "th";
    }
    var year = date.getYear();

    return monthNames[month] + " " + day + " " + (1900 + year);

}


function clickFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }