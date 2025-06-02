      function loadAuthors() {
        // Load the data.csv file
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "data2.csv", true);
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status === 200) {
            // Split the csv into rows
            var rows = xhr.responseText.split("\n");

            // Extract the headers (first row)
            var headers = rows[0].split(";");
            var statusIndex = headers.indexOf("Status");
            var authorIndex = headers.indexOf("Author");
            var paperIndex = headers.indexOf("Paper");
            var journalIndex = headers.indexOf("Journal");
            var yearIndex = headers.indexOf("Year");

            // Create a document fragment to store the generated elements
            var fragment = document.createDocumentFragment();

            // Loop through the remaining rows
            for (var i = 1; i < rows.length; i++) {
              var cells = rows[i].split(";");
              var status = cells[statusIndex];
              var authors = cells[authorIndex].split("&");
              var paper = cells[paperIndex];
              var journal = cells[journalIndex];
              var year = cells[yearIndex];

              // Create a paragraph element
              var p = document.createElement("p");

              // Add the author names to the paragraph
              for (var j = 0; j < authors.length; j++) {
                var author = authors[j];
                var span = document.createElement("span");
                span.textContent = author;
                if (author.trim() === "K.P. Gundermann") {
                  span.style.fontWeight = "bold";
                }
                p.appendChild(span);

                // Add "and" before the last author
                if (j === authors.length - 2) {
                  p.appendChild(document.createTextNode(" and "));
                } else if (j < authors.length - 2) {
                  p.appendChild(document.createTextNode(", "));
                }
              }

              // Add the paper to the paragraph
              p.appendChild(document.createTextNode(status + ", " + year + ", " + paper + ", " + journal + "."));

              // Append the paragraph to the fragment
              fragment.appendChild(p);
            }

            // Add the fragment to the sentencesContainer element
            document.getElementById("sentencesContainer").appendChild(fragment);
          }
        };
        xhr.send();
      }