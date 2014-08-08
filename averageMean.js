function averageFinder(initialNums) {

  // Make array without node and node.js
  var nums = [];
  
  for (var i = 2; i < initialNums.length; i++) {
    nums.push(parseInt(initialNums[i]));
  };


  // Calculate mean
  var total = 0;

  for (var i = 0; i < nums.length; i++) {
    total += nums[i];
  };

  var mean = (total / nums.length).toFixed(2);


  // Find median
  var median;
  var order = nums.sort();
  
  if (order.length % 2 === 0) {
    
    var lowMid = order[(order.length / 2) - 1]; 
    var highMid = order[(order.length / 2)];

    median = (lowMid + highMid) / 2;

  } else {
    
    var medianIndex = Math.floor(order.length / 2);
    
    median = order[medianIndex];
    
  };


  // Find mode
  var tallies = [];

  for (var i = 0; i < nums.length; i++) {
    if (tallies[nums[i]]) {
      tallies[nums[i]] += 1;
    } else {
      tallies[nums[i]] = 1;
    }
  };
  
  var mode = [],
      modeNum = 0,
      modeText;
  tallies.forEach(function(amnt, index) {
    if (amnt > modeNum) {
      mode = [];
      mode.push(index);
      modeNum = amnt;
      modeText = "There is a mode"
    }

    if (amnt === modeNum && mode.indexOf(index)) {
      mode.push(index);
      modeText = "No Single Mode (One number doesn't appear the most times)";  
    }
  });

  // print results
  console.log(tallies)
  console.log("Mean: " + mean + "   Median: " + median + "   Mode: " + mode + "   " + modeText);

};

// call function 
averageFinder(process.argv);

