var post= document.getElementById("post");

post.addEventListener("click", function(){
    var commentBoxValue= document.getElementById("comment").value;
    var li = document.createElement("li");
    var text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li);
});
// $('button').click(function() {
//     var comment = $('#comment').val(); 
//     $('<li>').appendTo('#unordered').text(comment);
// })