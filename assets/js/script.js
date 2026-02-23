//by me



function sendMessage() {
	const messageContainer = document.querySelector(".message-container");
	const input = document.getElementById("chat-input");
  
	if (input.value.trim() === "") return;
  
	// Get the current time
	const currentTime = new Date();
	const hours = currentTime.getHours();
	const minutes = currentTime.getMinutes().toString().padStart(2, "0");
	const timeString = `${hours}:${minutes}`;
  
	// Create sent message
	const sentMessage = document.createElement("div");
	sentMessage.classList.add("message", "sent");
	sentMessage.innerText = input.value;
  
	// Create message info (timestamp + read receipt)
	const messageInfo = document.createElement("div");
	messageInfo.classList.add("message-info");
	messageInfo.innerText = `${timeString} • Read`;
  
	// Append message and info to container
	messageContainer.appendChild(sentMessage);
	messageContainer.appendChild(messageInfo);
  
	// Clear input
	input.value = "";
  
	// Auto-response message
	setTimeout(() => {
	  // Received message
	  const receivedMessage = document.createElement("div");
	  receivedMessage.classList.add("message", "received");
	  receivedMessage.innerText = "Thanks for your message! How can I assist you?";
  
	  // Received message info (timestamp)
	  const receivedMessageInfo = document.createElement("div");
	  receivedMessageInfo.classList.add("message-info");
	  receivedMessageInfo.innerText = `${timeString} • Delivered`;
  
	  messageContainer.appendChild(receivedMessage);
	  messageContainer.appendChild(receivedMessageInfo);
  
	  // Scroll to the bottom
	  messageContainer.scrollTop = messageContainer.scrollHeight;
	}, 1000);
  
	// Scroll to the bottom
	messageContainer.scrollTop = messageContainer.scrollHeight;
  }

  





// Function to open the popup
function openPopup() {
document.getElementById("popupOverlay").style.display = "flex";
}

// Function to close the popup
function closePopup() {
const video = document.querySelector("#popupOverlay video");
video.pause();            // Pause the video
video.currentTime = 0;    // Reset the video to the start
document.getElementById("popupOverlay").style.display = "none";
}



function profileFullScreen() {
var container = document.getElementById("profilePhotoContainer");
if (!container) return; // Exit if the element doesn't exist

container.style.display = 'flex';
container.classList.add('fullscreen');
document.getElementById("profilePhoto").addEventListener('click', function(event) {
	event.stopPropagation(); // Prevents the click from "bubbling" up to the container
});
}

function closeFullScreen() {
var container = document.getElementById("profilePhotoContainer");
if (container.style.display === 'flex') {
	container.style.display = 'none';
	container.classList.remove('fullscreen');
}
}

document.getElementById("profilePhotoContainer").addEventListener('click', closeFullScreen);
document.querySelector("#profilePhotoContainer button").addEventListener('click', function(event) {
closeFullScreen();
event.stopPropagation(); // Prevent this click from propagating to the container
});








function copyEmail() {
const email = "alihesami.dev@gmail.com";  // Replace with your actual email address
navigator.clipboard.writeText(email).then(() => {
	const link = document.getElementById('emailLink');
	link.setAttribute('data-tooltip', 'Email copied!');
	setTimeout(() => {
		link.setAttribute('data-tooltip', '');
	}, 2000); // Tooltip shows for 2 seconds
}).catch(err => {
	console.error('Failed to copy email: ', err);
});
}
























(function ($) {
	"use strict";

	// Theme color control js
	$(document).ready(function () {
		const isDarkMode = localStorage.getItem('darkMode') === 'true';
		$('body').toggleClass('dark-theme', isDarkMode);

		$('#page-content').fadeIn(0);

		$('.theme-control-btn').on("click", function () {
			$('body').toggleClass('dark-theme');

			const isDark = $('body').hasClass('dark-theme');
			localStorage.setItem('darkMode', isDark);
		});
	});

	// Mobile menu control js
	$(".mobile-menu-control-bar").on("click", function () {
		$(".mobile-menu-overlay").addClass("show");
		$(".navbar-main").addClass("show");
	})
	$(".mobile-menu-overlay").on("click", function () {
		$(".mobile-menu-overlay").removeClass("show");
		$(".navbar-main").removeClass("show");
	})

	// Parallax scroll effect js
	document.querySelectorAll(".move-with-cursor").forEach(a => {
		document.addEventListener("mousemove", function (e) {
			var t = e.clientX,
				e = e.clientY;
			a.style.transition = "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)", a.style.transform = `translate(${.01 * t}px, ${.01 * e}px) rotate(${.01 * (t + e)}deg)`
		})
	}),

		// Email copy button js
		new ClipboardJS('.btn-copy');

	// Email copy button tooltip js
	$(document).ready(function () {
		$(".btn-copy").on("click", function () {
			$(this).addClass("active");

			setTimeout(() => {
				$(this).removeClass("active");
			}, 1000);
		});
	});

	// Magnific popup js
	$(".parent-container").magnificPopup({
		delegate: ".gallery-popup",
		type: "image",
		gallery: {
			enabled: true,
		},
	});

	// Client feedback slider js
	$(".client-feedback-slider").slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: false,
		dots: false,
		infinite: true,
		arrows: true,
		speed: 500,
		prevArrow: '<i class="fas left icon fa-arrow-left"></i>',
		nextArrow: '<i class="fas right icon fa-arrow-right"></i>',
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},]
	});

	// Article publications slider js
	$(".article-publications-slider").slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: false,
		dots: false,
		infinite: true,
		arrows: true,
		speed: 500,
		prevArrow: '<i class="fas left icon fa-arrow-left"></i>',
		nextArrow: '<i class="fas right icon fa-arrow-right"></i>',
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},]
	});

})(jQuery);
