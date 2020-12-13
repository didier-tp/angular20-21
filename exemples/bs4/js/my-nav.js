       function switchContent(content_subpage){
		  //console.log("switchContent : " + content_subpage);
	      $('#content-div-id').load(content_subpage);
	   }

	   function showActiveSelection(jqA){
		   if(jqA == undefined) return;
		   var jqParentLi = jqA.parent();
		   if(jqParentLi == undefined) return;
		   jqParentLi.addClass('active');
		   jqParentLi.siblings().removeClass('active');
	   }
	  
	   $(function() { 
	   
	   //default content (subpages):
	   $('#header-div-id').load('./sp_header_with_navbar.html');
	   switchContent('./sp_welcome.html');
	   $('#footer-div-id').load('./sp_footer.html');   
	   
		  
       });