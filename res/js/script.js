$(function() {

    $.get("https://jsonkeeper.com/b/M7UN", function(json_obj) {
    //$.get("res/json/posts.json", function(json_obj) {
        for (obj of json_obj) {
            let section = $('<section class="entry">');
            // Vaja täpsustada alates siit:
            let head = $('<h1>').text(obj.title);
            let body = $('<p>').text(obj.body);
            let date = $('<p>').text(obj.createdAt);
            let id = $('<p>').text(obj.id);
            let author = $('<p>').text(obj.autorName);
            let date = $('<p>').text(obj.body);
            let image = $('<p>').text(obj.image);
            let hashTags = $('<p>').text(obj.hashTags);
            section.append(head);
            section.append(body);
            // Siit alates võiks olla ok.
            $(".body-container").append(section)
        }
    })
  
 });