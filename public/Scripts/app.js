// Title:            Mayuran's Portfolio
// File:             app.js
// Date:             /10/2021
// Semester:         Web development Fall 2021
// Author:           Mayuran Srichandrabose
// StudentID:		 301130283
// Lab Section:      Assignment 1

(function () {
    function Start() {
        console.log("App Started...");

        let deleteButtons = document.querySelectorAll(".btn-danger");

        for (button of deleteButtons) {
            button.addEventListener("click", (event) => {
                if (!confirm("Are you sure?")) {
                    event.preventDefault();
                    window.location.assign("list");
                }
            });
        }
    }

    window.addEventListener("load", Start);
})();
