let view;
let cost;
let index;
let discount;

$("#flexSwitchCheck").change(function(){
if ($("#flexSwitchCheck").is(":checked")){
  cost = cost*0.75;
}
})


$("#range").change(function(){
  index = Number($("#range").val())

  if (index ==1){
    view="10K";
    cost=8;

  }
  else if (index ==2){
    view="50K"
    cost= 12;
  } 
  else if (index ==3){
    view="100K"
    cost = 16;
  }
  else if (index ==4){
    view="500K";
    cost = 24;
  }
  else if (index == 5){
    view="1M"
    cost = 36;
  }

  if ($("#flexSwitchCheck").is(":checked")){
  $("#dollar").html("$"+cost*0.75+".00 ")
  console.log(cost)
}else{
  $("#dollar").html("$"+cost+".00 ")
}
  
  $("#view").html(view);

})
