let progress_1 = 0;
$("#btn1").on('click', function() {
   if (progress_1 <= 100) {
  		progress_1++
  		console.log(progress_1)
      $("#progressBar").width(progress_1 + '%');
   }
});

let progress_3 = 0;
$("#btn2").on('click', function() {
   if (progress_3 <= 100) {
  		progress_3 += 3
  		console.log(progress_3)
      $("#progressBar").width(progress_3 + '%');
   }
});

let progress_7 = 0;
$("#btn3").on('click', function() {
   if (progress_7 <= 100) {
  		progress_7 += 7
  		console.log(progress_7)
      $("#progressBar").width(progress_7 + '%');
   }
});