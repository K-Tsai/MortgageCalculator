(function() {
    var lightningScript = document.createElement('script');
    lightningScript.src = 'https://sohotec3--admin2.sandbox.my.site.com/MortgageCalculator/lightning/lightning.out.js';
    document.head.appendChild(lightningScript);
  
    var lightningDiv = document.createElement('div');
    lightningDiv.id = 'lightningLocator';
    document.body.appendChild(lightningDiv);
  
    lightningScript.onload = function() {
      $Lightning.use(
        "c:MortgageCalculatorOutApp", // name of the Lightning app
        function() {
          // Callback once framework and app loaded
          $Lightning.createComponent(
            "c:MortgageCalculatorV2", // top-level component of your app
            {}, // attributes to set on the component when created
            "lightningLocator", // the DOM location to insert the component
            function(cmp) {
              console.log("Loaded. Active on a page")
            },
          );
        },
        "https://sohotec3--admin2.sandbox.my.site.com/MortgageCalculator/", // Site endpoint
      );
    };
  })();
  