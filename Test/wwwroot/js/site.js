// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
    const sidebar = document.querySelector("#sidebar");
    const toggleIcon = this.querySelector("i"); // Select the icon inside the button

    // Toggle the sidebar's expand class
    sidebar.classList.toggle("expand");

    // Change the icon based on the sidebar state
    if (sidebar.classList.contains("expand")) {
        toggleIcon.classList.remove("bi-text-indent-left");
        toggleIcon.classList.add("bi-text-indent-right");
      
    } else {
        toggleIcon.classList.remove("bi-text-indent-right");
        toggleIcon.classList.add("bi-text-indent-left");
    }
});





$(document).ready(function () {
    $('#mainTableFormate').DataTable({
        "paging": true,        // Enables pagination
        "searching": true,     // Enables the search box
        "info": true,          // Shows table information
        "ordering": true       // Enables column sorting
    });
});