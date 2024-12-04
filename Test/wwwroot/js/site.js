// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
//const hamBurger = document.querySelector(".toggle-btn");

//hamBurger.addEventListener("click", function () {
//    const sidebar = document.querySelector("#sidebar");
//    const toggleIcon = this.querySelector("i"); // Select the icon inside the button

//    // Toggle the sidebar's expand class
//    sidebar.classList.toggle("expand");

//    // Change the icon based on the sidebar state
//    if (sidebar.classList.contains("expand")) {
//        toggleIcon.classList.remove("bi-text-indent-left");
//        toggleIcon.classList.add("bi-text-indent-right");
      
//    } else {
//        toggleIcon.classList.remove("bi-text-indent-right");
//        toggleIcon.classList.add("bi-text-indent-left");
//    }
//});

//const hamBurger = document.querySelector(".toggle-btn");

//hamBurger.addEventListener("click", function () {
//    const sidebar = document.querySelector("#sidebar");
//    const toggleIcon = this.querySelector("i"); // Select the icon inside the button

//    // Toggle the sidebar's expand class
//    sidebar.classList.toggle("expand");

//    // Change the icon based on the sidebar state
//    if (sidebar.classList.contains("expand")) {
//        toggleIcon.classList.remove("bi-text-indent-left");
//        toggleIcon.classList.add("bi-text-indent-right");
//    } else {
//        toggleIcon.classList.remove("bi-text-indent-right");
//        toggleIcon.classList.add("bi-text-indent-left");
//    }
//});

//// Add click event listeners to all <a> tags inside the sidebar
//const links = document.querySelectorAll("#sidebar a");

//links.forEach(link => {
//    link.addEventListener("click", function () {
//        // Remove 'active' class from all links
//        links.forEach(link => link.classList.remove("active"));

//        // Add 'active' class to the clicked link
//        this.classList.add("active");
//    });
//});

const hamBurger = document.querySelector(".toggle-btn");
const sidebar = document.querySelector("#sidebar");

// Function to update the sidebar state in localStorage
function updateSidebarState(isExpanded) {
    localStorage.setItem("sidebarExpanded", isExpanded ? "true" : "false");
}

// Apply sidebar state immediately
const isExpanded = localStorage.getItem("sidebarExpanded") === "true";

if (isExpanded) {
    sidebar.classList.add("expand");
    // Optionally, set the correct icon here if needed
    const toggleIcon = document.querySelector(".toggle-btn i");
    if (toggleIcon) {
        toggleIcon.classList.remove("bi-text-indent-left");
        toggleIcon.classList.add("bi-text-indent-right");
    }
}

// Wait until DOM is fully loaded for interactions
document.addEventListener("DOMContentLoaded", function () {
    // Toggle sidebar and save the state
    hamBurger.addEventListener("click", function () {
        const toggleIcon = this.querySelector("i"); // Select the icon inside the button

        // Toggle the sidebar's expand class
        const isExpanded = sidebar.classList.toggle("expand");

        // Update the icon based on the sidebar state
        if (isExpanded) {
            toggleIcon.classList.remove("bi-text-indent-left");
            toggleIcon.classList.add("bi-text-indent-right");
        } else {
            toggleIcon.classList.remove("bi-text-indent-right");
            toggleIcon.classList.add("bi-text-indent-left");
        }

        // Save the state in localStorage
        updateSidebarState(isExpanded);
    });

    // Add click event listeners to all <a> tags inside the sidebar
    const links = document.querySelectorAll("#sidebar a");

    links.forEach(link => {
        link.addEventListener("click", function () {
            // Remove 'active' class from all links
            links.forEach(link => link.classList.remove("active"));

            // Add 'active' class to the clicked link
            this.classList.add("active");
        });
    });
});


$(document).ready(function () {
    $('#mainTableFormate').DataTable({
        "paging": true,        // Enables pagination
        "searching": true,     // Enables the search box
        "info": true,          // Shows table information
        "ordering": true       // Enables column sorting
    });
});