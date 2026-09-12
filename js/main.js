function sharePage(){if(navigator.share){navigator.share({title:document.title,url:location.href})}else{copyLink()}}
function copyLink(){navigator.clipboard.writeText(location.href).then(()=>alert("Article link copied!")).catch(()=>alert("Copy this page URL from your browser."))}
