document.cookie = "csrf=" + $('meta[name="csrf-token"]').attr('content');
console.log($('meta[name="csrf-token"]').attr('content'));