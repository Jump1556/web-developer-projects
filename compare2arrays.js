//remove same line
function minGrid(grid) {

  for (var i = grid.length-1; i>0; i--) {
      if (equalArrays(grid[i], grid[i-1])) {
        grid.splice(i,1)
    }
  }

  return grid
}


//compare 2 rows in 2d array or 2 arrays
function equalArrays(array1,array2) {

  if (array1.length != array2.length) {
    return false
  }

  for (var i=0; i<array1.length; i++) {
    if (array1[i] != array2[i]) {
      return false  
    }
  }

  return true
}