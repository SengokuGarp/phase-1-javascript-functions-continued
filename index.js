// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
  function mondayWork(work = 'go to the office') {
    return `This Monday, I will ${work}.`;
  }
  
  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    }
  }
  
  
  const saturdayFunResult = saturdayFun();
  console.log(saturdayFunResult);
  
  const customSaturdayFunResult = saturdayFun("play tennis");
  console.log(customSaturdayFunResult);
  
  const mondayWorkResult = mondayWork();
  console.log(mondayWorkResult);
  
  const customMondayWorkResult = mondayWork("work from home");
  console.log(customMondayWorkResult);
  
  const wrapAdjectiveFunction = wrapAdjective("!!!");
  const wrappedAdjective = wrapAdjectiveFunction("awesome");
  console.log(wrappedAdjective);
  
  const customWrapAdjectiveFunction = wrapAdjective("%");
  const wrappedAdjective2 = customWrapAdjectiveFunction("a dedicated programmer");
  console.log(wrappedAdjective2);
  