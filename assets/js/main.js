// Generated by CoffeeScript 1.6.3
(function(){$(function(){var e,t,n,r,i,s,o,u;o=$(".scrollTop");r=$("html, body");n=$(".content");t=$(".contact-links .links");i=$("#knowtify-gallery");u=$("#taller-moure-gallery");s=$("#orchid-gallery");e=$("#apple-tv-gallery");String.prototype.titleize=function(){return typeof this=="undefined"||this===null?"":String(this).replace(/(?:^|\s)\S/g,function(e){return e.toUpperCase()})};FastClick.attach(document.body);o.on("click",function(e){e.preventDefault();return r.animate({scrollTop:0},800,"easeInOutCubic")});i.on("click",function(e){e.preventDefault();return $.swipebox([{href:"/assets/img/knowtify/knowtify-desktop.jpg"},{href:"/assets/img/knowtify/knowtify-mobile.jpg"},{href:"/assets/img/knowtify/knowtify-logomarks.jpg"},{href:"/assets/img/knowtify/knowtify-colors.jpg"},{href:"/assets/img/knowtify/knowtify-type.jpg"}])});s.on("click",function(e){e.preventDefault();return $.swipebox([{href:"/assets/img/orchid/orchid-cover.jpg"},{href:"/assets/img/orchid/orchid-web.jpg"},{href:"/assets/img/orchid/orchid-dashboard.jpg"},{href:"/assets/img/orchid/orchid-ipad.jpg"},{href:"/assets/img/orchid/orchid-ipad2.jpg"}])});u.on("click",function(e){e.preventDefault();return $.swipebox([{href:"/assets/img/taller-moure/taller-moure-letter.jpg"},{href:"/assets/img/taller-moure/taller-moure-envelope.jpg"},{href:"/assets/img/taller-moure/taller-moure-card.jpg"},{href:"/assets/img/taller-moure/taller-moure-logomarks.jpg"},{href:"/assets/img/taller-moure/taller-moure-colors.jpg"},{href:"/assets/img/taller-moure/taller-moure-type.jpg"}])});mixpanel.track("Page Viewed",{"Page Name":document.title,URL:window.location.pathname});n.on("click",".work-links a",function(e){var t,n;n=$(this).parents(".work-links").data("workType").titleize();t=$(this).data("workLink").titleize();return mixpanel.track("Work Link Clicked",{"Work Type":n,"Link Type":t})});return t.on("click","a",function(e){var t;t=$(this).last().data("contactLink").titleize();return mixpanel.track("Contact Link Clicked",{"Link Type":t})})})}).call(this);