"use strict";document.addEventListener("DOMContentLoaded",function(){document.addEventListener("scroll",function(e){20<document.scrollingElement.scrollTop?d3.select(".header-nav").classed("active",!0):d3.select(".header-nav").classed("active",!1),450<=document.scrollingElement.scrollTop?d3.select(".top-btn").classed("top-active",!0):d3.select(".top-btn").classed("top-active",!1),d3.select(".top-btn").on("click",function(){return c=document.body,e=0,s=1250,l=c.scrollTop,n=e-l,i=0,void function e(){i+=20;var t=Math.easeInOutQuad(i,l,n,s);c.scrollTop=t,i<s&&setTimeout(e,20)}();var c,e,s,l,n,i}),Math.easeInOutQuad=function(e,t,c,s){return(e/=s/2)<1?c/2*e*e+t:-c/2*(--e*(e-2)-1)+t}}),d3.select("body").append("div").attr("class","top-btn").style("position","fixed").style("bottom","10%").style("right","5%").style("z-index","111").append("i").attr("class","fas fa-arrow-up"),d3.select(".alert-msg").on("click",function(){return d3.select(".alert").remove()}),d3.selectAll('a[href="#"]').on("click",function(){}),d3.select(".open-btn").on("click",function(){d3.select("#hidden-nav").style("left","0")}),d3.select(".cloth-btn").on("click",function(){d3.select("#hidden-nav").style("left","-320px")}),new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0}).init(),$(".popup-vimeo").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1});var c=2,s=void 0,l=d3.selectAll("[class*='testimonials-cnt__']").nodes();function n(e){e>l.length&&(c=1),t(c+=e)}function e(e){e<1&&(c=l.length),t(c=e)}function t(e){clearTimeout(s),s=setTimeout(function(){n(1)},3e3);var t=d3.selectAll("[class*='demo-']").nodes();e>l.length&&(c=1),e<1&&(c=l.length),l.forEach(function(e){return d3.select(e).style("display","none").classed("slide",!1)}),t.forEach(function(e){return d3.select(e).classed("big",!1)}),d3.select(l[c-1]).style("display","block").classed("slide",!0),d3.select(t[c-1]).classed("big",!0)}t(c),d3.select(".left").on("click",function(){d3.event.preventDefault(),n(-1)}),d3.select(".right").on("click",function(){d3.event.preventDefault(),n(1)}),d3.select(".demo-first").on("click",function(){return e(1)}),d3.select(".demo-second").on("click",function(){return e(2)}),d3.select(".demo-third").on("click",function(){return e(3)}),d3.select(".switcher__individual").classed("switched",!0),d3.select(".switcher-block__starter").classed("switcher-active",!0),d3.selectAll(".switcher__individual, .switcher-block__starter").on("click",function(){return d3.select(".switcher__individual").classed("switched",!0),d3.selectAll(".switcher-toggles, .switcher__company").classed("switched",!1),d3.selectAll(".switcher-block__pro").classed("switcher-active",!1),void d3.select(".switcher-block__starter").classed("switcher-active",!0)}),d3.selectAll(".switcher__company, .switcher-block__pro").on("click",function(){return d3.select(".switcher__individual").classed("switched",!1),d3.selectAll(".switcher__company, .switcher-toggles").classed("switched",!0),d3.select(".switcher-block__pro").classed("switcher-active",!0),void d3.select(".switcher-block__starter").classed("switcher-active",!1)})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic2Nyb2xsaW5nRWxlbWVudCIsInNjcm9sbFRvcCIsImQzIiwic2VsZWN0IiwiY2xhc3NlZCIsIm9uIiwiZWxlbWVudCIsImJvZHkiLCJ0byIsImR1cmF0aW9uIiwic3RhcnQiLCJjaGFuZ2UiLCJjdXJyZW50VGltZSIsImFuaW1hdGVTY3JvbGwiLCJ2YWwiLCJNYXRoIiwiZWFzZUluT3V0UXVhZCIsInNldFRpbWVvdXQiLCJ0IiwiYiIsImMiLCJkIiwiYXBwZW5kIiwiYXR0ciIsInN0eWxlIiwicmVtb3ZlIiwic2VsZWN0QWxsIiwiV09XIiwiYm94Q2xhc3MiLCJhbmltYXRlQ2xhc3MiLCJvZmZzZXQiLCJtb2JpbGUiLCJsaXZlIiwiaW5pdCIsIiQiLCJtYWduaWZpY1BvcHVwIiwiZGlzYWJsZU9uIiwidHlwZSIsIm1haW5DbGFzcyIsInJlbW92YWxEZWxheSIsInByZWxvYWRlciIsImZpeGVkQ29udGVudFBvcyIsInNsaWRlSW5kZXgiLCJhdXRvIiwieCIsIm5vZGVzIiwicGx1c0RpdiIsIm4iLCJsZW5ndGgiLCJzaG93RGl2cyIsImN1cnJlbnREaXYiLCJjbGVhclRpbWVvdXQiLCJkb3RzIiwiZm9yRWFjaCIsImVsIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6IkFBQUEsYUFFQUEsU0FBU0MsaUJBQWlCLG1CQUFvQixXQUMxQ0QsU0FBU0MsaUJBQWlCLFNBQVUsU0FBVUMsR0FFQSxHQUF0Q0YsU0FBU0csaUJBQWlCQyxVQUMxQkMsR0FBR0MsT0FBTyxlQUFlQyxRQUFRLFVBQVUsR0FFM0NGLEdBQUdDLE9BQU8sZUFBZUMsUUFBUSxVQUFVLEdBRVIsS0FBdkNQLFNBQVNHLGlCQUFpQkMsVUFBbUJDLEdBQUdDLE9BQU8sWUFBWUMsUUFBUSxjQUFjLEdBQVFGLEdBQUdDLE9BQU8sWUFBWUMsUUFBUSxjQUFjLEdBRTdJRixHQUFHQyxP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VyxLQUV0QmhELEdBQUdDLE9BQU8sZ0JBQWdCRSxHQUFHLFFBQVMsV0FDbEMsT0FBTzZDLEVBQVcsS0FFdEJoRCxHQUFHQyxPQUFPLGVBQWVFLEdBQUcsUUFBUyxXQUNqQyxPQUFPNkMsRUFBVyxLQXVDdEJoRCxHQUFHQyxPQUFPLHlCQUF5QkMsUUFBUSxZQUFZLEdBQ3ZERixHQUFHQyxPQUFPLDRCQUE0QkMsUUFBUSxtQkFBbUIsR0FFakVGLEdBQUd3QixVQUFVLG1EQUFtRHJCLEdBQUcsUUFBUyxXQUN4RSxPQU9BSCxHQUFHQyxPQUFPLHlCQUF5QkMsUUFBUSxZQUFZLEdBQ3ZERixHQUFHd0IsVUFBVSx5Q0FBeUN0QixRQUFRLFlBQVksR0FDMUVGLEdBQUd3QixVQUFVLHdCQUF3QnRCLFFBQVEsbUJBQW1CLFFBQ2hFRixHQUFHQyxPQUFPLDRCQUE0QkMsUUFBUSxtQkFBbUIsS0FSckVGLEdBQUd3QixVQUFVLDRDQUE0Q3JCLEdBQUcsUUFBUyxXQUNqRSxPQVdBSCxHQUFHQyxPQUFPLHlCQUF5QkMsUUFBUSxZQUFZLEdBQ3ZERixHQUFHd0IsVUFBVSx5Q0FBeUN0QixRQUFRLFlBQVksR0FDMUVGLEdBQUdDLE9BQU8sd0JBQXdCQyxRQUFRLG1CQUFtQixRQUM3REYsR0FBR0MsT0FBTyw0QkFBNEJDLFFBQVEsbUJBQW1CIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvL3Njcm9sbCB0b3BcbiAgICAgICAgaWYgKGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsVG9wID4gMjApIHtcbiAgICAgICAgICAgIGQzLnNlbGVjdCgnLmhlYWRlci1uYXYnKS5jbGFzc2VkKCdhY3RpdmUnLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGQzLnNlbGVjdCgnLmhlYWRlci1uYXYnKS5jbGFzc2VkKCdhY3RpdmUnLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3AgPj0gNDUwID8gZDMuc2VsZWN0KCcudG9wLWJ0bicpLmNsYXNzZWQoJ3RvcC1hY3RpdmUnLCB0cnVlKSA6IGQzLnNlbGVjdCgnLnRvcC1idG4nKS5jbGFzc2VkKCd0b3AtYWN0aXZlJywgZmFsc2UpO1xuXG4gICAgICAgIGQzLnNlbGVjdCgnLnRvcC1idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc2Nyb2xsVG8oZG9jdW1lbnQuYm9keSwgMCwgMTI1MCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIHNjcm9sbFRvKGVsZW1lbnQsIHRvLCBkdXJhdGlvbikge1xuICAgICAgICAgICAgdmFyIHN0YXJ0ID0gZWxlbWVudC5zY3JvbGxUb3AsXG4gICAgICAgICAgICAgICAgY2hhbmdlID0gdG8gLSBzdGFydCxcbiAgICAgICAgICAgICAgICBjdXJyZW50VGltZSA9IDAsXG4gICAgICAgICAgICAgICAgaW5jcmVtZW50ID0gMjA7XG5cbiAgICAgICAgICAgIHZhciBhbmltYXRlU2Nyb2xsID0gZnVuY3Rpb24gYW5pbWF0ZVNjcm9sbCgpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50VGltZSArPSBpbmNyZW1lbnQ7XG4gICAgICAgICAgICAgICAgdmFyIHZhbCA9IE1hdGguZWFzZUluT3V0UXVhZChjdXJyZW50VGltZSwgc3RhcnQsIGNoYW5nZSwgZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gdmFsO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VGltZSA8IGR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoYW5pbWF0ZVNjcm9sbCwgaW5jcmVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYW5pbWF0ZVNjcm9sbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy90ID0gY3VycmVudCB0aW1lXG4gICAgICAgIC8vYiA9IHN0YXJ0IHZhbHVlXG4gICAgICAgIC8vYyA9IGNoYW5nZSBpbiB2YWx1ZVxuICAgICAgICAvL2QgPSBkdXJhdGlvblxuICAgICAgICBNYXRoLmVhc2VJbk91dFF1YWQgPSBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xuICAgICAgICAgICAgdCAvPSBkIC8gMjtcbiAgICAgICAgICAgIGlmICh0IDwgMSkgcmV0dXJuIGMgLyAyICogdCAqIHQgKyBiO1xuICAgICAgICAgICAgdC0tO1xuICAgICAgICAgICAgcmV0dXJuIC1jIC8gMiAqICh0ICogKHQgLSAyKSAtIDEpICsgYjtcbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgIGQzLnNlbGVjdCgnYm9keScpLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAndG9wLWJ0bicpLnN0eWxlKCdwb3NpdGlvbicsICdmaXhlZCcpLnN0eWxlKCdib3R0b20nLCAnMTAlJykuc3R5bGUoJ3JpZ2h0JywgJzUlJykuc3R5bGUoJ3otaW5kZXgnLCAnMTExJykuYXBwZW5kKCdpJykuYXR0cignY2xhc3MnLCAnZmFzIGZhLWFycm93LXVwJyk7XG5cbiAgICBkMy5zZWxlY3QoJy5hbGVydC1tc2cnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBkMy5zZWxlY3QoJy5hbGVydCcpLnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgZDMuc2VsZWN0QWxsKCdhW2hyZWY9XCIjXCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuICAgIC8vSGlkZGVuIE1lbnVcbiAgICBkMy5zZWxlY3QoJy5vcGVuLWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZDMuc2VsZWN0KFwiI2hpZGRlbi1uYXZcIikuc3R5bGUoJ2xlZnQnLCAnMCcpO1xuICAgIH0pO1xuXG4gICAgZDMuc2VsZWN0KCcuY2xvdGgtYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBkMy5zZWxlY3QoXCIjaGlkZGVuLW5hdlwiKS5zdHlsZSgnbGVmdCcsICctMzIwcHgnKTtcbiAgICB9KTtcblxuICAgIC8vIFdvdyBBbmltYXRpb25zXG4gICAgdmFyIHdvdyA9IG5ldyBXT1coe1xuICAgICAgICBib3hDbGFzczogJ3dvdycsIC8vIGRlZmF1bHRcbiAgICAgICAgYW5pbWF0ZUNsYXNzOiAnYW5pbWF0ZWQnLCAvLyBkZWZhdWx0XG4gICAgICAgIG9mZnNldDogMCwgLy8gZGVmYXVsdFxuICAgICAgICBtb2JpbGU6IHRydWUsIC8vIGRlZmF1bHRcbiAgICAgICAgbGl2ZTogdHJ1ZSAvLyBkZWZhdWx0XG4gICAgfSk7XG4gICAgd293LmluaXQoKTtcblxuICAgICQoJy5wb3B1cC12aW1lbycpLm1hZ25pZmljUG9wdXAoe1xuICAgICAgICBkaXNhYmxlT246IDcwMCxcbiAgICAgICAgdHlwZTogJ2lmcmFtZScsXG4gICAgICAgIG1haW5DbGFzczogJ21mcC1mYWRlJyxcbiAgICAgICAgcmVtb3ZhbERlbGF5OiAxNjAsXG4gICAgICAgIHByZWxvYWRlcjogZmFsc2UsXG4gICAgICAgIGZpeGVkQ29udGVudFBvczogZmFsc2VcbiAgICB9KTtcblxuICAgIC8vY2Fyb3VzZWxcbiAgICB2YXIgc2xpZGVJbmRleCA9IDI7XG4gICAgdmFyIGF1dG8gPSB2b2lkIDA7XG4gICAgdmFyIHggPSBkMy5zZWxlY3RBbGwoXCJbY2xhc3MqPSd0ZXN0aW1vbmlhbHMtY250X18nXVwiKS5ub2RlcygpO1xuICAgIHNob3dEaXZzKHNsaWRlSW5kZXgpO1xuXG4gICAgZDMuc2VsZWN0KCcubGVmdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcGx1c0RpdigtMSk7XG4gICAgfSk7XG5cbiAgICBkMy5zZWxlY3QoJy5yaWdodCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcGx1c0RpdigxKTtcbiAgICB9KTtcblxuICAgIGQzLnNlbGVjdCgnLmRlbW8tZmlyc3QnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50RGl2KDEpO1xuICAgIH0pO1xuICAgIGQzLnNlbGVjdCgnLmRlbW8tc2Vjb25kJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY3VycmVudERpdigyKTtcbiAgICB9KTtcbiAgICBkMy5zZWxlY3QoJy5kZW1vLXRoaXJkJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY3VycmVudERpdigzKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHBsdXNEaXYobikge1xuICAgICAgICBpZiAobiA+IHgubGVuZ3RoKSBzbGlkZUluZGV4ID0gMTtcbiAgICAgICAgc2hvd0RpdnMoc2xpZGVJbmRleCArPSBuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjdXJyZW50RGl2KG4pIHtcbiAgICAgICAgaWYgKG4gPCAxKSBzbGlkZUluZGV4ID0geC5sZW5ndGg7XG4gICAgICAgIHNob3dEaXZzKHNsaWRlSW5kZXggPSBuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93RGl2cyhuKSB7XG4gICAgICAgIHN0YXJ0Q2Fyb3VzZWxUaW1lb3V0KCk7XG4gICAgICAgIHZhciBjbGFzc0lzU2V0ID0gJ2JpZyc7XG4gICAgICAgIHZhciBkb3RzID0gZDMuc2VsZWN0QWxsKFwiW2NsYXNzKj0nZGVtby0nXVwiKS5ub2RlcygpO1xuICAgICAgICBpZiAobiA+IHgubGVuZ3RoKSB7XG4gICAgICAgICAgICBzbGlkZUluZGV4ID0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobiA8IDEpIHNsaWRlSW5kZXggPSB4Lmxlbmd0aDtcbiAgICAgICAgeC5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgcmV0dXJuIGQzLnNlbGVjdChlbCkuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpLmNsYXNzZWQoJ3NsaWRlJywgZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICAgICAgZG90cy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgcmV0dXJuIGQzLnNlbGVjdChlbCkuY2xhc3NlZChjbGFzc0lzU2V0LCBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBkMy5zZWxlY3QoeFtzbGlkZUluZGV4IC0gMV0pLnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJykuY2xhc3NlZCgnc2xpZGUnLCB0cnVlKTtcbiAgICAgICAgZDMuc2VsZWN0KGRvdHNbc2xpZGVJbmRleCAtIDFdKS5jbGFzc2VkKGNsYXNzSXNTZXQsIHRydWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0YXJ0Q2Fyb3VzZWxUaW1lb3V0KCkge1xuICAgICAgICBjbGVhclRpbWVvdXQoYXV0byk7XG4gICAgICAgIGF1dG8gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHBsdXNEaXYoMSk7XG4gICAgICAgIH0sIDMwMDApO1xuICAgIH1cblxuICAgIC8vU3dpdGNoZXIgYmxvY2tcbiAgICBkMy5zZWxlY3QoJy5zd2l0Y2hlcl9faW5kaXZpZHVhbCcpLmNsYXNzZWQoJ3N3aXRjaGVkJywgdHJ1ZSk7XG4gICAgZDMuc2VsZWN0KCcuc3dpdGNoZXItYmxvY2tfX3N0YXJ0ZXInKS5jbGFzc2VkKCdzd2l0Y2hlci1hY3RpdmUnLCB0cnVlKTtcblxuICAgIGQzLnNlbGVjdEFsbCgnLnN3aXRjaGVyX19pbmRpdmlkdWFsLCAuc3dpdGNoZXItYmxvY2tfX3N0YXJ0ZXInKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzdGFydFN3aXRjaGVyKCk7XG4gICAgfSk7XG4gICAgZDMuc2VsZWN0QWxsKCcuc3dpdGNoZXJfX2NvbXBhbnksIC5zd2l0Y2hlci1ibG9ja19fcHJvJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcHJvU3dpdGNoZXIoKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHN0YXJ0U3dpdGNoZXIoKSB7XG4gICAgICAgIGQzLnNlbGVjdCgnLnN3aXRjaGVyX19pbmRpdmlkdWFsJykuY2xhc3NlZCgnc3dpdGNoZWQnLCB0cnVlKTtcbiAgICAgICAgZDMuc2VsZWN0QWxsKCcuc3dpdGNoZXItdG9nZ2xlcywgLnN3aXRjaGVyX19jb21wYW55JykuY2xhc3NlZCgnc3dpdGNoZWQnLCBmYWxzZSk7XG4gICAgICAgIGQzLnNlbGVjdEFsbCgnLnN3aXRjaGVyLWJsb2NrX19wcm8nKS5jbGFzc2VkKCdzd2l0Y2hlci1hY3RpdmUnLCBmYWxzZSk7XG4gICAgICAgIGQzLnNlbGVjdCgnLnN3aXRjaGVyLWJsb2NrX19zdGFydGVyJykuY2xhc3NlZCgnc3dpdGNoZXItYWN0aXZlJywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvU3dpdGNoZXIoKSB7XG4gICAgICAgIGQzLnNlbGVjdCgnLnN3aXRjaGVyX19pbmRpdmlkdWFsJykuY2xhc3NlZCgnc3dpdGNoZWQnLCBmYWxzZSk7XG4gICAgICAgIGQzLnNlbGVjdEFsbCgnLnN3aXRjaGVyX19jb21wYW55LCAuc3dpdGNoZXItdG9nZ2xlcycpLmNsYXNzZWQoJ3N3aXRjaGVkJywgdHJ1ZSk7XG4gICAgICAgIGQzLnNlbGVjdCgnLnN3aXRjaGVyLWJsb2NrX19wcm8nKS5jbGFzc2VkKCdzd2l0Y2hlci1hY3RpdmUnLCB0cnVlKTtcbiAgICAgICAgZDMuc2VsZWN0KCcuc3dpdGNoZXItYmxvY2tfX3N0YXJ0ZXInKS5jbGFzc2VkKCdzd2l0Y2hlci1hY3RpdmUnLCBmYWxzZSk7XG4gICAgfVxufSk7Il19