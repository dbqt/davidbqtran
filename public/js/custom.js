populateProject(0);


function populateProject(index) {
  $.get("/api/project/"+index, function(data, status) {
    document.getElementById("project-title").innerHTML = data.title;
    document.getElementById("project-subtitle").innerHTML = data.subtitle;
    document.getElementById("project-description").innerHTML = data.description;
    document.getElementById("project-link").href = data.projectLink;
    createMedia(data.media, data.mediaType);
  });
}

function createMedia(mediaLink, mediaType) {
  var content = "";
  switch(mediaType) {
    case "youtube":
      content = "<iframe id='ytplayer' type='text/html' width='100%' height='360' src='http://www.youtube.com/embed/"+mediaLink+"?autoplay=0' frameborder='0' />";//"<iframe id='ytplayer' type='text/html' width='640' height='360' src='"+mediaLink+"' frameborder='0'/>";
      break;
    case "giphy":
      content = "<iframe src='https://giphy.com/embed/"+mediaLink+"' width='100%' height='360' frameBorder='0' class='giphy-embed' allowFullScreen></iframe>";
      break;
    default:
      content = "";
  }
   document.getElementById("project-media").innerHTML = content;
}vh