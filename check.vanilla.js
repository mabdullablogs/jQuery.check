/* the plugin extends the window object */
window.check = function(expression, cases) {
  for(var i in cases) {
    /* make sure the case has a callback */
    if(typeof(cases[i]) === "function" && i == expression) {
      /* the first argument in the callback will equal the expression */
      cases[i].apply(cases[i], [expression]);
      /* return true if a match is found */
      return true;
    }
  }
  /* return false if no match is found */
  return false;
};
