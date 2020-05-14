function BowlersEconomyIPL(matches,deliveries){
    const economic = {};
    for(let year of matches){
        if(economic.hasOwnProperty(year.season)==false){
    let runs={};
    let over={};
    for(let match of matches){
        for(let del of deliveries){    
            if(match.id===del.match_id && match.season===year.season){
            if(runs[del.bowler]){
            runs[del.bowler]+=parseInt(del.total_runs);
            if(del.ball=='1')
            over[del.bowler]+=1;
    }
        else{
        runs[del.bowler]=parseInt(del.total_runs);
        over[del.bowler]=1;
         }
     }
    }
 }
var res={};
for(let score in runs){
res[score]=parseFloat((runs[score]/over[score]).toFixed(2));
}
let arr=Object.values(res);
arr.sort(function(a,b){ 
    return a-b 
});       
 var last={};
 for(let i=0;i<10;i++){
 for(let j in res){
     if(res[j]==arr[i])
     last[j]=arr[i];
    }
}
economic[year.season]=last;
}
}
return economic;
}

module.exports = BowlersEconomyIPL;