function logNumberAfterTimeout(num) {
    setTimeout(function() {
      console.log(num);
    }, 5000);
  }

  logNumberAfterTimeout(5);