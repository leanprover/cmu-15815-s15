//clear search
function clear_search(s) {
  if (s.defaultValue==s.value || s.value=='SEARCH') s.value = ""
}


function randomHeaderImage(images)
{
  var randPhoto=Math.floor(Math.random()*images.length); 
  document.writeln('<img alt="" border="0" id="pageHeaderPhoto" src="'+images[randPhoto]+'" width="748"/>');
}

function initExpandCollapse()
{
  $(document).ready(function() {
    $('.collapsible .collapsed').addClass('hidden');
    $('.collapsible >h2').toggleClass('closed').wrapInner('<a style="display:block;" href="#" title="expand/collapse"></a>');
  });
  $('.collapsible > h2').click(function () {
    $(this).toggleClass('closed').next('.collapsed').toggleClass('hidden');
    return false;
  });
}
