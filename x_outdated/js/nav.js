const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="container-fluid main-container">
      <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-bs-toggle="collapse"
              data-target="#navbar"
              data-bs-target="#navbar"
            >
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="index.html">KATIE GUNDERRMANN</a>
          </div>
          <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
              <li>
                <a href="index.html">
                  <span class="fa fa-home"></span>

                  Home
                </a>
              </li>
              <li>
                <a href="about.html">
                  <span class="fa fa-user"></span>

                  About
                </a>
              </li>
              <li class="dropdown">
                <a
                  href="#"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span class="fa fa-gear"></span>

                  More

                  <span class="caret"></span>
                </a>
                <ul class="dropdown-menu" role="menu">
                  <li class="dropdown-header">More Info</li>
                  <li>
                    <a href="CV.pdf">CV</a>
                  </li>
                  <li>
                    <a href="mailto:kpgund@psu.edu">Contact me</a>
                  </li>
                  <li class="divider"></li>
                  <li class="dropdown-header">Cats!</li>
                  <li>
                    <a href="Ernie2.html">Ernie</a>
                  </li>
                  <li class="divider"></li>
                  <li class="dropdown-header">Find me at</li>
                  <li>
                    <a href="https://twitter.com/kpgund">Twitter</a>
                  </li>
                  <li>
                    <a href="https://fbuderman.net/">Buderman Lab</a>
                  </li>
                  <li>
                    <a
                      href="https://scholar.google.com/citations?hl=en&amp;user=C-XyyTYAAAAJ&amp;view_op=list_works&amp;gmla=AJsN-F7JDyCeDfHQY1_JhEsYCBmO1dksu8PVMim_TbJJqhgEl2jxAqnEEhmR5HsmrPi9uIhIsOQTqo5J-5QB6YP_EIJ-qGfBsAlT8GySTbbIBKcbjbBqVCc"
                      >Google Scholar</a
                    >
                  </li>
                </ul>
              </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li>
                <a href="https://github.com/kpgund">
                  <span class="fa fa-github"></span>

                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <!--/.nav-collapse -->
        </div>
        <!--/.container -->
      </div>
      <!--/.navbar -->
    `;
}

createNav();

// manage active state of menu based on current page
$(document).ready(function () {
    // active menu anchor
    href = window.location.pathname
    href = href.substr(href.lastIndexOf('/') + 1)
    if (href === "")
      href = "index.html";
    var menuAnchor = $('a[href="' + href + '"]');
  
    // mark the anchor link active (and if it's in a dropdown, also mark that active)
    var dropdown = menuAnchor.closest('li.dropdown');
    if (window.bootstrap) { // Bootstrap 4+
      menuAnchor.addClass('active');
      dropdown.find('> .dropdown-toggle').addClass('active');
    } else { // Bootstrap 3
      menuAnchor.parent().addClass('active');
      dropdown.addClass('active');
    }
  
    // Navbar adjustments
    var navHeight = $(".navbar").first().height() + 15;
    var style = document.createElement('style');
    var pt = "padding-top: " + navHeight + "px; ";
    var mt = "margin-top: -" + navHeight + "px; ";
    var css = "";
    // offset scroll position for anchor links (for fixed navbar)
    for (var i = 1; i <= 6; i++) {
      css += ".section h" + i + "{ " + pt + mt + "}\n";
    }
    style.innerHTML = "body {" + pt + "padding-bottom: 40px; }\n" + css;
    document.head.appendChild(style);
  });

// call mathjax for compatibility 
(function () {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src  = "https://mathjax.rstudio.com/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML";
    document.getElementsByTagName("head")[0].appendChild(script);
  })();

  // add bootstrap table styles to pandoc tables
function bootstrapStylePandocTables() {
    $('tr.odd').parent('tbody').parent('table').addClass('table table-condensed');
  }
  $(document).ready(function () {
    bootstrapStylePandocTables();
  });

  $(document).ready(function () {
    window.buildTabsets("TOC");
  });
  
  // tabsets
  $(document).ready(function () {
    $('.tabset-dropdown > .nav-tabs > li').click(function () {
      $(this).parent().toggleClass('nav-tabs-open');
    });
  });
