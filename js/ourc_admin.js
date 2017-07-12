/**
 * Created by ryan on 01/05/2017.
 */


$(document).ready(function(){

    /* Edit a news item opens the edit old news item panel and closes
        the news editor and previos news panel */

    $(".edit-oldnews-button").click(function(){
        var title = $(this).prev().text();
        $("#oldnews-editor-title").text(title);
        $("#oldnews-panel").show('fast');
        $("#news-editor-panel").hide('fast');
        $("#previous-news-panel").hide('fast');
    });

    /* when closing  the edit old news panel reopens news editor and previous news panel*/

    $("#oldnews-back-button").click(function(){
        $("#oldnews-panel").hide('fast');
        $("#news-editor-panel").show('fast');
        $("#previous-news-panel").show('fast');
    });

    /* Mobile nav bar on click show menu*/
    $(".mobile").click(function(){
        $(".sidebar").slideToggle('fast');

    });

    /* box panel toggle hide show on click  checks for the sibling of current box-top*/
    $(".box-top").click(function(){

        $(this).siblings().toggle('fast');





    });



/********************************************/
});